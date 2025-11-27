# UI/UX Style Guide & Design System

This document serves as the source of truth for the Ethoscore landing page design. All new pages and components must strictly adhere to these specifications to maintain visual consistency.

## 1. Layout & Grid System

The design relies on a precise pixel-perfect layout with a vertical rhythm grid.

### Global Container
- **Outer Wrapper Width**: `1304px` (max-width constraint for large screens).
- **Alignment**: Centered or left-aligned depending on the section context, but the main grid structure is consistent.
- **Vertical Rhythm**: The page uses a 24px baseline grid created by a repeating background gradient.
  ```css
  background-image: repeating-linear-gradient(to bottom, transparent, transparent 23px, #E7E5E4 23px, #E7E5E4 24px);
  background-size: 100% 24px;
  ```

### Content Columns
- **Main Content Column**: `528px` width.
  - Used for the central feed, article content, and hero sections.
  - Often explicitly set: `width: 528px`.
- **Right Border**: The main content column often has a right border.
  - `border-right: 1px solid var(--color-grey-90, #E7E5E4)`.

### Spacing & Margins
- **Footer/Header Alignment**:
  - Padding Left/Right (Footer): `388px` (varies by responsive breakpoint, but standard for desktop).
  - Padding Left (About Page Content): `404px`.
- **Section Gaps**:
  - Large gaps: `120px` (Hero section).
  - Medium gaps: `48px`.
  - Small gaps: `16px`, `24px`.

---

## 2. Color Palette

### Greyscale (Primary)
| Variable | Hex | Usage |
|----------|-----|-------|
| `--color-grey-10` | `#1C1917` | Primary Black, Headings, Active Nav Background, Pill Background |
| `--color-grey-15` | `#292524` | Primary Text, High Contrast Headings |
| `--color-grey-25` | `#44403C` | Secondary Text, Logo Text |
| `--color-grey-32` | `#57534E` | Body Text, Descriptions |
| `--color-grey-64` | `#A8A29E` | Meta text, timestamps, "Metrics as of" |
| `--color-grey-83` | `#D6D3D1` | Dashed lines, Dividers |
| `--color-grey-90` | `#E7E5E4` | Grid lines, Nav Container Background |
| `--color-grey-91` | `#E5E7EB` | Borders, Card Borders |
| `--color-grey-98` | `#FAFAF9` | Footer Background, Card Backgrounds |
| `--color-white-solid` | `#FFFFFF` | White text, Card surface |

### Sentiment / Highlights
Used for highlighting text backgrounds in testimonials or analysis.
- **Green (Positive/Safe)**: `#c8e6c9`
- **Yellow (Caution/Warning)**: `#fff9c4`
- **Red (Critical/Alarmist)**: `#ffcccc`

---

## 3. Typography

### Font Families
1.  **Klim Type Foundry** (Custom Serif)
    -   Usage: Hero headlines, Testimonial body text.
    -   Weights: `400` (Regular), `550` (Medium/Bold).
    -   *Fallback*: Serif.

2.  **Inter** (Sans-Serif)
    -   Usage: Section headings, Feature titles, CTA text.
    -   Weights: `400`.
    -   *Fallback*: Sans-serif.

3.  **SF Pro Text** (System Sans-Serif)
    -   Usage: Body text, Navigation, Buttons, Meta info, Author names.
    -   Weights: `400` (Regular), `500` (Medium).
    -   *Fallback*: `-apple-system`, `BlinkMacSystemFont`, sans-serif.

4.  **Menlo** (Monospace)
    -   Usage: Data metrics, Technical descriptors ("Metrics as of").
    -   Weights: `400`.

### Type Scale & Styles

| Style Name | Font Family | Size | Line Height | Weight | Color |
|------------|-------------|------|-------------|--------|-------|
| **Hero Title** | Klim Type Foundry | `40.7px` | `48px` | 550 | Grey-15 |
| **CTA Heading** | Inter | `40.1px` | `48px` | 400 | Grey-15 |
| **Section Heading** | Inter | ~`20px` (19.7-20.3) | `28.8px` | 400 | Grey-15 |
| **Subheading** | Klim Type Foundry | `28px` | `28.8px` | 550 | Grey-15 |
| **Body / Description** | SF Pro Text | `14px` | `21px` | 400 | Grey-32 |
| **Nav / Button** | SF Pro Text | `14px` | `21px` | 400 | Grey-10 / White |
| **Card Author** | SF Pro Text | `18px` | `27px` | 500 | Grey-10 |
| **Card Body** | Klim Type Foundry | `18px` | `21.6px` | 400 | Grey-32 |
| **Meta / Mono** | Menlo | `14px` | `16.8px` | 400 | Grey-32 |
| **Tiny Meta** | Menlo | `12px` | `18px` | 400 | Grey-64 |

---

## 4. Components

### Buttons & Pills
- **Shape**: Fully rounded (`borderRadius: 9999px`).
- **Primary (Black)**:
  - Background: `#1C1917`
  - Text: White
  - Padding: `4px 12px`
- **Secondary (Light)**:
  - Background: `#D6D3D1`
  - Text: `#1C1917`
  - Padding: `4px 12px`
- **Typography**: `14px` SF Pro Text.

