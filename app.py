import streamlit as st
import os
import logging
from typing import Dict, Any
import altair as alt
import pandas as pd

# Inject custom CSS for white background, black text, and compact layout, with black borders for containers/expanders/radios
st.markdown(
    """
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');
    html, body, [class^='css'], .stApp {
        background: #f8f9fa !important;
        color: var(--text-color, #111) !important;
        font-family: 'Merriweather', Georgia, serif !important;
    }
    /* Prevent layout from collapsing on small/mobile screens */
    .block-container, .stApp {
        min-width: 900px !important;
    }
    /* Main container backgrounds */
    .block-container, .stContainer {
        background: #f0f2f6 !important;
        border: 1px solid #e3e8ee !important;
        border-radius: 8px !important;
        color: var(--text-color, #111) !important;
        padding: 1.2rem !important;
        font-family: 'Merriweather', Georgia, serif !important;
    }
    /* Card-like sections */
    .stExpander, .stExpanderHeader, .stExpanderContent {
        background: #e3e8ee !important;
        color: var(--text-color, #111) !important;
        border: 1px solid #0068c9 !important;
        border-radius: 8px !important;
        box-shadow: none !important;
        font-family: 'Merriweather', Georgia, serif !important;
    }
    .stExpanderHeader {
        font-size: 0.97rem !important;
        padding: 0.2rem 0.7rem !important;
    }
    .stExpanderContent {
        padding: 0.5rem 0.5rem !important;
    }
    /* Radio styling */
    .stRadio > div {
        background: #e3e8ee !important;
        border: 1px solid #0068c9 !important;
        border-radius: 8px !important;
        color: var(--text-color, #111) !important;
        padding: 0.2rem 0.7rem !important;
        font-family: 'Merriweather', Georgia, serif !important;
    }
    .stRadio label {
        color: #111 !important;
        font-family: 'Merriweather', Georgia, serif !important;
    }
    /* Button styling */
    .stButton>button, .stDownloadButton>button {
        background: #f0f2f6 !important;
        color: #111 !important;
        border: 1px solid #0068c9 !important;
        border-radius: 6px !important;
        padding: 0.3rem 0.8rem !important;
        font-size: 0.95rem !important;
        min-height: 32px !important;
        font-family: 'Merriweather', Georgia, serif !important;
    }
    /* Metrics and tables */
    .stMetric, .stTable {
        background: #e3e8ee !important;
        color: var(--text-color, #111) !important;
        border-radius: 6px !important;
        font-family: 'Merriweather', Georgia, serif !important;
    }
    .stMetric {
        margin-bottom: 0.5rem !important;
    }
    /* Text input, text area, selectbox, segmented control, checkbox */
    .stTextInput>div>div>input, .stTextArea textarea, .stSelectbox, .stSegmentedControl, .stCheckbox label {
        background: #f0f2f6 !important;
        color: #111 !important;
        font-size: 0.95rem !important;
        padding: 0.3rem 0.6rem !important;
        border-radius: 4px !important;
        font-family: 'Merriweather', Georgia, serif !important;
    }
    /* Accent color for highlights */
    .stSubheader, .stTitle, .stHeader {
        color: #0068c9 !important;
        font-weight: 500 !important;
        font-size: 1.1rem !important;
        margin-bottom: 0.5rem !important;
        margin-top: 0.5rem !important;
        font-family: 'Merriweather', Georgia, serif !important;
    }
    /* General text color override */
    .stMarkdown, .stMarkdown *, .stText, .stText *, .stWrite, .stWrite *, .stMetricLabel, .stMetricValue {
        color: #111 !important;
        font-family: 'Merriweather', Georgia, serif !important;
    }
    </style>
    """,
    unsafe_allow_html=True
)

# Import our custom modules
from src.article_processor import (
    process_url_input, 
    process_manual_text_input,
    ArticleProcessingError,
    URLValidationError,
    ArticleExtractionError
)
from src.model_analyzer import (
    create_analyzer,
    ModelAnalyzerError,
    ModelLoadingError,
    ModelInferenceError
)

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Set page configuration
# This app is intentionally designed for wide, desktop-focused layouts (not mobile-first)
st.set_page_config(
    page_title="Ethoscore",
    page_icon="📰",
    layout="wide",  # Wide layout for desktop
    initial_sidebar_state="collapsed"
)

# Initialize session state for model analyzer
if 'analyzer' not in st.session_state:
    st.session_state.analyzer = None
if 'analyzer_loading' not in st.session_state:
    st.session_state.analyzer_loading = False

def initialize_analyzer():
    """Initialize the model analyzer with caching"""
    if st.session_state.analyzer is None and not st.session_state.analyzer_loading:
        st.session_state.analyzer_loading = True
        try:
            with st.spinner("Loading ML models... This may take a moment."):
                st.session_state.analyzer = create_analyzer()
            st.success("Models loaded successfully!")
        except ModelLoadingError as e:
            st.error(f"Failed to load models: {str(e)}")
            st.session_state.analyzer = None
        except Exception as e:
            st.error(f"Unexpected error loading models: {str(e)}")
            st.session_state.analyzer = None
        finally:
            st.session_state.analyzer_loading = False

