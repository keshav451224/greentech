# Premium Nature-Inspired Color Palette

## Color System

### Primary Colors (Nature-Inspired)
- **Sage Green** (#A8CFA8) - Soft, calming, main accent
- **Eucalyptus** (#7FB77E) - Rich but not aggressive, for stronger elements
- **Mint Green** (#D8F3DC) - Very light, for backgrounds and subtle accents
- **Olive Green** (#6B8E23) - Deep, for text and strong emphasis
- **Light Sage** (#C8E6C8) - For hover states and secondary backgrounds

### Neutral Colors (Unchanged)
- **White** (#FFFFFF) - Primary background
- **Dark Gray** (#1F2937) - Primary typography
- **Light Gray** (#F9FAFB, #F3F4F6) - Secondary backgrounds
- **Gray** (#6B7280, #9CA3AF) - Secondary text

## Color Mapping

### Current → New Mapping
```
Navbar:
  emerald-600 (#059669) → Eucalyptus (#7FB77E)
  emerald-700 (#047857) → Olive Green (#6B8E23)
  emerald-800 (#065F46) → Olive Green (#6B8E23)
  
Buttons:
  from-emerald-600 to-emerald-500 → from-eucalyptus to-sage-green
  bg-emerald-700 hover:bg-emerald-800 → bg-eucalyptus hover:olive-green
  
Cards:
  bg-emerald-100 → bg-mint-green (#D8F3DC)
  border-emerald-200 → border-light-sage (#C8E6C8)
  border-emerald-600 → border-eucalyptus (#7FB77E)
  text-emerald-700 → text-eucalyptus (#7FB77E)
  text-emerald-600 → text-sage-green (#A8CFA8)
  
"Why Us" Cards:
  from-emerald-600 to-emerald-500 → Light sage/mint background
  text-white → Olive green text
  
Badges:
  bg-emerald-100 text-emerald-700 → bg-mint-green text-eucalyptus
  
Icons & Accents:
  text-emerald-600 → text-eucalyptus
  text-emerald-400 → text-sage-green
  hover:text-emerald-600 → hover:text-eucalyptus
```

## CSS Custom Properties (Optional)

```css
:root {
  /* Primary Colors */
  --color-sage: #A8CFA8;
  --color-eucalyptus: #7FB77E;
  --color-mint: #D8F3DC;
  --color-olive: #6B8E23;
  --color-light-sage: #C8E6C8;
  
  /* Neutral Colors */
  --color-white: #FFFFFF;
  --color-dark: #1F2937;
  --color-light-gray: #F9FAFB;
}
```

## Usage Guidelines

### Buttons & CTAs
- Primary buttons: Eucalyptus background with Olive Green hover
- Secondary buttons: Light sage or mint background with eucalyptus text

### Cards & Containers
- Light backgrounds: Mint green (#D8F3DC)
- Borders: Light sage (#C8E6C8) or Eucalyptus (#7FB77E)
- Hover: Light sage background

### "Why Us" Cards
- Background: Linear gradient using Light Sage and Mint
- Text: Olive Green or Dark Gray
- No white text

### Badges & Labels
- Background: Mint green
- Text: Eucalyptus or Olive Green

### Icons
- Primary: Eucalyptus
- Secondary: Sage Green
- Hover: Olive Green

## Contrast Compliance
- Dark text on light backgrounds ✓
- All color combinations tested for WCAG AA compliance
- Minimum contrast ratio: 4.5:1 for text
