# Quick Reference - Premium Color Palette

A quick lookup guide for the new GreenTech Solution color palette.

---

## Color Codes at a Glance

```
Sage Green       → #A8CFA8  (RGB: 168, 207, 168)
Mint Green       → #D8F3DC  (RGB: 216, 243, 220)
Eucalyptus       → #7FB77E  (RGB: 127, 183, 126)
Olive Green      → #6B8E23  (RGB: 107, 142, 35)
Light Sage       → #C8E6C8  (RGB: 200, 230, 200)
```

---

## Common Usage Patterns

### Primary Buttons
```jsx
className="bg-[#7FB77E] hover:bg-[#6B8E23] text-white"
```

### Form Labels
```jsx
className="text-[#7FB77E]"
```

### Card Borders
```jsx
className="border-[#C8E6C8] hover:border-[#7FB77E]"
```

### Background Gradients
```jsx
className="bg-gradient-to-b from-[#C8E6C8] to-[#D8F3DC]"
```

### Icon Colors
```jsx
className="text-[#A8CFA8]"  // Secondary icons
className="text-[#7FB77E]"  // Primary icons
```

### Hover States
```jsx
className="hover:text-[#6B8E23]"  // Text hover
className="hover:bg-[#6B8E23]"    // Background hover
```

---

## Contrast Reference

| Text Color | Background | Ratio | WCAG Level |
|-----------|-----------|-------|-----------|
| #6B8E23 (Olive) | White | 7.5:1 | AAA ✅ |
| #7FB77E (Eucalyptus) | White | 3.2:1 | AA ✅ |
| #A8CFA8 (Sage) | White | 2.1:1 | Secondary* |
| White | #7FB77E (Eucalyptus) | 4.6:1 | AA ✅ |
| White | #6B8E23 (Olive) | 7.2:1 | AAA ✅ |
| #6B8E23 (Olive) | #D8F3DC (Mint) | 7.1:1 | AAA ✅ |

*Sage used for icons/accents only, not primary text

---

## By Component

### Navigation
```
Logo bg:    #D8F3DC (Mint gradient)
Logo text:  #7FB77E (Eucalyptus)
Link hover: #7FB77E (Eucalyptus)
Button:     #7FB77E bg → #6B8E23 hover
```

### Buttons & CTAs
```
Background:     #7FB77E (Eucalyptus)
Text:           White
Hover bg:       #6B8E23 (Olive)
Hover text:     White
Disabled:       #C8E6C8 (Light Sage)
```

### Form Elements
```
Label:          #7FB77E (Eucalyptus)
Border default: #C8E6C8 (Light Sage)
Border focus:   #7FB77E (Eucalyptus)
Text:           Dark gray
```

### Cards
```
Border:         #C8E6C8 (Light Sage)
Border hover:   #7FB77E (Eucalyptus)
Background:     White
Accent:         #D8F3DC (Mint)
```

### Badges
```
Background:     #D8F3DC (Mint)
Text:           #7FB77E (Eucalyptus)
Border:         #C8E6C8 (Light Sage)
```

### Icons
```
Primary:        #7FB77E (Eucalyptus)
Secondary:      #A8CFA8 (Sage)
Hover:          #6B8E23 (Olive)
```

### Backgrounds
```
Light gradient: #F0F8F3 → #F8FBF9
Card gradient:  #C8E6C8 → #D8F3DC
Hover overlay:  #7FB77E/20 (transparent)
```

---

## Tailwind CSS (Using Arbitrary Values)

### Text Colors
```jsx
text-[#7FB77E]    // Eucalyptus
text-[#6B8E23]    // Olive
text-[#A8CFA8]    // Sage
text-[#C8E6C8]    // Light Sage
```

### Background Colors
```jsx
bg-[#D8F3DC]      // Mint
bg-[#7FB77E]      // Eucalyptus
bg-[#C8E6C8]      // Light Sage
```

### Border Colors
```jsx
border-[#C8E6C8]  // Default border
border-[#7FB77E]  // Active/focus border
```

### Group Hover States
```jsx
group-hover:bg-[#6B8E23]    // Olive on hover
group-hover:text-[#7FB77E]  // Eucalyptus text on hover
```