def display_analysis_results(results: Dict[str, Any]):
    """Display the analysis results in a formatted way"""
    # --- Article Metadata Card ---
    st.markdown(
        '<div style="background:#f8f9fa; border:1.5px solid #a3a8b4; border-radius:12px; box-shadow:0 2px 12px rgba(0,0,0,0.04); padding:1.5rem 1.5rem 1.2rem 1.5rem; margin-bottom:2rem;">',
        unsafe_allow_html=True
    )
    st.markdown(f"""
        <div style='font-size:1.7rem; font-weight:700; font-family:Merriweather,Georgia,serif; color:#111; margin-bottom:0.3rem;'>
            {results.get('title', 'Untitled Article')}
        </div>
        <div style='font-size:1.05rem; color:#6c757d; margin-bottom:0.7rem;'>
            {results.get('source', 'Unknown Source')}
            {f" | {str(results.get('publish_date'))[:10]}" if results.get('publish_date') else ''}
        </div>
        <div style='font-size:1.01rem; color:#888; margin-bottom:0.5rem;'>
            {f"By {', '.join(results.get('authors', []))}" if results.get('authors') else ''}
        </div>
        <div style='font-size:1.08rem; font-family:Merriweather,Georgia,serif; color:#222; margin-bottom:0.5rem;'>
            {results.get('body_preview', 'No preview available.')}
        </div>
        <div style='font-size:0.98rem; color:#888;'>
            Body Length: {results.get('body_length', 'N/A')} characters &nbsp;|&nbsp; Analysis Time: {results.get('timestamp', 'N/A')}
        </div>
    """, unsafe_allow_html=True)
    st.markdown('</div>', unsafe_allow_html=True)
    # --- End Article Metadata Card ---
    # --- Results Card ---
    with st.container():
        st.subheader("🔍 Analysis Results")
        # Article metadata
        with st.expander("Article Information", expanded=False):
            st.write(f"**Title:** {results['title']}")
            st.write(f"**Body Length:** {results['body_length']} characters")
            st.write(f"**Analysis Time:** {results['timestamp']}")
        # Create columns for side-by-side comparison
        col1, col2 = st.columns(2)
        with col1:
            st.subheader("Ordinal Model Analysis")
            ordinal = results['ordinal_analysis']
            # --- Edge case: missing or empty probabilities ---
            if not ordinal.get('all_probabilities'):
                st.warning("No probability data available for the ordinal model.")
            else:
                # --- Ordinal Model Summary Card ---
                st.markdown(
                    '<div style="background:#e3e8ee; border:1.5px solid #0068c9; border-radius:10px; box-shadow:0 2px 8px rgba(0,0,0,0.04); padding:1.1rem 1.2rem 0.7rem 1.2rem; margin-bottom:1rem;">',
                    unsafe_allow_html=True
                )
                st.metric(
                    label="Predicted Framing",
                    value=ordinal['predicted_label'],
                    delta=f"Confidence: {ordinal['confidence']:.1%}"
                )
                st.metric(
                    label="Emotional Intensity Score",
                    value=f"{ordinal['scale_score']:.2f}",
                    help="Scale score from the ordinal model indicating emotional intensity"
                )
                st.markdown('</div>', unsafe_allow_html=True)
                st.write("**Probability Breakdown:**")
                for label, prob in ordinal['all_probabilities'].items():
                    st.write(f"• {label}: {prob:.1%}")
        with col2:
            st.subheader("3-Class Model Analysis")
            classification = results['classification_analysis']
            # --- Edge case: missing or empty probabilities ---
            if not classification.get('all_probabilities'):
                st.warning("No probability data available for the 3-class model.")
            else:
                # --- 3-Class Model Summary Card ---
                st.markdown(
                    '<div style="background:#e3e8ee; border:1.5px solid #0068c9; border-radius:10px; box-shadow:0 2px 8px rgba(0,0,0,0.04); padding:1.1rem 1.2rem 0.7rem 1.2rem; margin-bottom:1rem;">',
                    unsafe_allow_html=True
                )
                st.metric(
                    label="Predicted Framing",
                    value=classification['predicted_label'],
                    delta=f"Confidence: {classification['confidence']:.1%}"
                )
                st.markdown('</div>', unsafe_allow_html=True)
                st.write("**Probability Breakdown:**")
                for label, prob in classification['all_probabilities'].items():
                    st.write(f"• {label}: {prob:.1%}")
        # --- Probability Breakdown Bar Chart ---
        if not ordinal.get('all_probabilities') or not classification.get('all_probabilities'):
            st.info("No probability data available to display the comparative chart.")
        else:
            pass  # Chart and export buttons removed as requested
        # --- End Probability Breakdown Bar Chart ---
        # --- Raw Model Output & Advanced Details ---
        with st.expander("Raw Model Output & Advanced Details", expanded=False):
            st.json({
                "ordinal_analysis": results.get('ordinal_analysis', {}),
                "classification_analysis": results.get('classification_analysis', {})
            })
        # --- End Raw Model Output & Advanced Details ---
        # Summary comparison
        st.subheader("Model Comparison")
        comparison_data = {
            "Model": ["Ordinal Model", "3-Class Model"],
            "Prediction": [ordinal['predicted_label'], classification['predicted_label']],
            "Confidence": [f"{ordinal['confidence']:.1%}", f"{classification['confidence']:.1%}"],
            "Summary": [ordinal['summary'], classification['summary']]
        }
        st.table(comparison_data)
    # Whitespace after results card
    st.markdown('<div style="height:2.5rem"></div>', unsafe_allow_html=True)
    # --- End Results Card ---

