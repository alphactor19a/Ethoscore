## Relevant Files

- `app.py` - Main Streamlit application file; will be refactored for new UI/UX and integration of all features.
- `src/article_processor.py` - Handles article extraction and processing; may require updates for metadata display.
- `src/model_analyzer.py` - Provides model inference and results; may need minor changes for new result formats.
- `requirements.txt` - Ensure all required libraries (e.g., Altair, Plotly) are included for charts/exports.

### Notes

- All UI/UX changes will be implemented in `app.py`.
- Utility or helper functions for export/download may be added to a new file if needed.
- No new test files are specified, but manual testing of UI/UX is required.

## Tasks

- [ ] 1.0 Refactor Typography and Color Palette
  - [x] 1.1 Add custom CSS in `app.py` to set a serif font (e.g., Merriweather, Georgia) for body text.
  - [x] 1.2 Apply a neutral grayscale + soft blue color palette to backgrounds, cards, and accents.
  - [x] 1.3 Ensure all text, buttons, and containers use the new color and font scheme.

- [ ] 2.0 Redesign Layout to Card-Based Structure
  - [x] 2.1 Replace or wrap main sections (input, results, metadata) in Streamlit containers or custom card-like divs.
  - [x] 2.2 Add clear whitespace and section separation for visual hierarchy.
  - [x] 2.3 Ensure layout is wide and desktop-focused, not mobile-first.

- [ ] 3.0 Implement Summary Cards and Collapsible Raw Results
  - [x] 3.1 Create summary cards for key metrics (predicted framing, confidence, emotional intensity) using containers or custom HTML/CSS.
  - [x] 3.2 Add collapsible/expandable sections (using `st.expander`) for raw model output and advanced details.
  - [x] 3.3 Ensure summary cards are visually prominent and easy to scan.

- [ ] 4.0 Integrate Comparative Metrics and Charts
  - [x] 4.1 Use Altair or Plotly to create bar/line charts for emotion scores, confidence intervals, and trends.
  - [x] 4.2 Display charts in a dedicated card/section with clear labels and axes.
  - [x] 4.3 Style charts to match the research/academic aesthetic (minimal, clear, no bright colors).

- [x] 5.0 Add Export/Download Functionality
  - [x] 5.1 Add `st.download_button` for exporting results as CSV.
  - [x] 5.2 Add export/download for charts as PNG or SVG (using Altair/Plotly export features).
  - [x] 5.3 Ensure export buttons are visible but unobtrusive in the UI.

- [ ] 6.0 Enhance Article Metadata Display and Hierarchy
  - [x] 6.1 Display article title, source, date, and body with clear visual hierarchy (e.g., larger title, muted metadata, readable body font).
  - [x] 6.2 Place metadata in a dedicated card or section above the main results.
  - [x] 6.3 Update `src/article_processor.py` if needed to extract and provide additional metadata.

- [ ] 7.0 Implement Robust Edge Case Handling
  - [x] 7.1 Show warning messages for model failure, short articles, or empty time ranges using `st.warning` or `st.info`.
  - [x] 7.2 Display placeholder charts/messages when no data is available.
  - [x] 7.3 Ensure all error/edge cases are handled gracefully and do not break the layout.

- [ ] 8.0 Remove Dashboard/Startup Aesthetic and Enforce Research Style
  - [x] 8.1 Remove or refactor any dashboard-like, animated, or playful UI elements.
  - [x] 8.2 Ensure all fonts, colors, and layouts match the academic/research-focused style.
  - [x] 8.3 Double-check that the app remains single-page and light-mode only.

- [ ] 9.0 Test and Validate Full Integration with Existing Functionality
  - [x] 9.1 Manually test all new UI/UX features with various articles and edge cases.
  - [x] 9.2 Verify that ML model loading, inference, and article processing still work as expected.
  - [x] 9.3 Collect feedback from target users (researchers, journalists, policy analysts) if possible. 