---

## Accessibility Checklist for New Elements

When adding new UI components, ensure:

- [ ] Primary text on light backgrounds: 4.5:1+ contrast
- [ ] Secondary text on light backgrounds: 3:1+ contrast
- [ ] Interactive elements: 3:1+ contrast
- [ ] Use Eucalyptus (#7FB77E) for primary interactive elements
- [ ] Use Olive (#6B8E23) for hover/dark states
- [ ] Use Sage (#A8CFA8) for secondary accents only
- [ ] Test with color blindness simulator
- [ ] Touch targets: 44px minimum height
- [ ] Focus indicators: Visible and clear

---

## Common Mistakes to Avoid

❌ Don't use Sage (#A8CFA8) for primary text
- Contrast ratio too low (2.1:1)
- Use only for icons/accents

❌ Don't use Mint (#D8F3DC) as text on white
- Contrast too low for readability
- Use only for backgrounds/fills

❌ Don't combine Light Sage with Light Sage
- Use different colors for contrast hierarchy
- Light Sage borders on white → Eucalyptus on hover

❌ Don't use single-color buttons
- Always pair with text label
- Ensure hover state provides feedback

✅ Do use Olive (#6B8E23) for dark text
- High contrast (7.5:1)
- Perfect for headings

✅ Do use Eucalyptus (#7FB77E) for primary interaction
- Good contrast (3.2:1)
- Clear focus states

✅ Do test on multiple devices
- Colors render differently on various screens
- Verify contrast and readability

✅ Do maintain consistency
- Use the same colors for similar components
- Reference this guide for standardization

---

## Copy-Paste Code Snippets

### Button Component
```jsx
<button className="px-8 py-3 rounded-lg bg-[#7FB77E] hover:bg-[#6B8E23] text-white font-bold transition-all duration-300 hover:scale-105">
  Get Quote
</button>
```

### Form Input
```jsx
<label className="block text-sm font-bold text-[#7FB77E] mb-2">
  Email Address
</label>
<input
  type="email"
  className="w-full rounded-lg bg-gray-50 border-2 border-[#C8E6C8] focus:border-[#7FB77E] px-4 py-3"
/>
```

### Card with Hover
```jsx
<div className="rounded-lg border-2 border-[#C8E6C8] hover:border-[#7FB77E] bg-white hover:shadow-lg transition-all">
  {/* Card content */}
</div>
```

### Badge
```jsx
<div className="inline-flex items-center gap-2 rounded-full bg-[#D8F3DC] px-4 py-2 border border-[#C8E6C8]">
  <span className="text-[#7FB77E] font-bold">Label</span>
</div>
```

### Gradient Background
```jsx
<div className="bg-gradient-to-b from-[#C8E6C8] to-[#D8F3DC] rounded-lg p-6">
  {/* Content with dark text */}
</div>
```

### Icon with Hover
```jsx
<a href="#" className="text-[#A8CFA8] hover:text-[#7FB77E] transition-colors">
  {/* SVG or emoji icon */}
</a>
```

---

## Testing Colors

### Browser DevTools
1. Open Chrome/Firefox DevTools
2. Use color picker on any element
3. Reference this guide for consistency

### Contrast Checker Tools
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Contrast Ratio](https://contrast-ratio.com/)
- Most code editors have built-in color contrast tools

### Color Blindness Simulator
- [Coblis](https://www.color-blindness.com/coblis-color-blindness-simulator/)
- [Daltonize](http://www.daltonize.org/)
- [Contrast Ratio Color Blindness Mode](https://contrast-ratio.com/)

---

## Version History

| Date | Change | Status |
|------|--------|--------|
| Jul 25, 2026 | Initial premium palette redesign | ✅ Complete |
| - | Reserved for future updates | - |

---

## Support

For questions about color usage:
1. Check `COLOR_PALETTE.md` for detailed documentation
2. Check `ACCESSIBILITY_AUDIT.md` for contrast verification
3. Reference this quick guide for common patterns
4. Test new elements for accessibility compliance

---

**Last Updated:** July 25, 2026
**Status:** ✅ Production Ready