def main():
    """Main application function"""
    
    # Application title and description
    st.title("Ethoscore")
    st.markdown("""
   Emotional framing analysis for news articles
    """)
    
    # Initialize models
    initialize_analyzer()
    
    # Create two columns for better layout
    col1, col2 = st.columns([2, 1])
    
    # --- Input Card ---
    with st.container():
        with col1:
            st.subheader("Input Method")
            # Input method selection
            input_method = st.radio(
                "Choose how you want to provide the article:",
                ["URL", "Manual Text Input"],
                horizontal=True
            )
            
            title = ""
            body = ""
            article_info = None
            
            if input_method == "URL":
                st.subheader("Article URL")
                url = st.text_input(
                    "Enter the article URL:",
                    placeholder="https://example.com/article",
                    help="Paste the URL of the news article you want to analyze"
                )
                
                if url:
                    try:
                        with st.spinner("Extracting article content..."):
                            title, body, article_info = process_url_input(url)
                        
                        st.success("Article extracted successfully!")
                        
                        # Display extracted content preview
                        with st.expander("Extracted Content Preview", expanded=True):
                            st.write(f"**Title:** {title}")
                            st.write(f"**Body Preview:** {body[:200]}...")
                            st.write(f"**Word Count:** {article_info.get('word_count', 'N/A')}")
                            st.write(f"**Reading Time:** {article_info.get('reading_time', 'N/A')} minutes")
                        
                    except URLValidationError as e:
                        st.error(f"Invalid URL: {str(e)}")
                    except ArticleExtractionError as e:
                        st.error(f"Failed to extract article: {str(e)}")
                    except Exception as e:
                        st.error(f"Unexpected error: {str(e)}")
                    
            else:  # Manual Text Input
                st.subheader("Article Content")
                title = st.text_input(
                    "Article Title:",
                    placeholder="Enter the article title here",
                    help="The headline or title of the article"
                )
                
                body = st.text_area(
                    "Article Body:",
                    placeholder="Paste the main content of the article here...",
                    height=300,
                    help="The main text content of the article"
                )
                
                if title and body:
                    try:
                        title, body, article_info = process_manual_text_input(title, body)
                        
                        # Display processed content info
                        with st.expander("Content Information", expanded=False):
                            st.write(f"**Word Count:** {article_info.get('word_count', 'N/A')}")
                            st.write(f"**Reading Time:** {article_info.get('reading_time', 'N/A')} minutes")
                        
                    except ArticleProcessingError as e:
                        st.error(f"Text processing error: {str(e)}")
                    except Exception as e:
                        st.error(f"Unexpected error: {str(e)}")
    # Whitespace between cards
    st.markdown('<div style="height:2.5rem"></div>', unsafe_allow_html=True)
    # --- Model Status Card ---
    with st.container():
        with col2:
            st.subheader("Model Status")
            if st.session_state.analyzer is not None:
                st.success(" Models loaded and ready")
                model_info = st.session_state.analyzer.get_model_info()
                with st.expander("Model Details", expanded=False):
                    st.write(f"**Device:** {model_info['device_map']}")
                    st.write(f"**Classes:** {', '.join(model_info['class_labels'])}")
                    st.write(f"**Ordinal Model:** {'' if model_info['ordinal_model_loaded'] else '❌'}")
                    st.write(f"**3-Class Model:** {'' if model_info['class_model_loaded'] else '❌'}")
            elif st.session_state.analyzer_loading:
                st.info("⏳ Loading models...")
            else:
                st.warning(" Models not loaded")
                if st.button("Retry Loading Models"):
                    st.session_state.analyzer = None
                    st.rerun()
    # Whitespace between cards
    st.markdown('<div style="height:2.5rem"></div>', unsafe_allow_html=True)
    # Analysis button and results
    st.markdown("---")
    
    # Check if we have content to analyze
    can_analyze = bool(title and body and st.session_state.analyzer is not None)
    
    if st.button("Analyze Article", type="primary", use_container_width=True, disabled=not can_analyze):
        if not st.session_state.analyzer:
            st.error("Models are not loaded. Please wait for models to load or retry loading.")
        elif not title or not body:
            st.error("Please provide both article title and body content.")
        else:
            try:
                with st.spinner("Analyzing article framing..."):
                    results = st.session_state.analyzer.analyze_article(title, body)
                
                # Display results
                display_analysis_results(results)
                
            except ModelInferenceError as e:
                st.error(f"Analysis failed: {str(e)}")
            except Exception as e:
                st.error(f"Unexpected error during analysis: {str(e)}")
    
    # Help section
    

if __name__ == "__main__":
    main() 