### Navigation Bar
- **Container**:
  - Background: `#E7E5E4` (Grey-90).
  - Padding: `4px`.
  - Radius: `9999px`.
  - Shadow: `0px 1px 3px rgba(0, 0, 0, 0.1)`.
- **Nav Items**:
  - Padding: `4px 8px`.
  - Radius: `9999px`.
  - **Active State**: Background `#000000`, Text `White`.
  - **Inactive State**: Background `transparent`, Text `Grey-10`.
  - Transition: Instant (React state driven).

### Cards (Testimonials/Spill)
- **Dimensions**:
  - Wrapper: `360px` x `420px`.
  - Container: `603px` width to accommodate spill.
- **Styling**:
  - Background: `white`.
  - Radius: `20px` (Outer card), `16px` (Inner content border).
  - Border: `1px solid #E5E7EB` (Grey-91).
  - Shadow: `0px 2px 8px rgba(0, 0, 0, 0.1)`.
  - Padding: `8px` (Outer), `13px` (Inner).
- **Content**:
  - Top: Author Name (`18px` SF Pro Text).
  - Bottom: Quote (`18px` Klim Type Foundry).

### Metrics Box (About Page)
- **Wrapper**: `border-radius: 6px`, `padding: 13px`, `background: #E7E5E4`.
- **Inner Card**: `border-radius: 6px`, `padding: 13px`, `background: #FAFAF9`, `border: 1px solid #E5E7EB`.
- **Row Style**: Flexbox `space-between`.
- **Separator**: `border-bottom: 1px dashed #D6D3D1` (flex-grow spacer between label and value).

### Logos Grid
- **Display**: Flexbox rows.
- **Logo Size**: `32px` height (object-fit contain).
- **Text**: `14px` SF Pro Text adjacent to logo.

---

## 5. Visual Assets & Decoration

### Hero Illustration Composition
Specific absolute positioning is used to create the "floating" effect around the title.
- **Windmill**: `width: 320px`, `left: -360px`, `top: 20px`.
- **Tree**: `width: 350px`, `right: -300px`, `top: 40px`.

### Birds & Nature Elements
Used in the "Battle-tested Governor" section.
- **Container**: `left: 395px`, `top: -100.07px`.
- **Bird 1**: `width: 32px`, `left: 228px`, `top: 128px`.
- **Bird 2**: `width: 24px`, `left: 252px`, `top: 144px`.
- **Bird 3**: `width: 20px`, `left: 272px`, `top: 128px`.
- **Mailbox**: `left: 502.05px`, `top: 159.93px`.

---

## 6. Responsive Design & Animations

### Breakpoints
- **Desktop**: ≥ 1200px
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

### Card Spill Animation Details
**Class**: `.cards.spill .card-wrap`
**Transition**: `transform 1350ms cubic-bezier(0.2, 0.7, 0, 1)`

#### 1. Desktop Transforms (Default)
| Card Index | Translate X | Translate Y | Rotate | Delay |
|------------|-------------|-------------|--------|-------|
| 0 (Back)   | `-356px`    | `50px`      | `-8deg`| `0ms` |
| 1          | `-325px`    | `-15px`     | `-8deg`| `80ms`|
| 2          | `48px`      | `15px`      | `1deg` | `160ms`|
| 3 (Front)  | `439px`     | `0px`       | `10deg`| `240ms`|

#### 2. Tablet Transforms (768px - 1199px)
*Scale approx 0.7x translate, 0.8x rotate*
| Card Index | Translate X | Translate Y | Rotate | Delay |
|------------|-------------|-------------|--------|-------|
| 0          | `-249px`    | `35px`      | `-6.4deg`| `0ms` |
| 1          | `-227.5px`  | `-10.5px`   | `-6.4deg`| `60ms`|
| 2          | `33.6px`    | `10.5px`    | `0.8deg` | `120ms`|
| 3          | `307.3px`   | `0px`       | `8deg`   | `?`   |

#### 3. Mobile Transforms (< 768px)
*Scale approx 0.4x translate, 0.5x rotate*
| Card Index | Translate X | Translate Y | Rotate | Delay |
|------------|-------------|-------------|--------|-------|
| 0          | `-142px`    | `20px`      | `-4deg`| `0ms` |
| 1          | `-130px`    | `-6px`      | `-4deg`| `40ms`|
| 2          | `19.2px`    | `6px`       | `0.5deg`| `80ms`|
| 3          | `175.6px`   | `0px`       | `5deg` | `?`   |

---

## 7. Implementation Patterns & Best Practices

### Flexbox Utility Style
The codebase favors inline styles for layout structure (or styled-component equivalents) over global CSS classes for layout.
**Common Pattern:**
```jsx
<div style={{
  alignSelf: 'stretch',
  flexDirection: 'column', // or 'row'
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  display: 'flex',
  gap: 8
}}>
```

### Z-Index Layering Strategy
- **Layer 0**: Grid Background (implied)
- **Layer 1**: Decorative Images (behind content)
- **Layer 2**: Main Content, Buttons, Links
- **Layer 3**: Footer
- **Layers 10-40**: Card Stack (ascending order)

### Text Handling
- **Wrapping**: `overflow-wrap: break-word`, `word-break: break-word` globally applied.
- **Flex Safety**: Flex children should often have `min-width: 0` to prevent overflow issues.
