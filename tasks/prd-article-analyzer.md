# PRD: Research-Oriented UI Redesign for Ethoscore (app.py)

## 1. Introduction/Overview
The goal of this feature is to transform the Ethoscore Streamlit app from a prototype into a polished, professional, and research-oriented tool. The redesign will focus on clean typography, clear visual hierarchy, modular layout, and data-driven presentation, inspired by platforms like Our World in Data, Pew Research, and Observable notebooks. The new UI should support researchers, journalists, and policy analysts in analyzing, comparing, and presenting emotional framing in news articles.

## 2. Goals
- Present results and metrics in a visually clear, publication-ready format.
- Establish a consistent, academic visual language (serif body font, neutral palette, card-based layout).
- Highlight key data (emotion scores, confidence intervals, comparisons) with summary cards and charts.
- Support export and sharing for research, presentations, and collaboration.
- Handle edge cases gracefully with informative UI feedback.

## 3. User Stories
- As a researcher, I want to analyze articles and view emotional bias over time so that I can track polarization.
- As a journalist, I want to compare media outlets’ tone on the same event so that I can report on narrative bias.
- As a policymaker, I want a clear “crisis signal” from media discourse so that I can preemptively respond.

## 4. Functional Requirements
1. The app must use a serif font for body text and a neutral (grayscale + soft blue) color palette.
2. The layout must be card-based, with clear separation between input, results, and metadata.
3. Results must be summarized in prominent cards, with collapsible sections for raw details.
4. Comparative metrics (e.g., emotion scores, confidence intervals) must be visualized using line/bar charts.
5. The app must provide export/download buttons for results (e.g., CSV, PNG of charts).
6. Article text and metadata must be displayed with clear hierarchy (title, source, date, body, etc.).
7. The UI must handle and display edge cases: model failure, short articles, empty time ranges.
8. The app must avoid animations, bright colors, playful fonts, and mobile-first layouts.
9. The app must not use dashboard-like or Material UI aesthetics.
10. The app must remain single-page and light-mode only.

## 5. Non-Goals (Out of Scope)
- No dark mode or mobile-first design.
- No dashboard/startup-style UI (e.g., Material UI, heavy cards, or bright accent colors).
- No animations or playful/novelty fonts.
- No multi-page navigation or user authentication.

## 6. Design Considerations
- Use a serif font (e.g., Georgia, Merriweather) for body text; sans-serif for headings if needed.
- Neutral, research-focused color palette: grayscale with soft blue accents for highlights.
- Card-based layout for all major sections (input, results, metadata, charts).
- Charts should be simple, publication-ready (e.g., Altair, Plotly with minimal styling).
- Collapsible/expandable sections for raw model output and advanced details.
- Export/download buttons should be clearly visible but unobtrusive.
- Layout should be wide, with generous whitespace and clear sectioning.

## 7. Technical Considerations
- Remain a single Streamlit page for simplicity.
- Use Streamlit’s built-in charting (Altair, Plotly) for visualizations.
- Ensure all UI elements are accessible and readable on desktop screens.
- Avoid third-party UI kits that mimic dashboard/startup aesthetics.

## 8. Success Metrics
- Users (researchers, journalists, policy analysts) report the app is visually clear and suitable for presentations/publication.
- Increased use of export/download features.
- Reduced user confusion or complaints about layout/appearance.
- Positive feedback on clarity of results and data visualizations.

## 9. Open Questions
- Should any specific chart types or data visualizations be prioritized?
- Are there preferred libraries for export/download functionality?
- Should the app support custom branding (e.g., institutional logo) in the future?
- Any accessibility requirements (e.g., colorblind-friendly palette)? 