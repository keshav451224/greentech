# Premium 3D Coverflow Component

A beautiful, reusable React component that implements a classic 3D Coverflow carousel effect using Swiper.js.

## Features

✨ **Premium 3D Effects**
- Classic Coverflow 3D perspective effect
- Rotating slides with depth perception
- Smooth 600-800ms transitions
- Infinite loop carousel

🎯 **Functionality**
- Autoplay (configurable interval - default 3 seconds)
- Navigation arrows on both sides
- Keyboard navigation (arrow keys)
- Touch/swipe support
- Pagination dots with click support
- Play/Pause toggle button

🎨 **Design**
- Elegant beige/light luxury background
- White borders on active slide
- Subtle shadows and depth
- Rounded corners (16px)
- Responsive design (desktop, tablet, mobile)
- Photo stack appearance

📱 **Responsive**
- Desktop: Full 600px height
- Tablet: 450px height
- Mobile: 280-350px height
- Touch-friendly controls

## Installation

```bash
npm install swiper react
```

## Usage

### Basic Implementation

```jsx
import PremiumCoverflow from '@/components/PremiumCoverflow';

const images = [
  {
    id: 1,
    src: '/image1.jpg',
    title: 'Slide Title 1',
    description: 'Slide description goes here'
  },
  {
    id: 2,
    src: '/image2.jpg',
    title: 'Slide Title 2',
    description: 'Another slide description'
  },
  // ... more images
];

function MyComponent() {
  return (
    <PremiumCoverflow 
      images={images}
      autoplayDelay={3000}
      height="600px"
      onSlideChange={(index) => console.log('Slide:', index)}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | `ImageItem[]` | Required | Array of image objects with id, src, title, description |
| `autoplayDelay` | `number` | `3000` | Autoplay interval in milliseconds |
| `height` | `string` | `600px` | Height of the carousel container |
| `onSlideChange` | `(index: number) => void` | `undefined` | Callback when slide changes |

## Image Object Structure

```typescript
interface ImageItem {
  id: string | number;
  src: string;
  title: string;
  description: string;
}
```

## Interactions

### Navigation
- **Arrow Buttons**: Click left/right arrows to navigate
- **Keyboard**: Use arrow keys (← →) to navigate
- **Touch/Swipe**: Swipe left/right on touch devices
- **Pagination Dots**: Click any dot to jump to that slide
- **Autoplay**: Automatically advances every 3 seconds

### Controls
- **Pause/Play Button**: Top-right button toggles autoplay
- **Pagination Dots**: Visual indicators of slides and interactive navigation

## Responsive Breakpoints

### Desktop (>1024px)
- Height: 600px
- Button size: 56px
- Font sizes: 32px title, 16px description

### Tablet (768px - 1024px)
- Height: 450px
- Button size: 48px
- Font sizes: 24px title, 14px description

### Mobile (<768px)
- Height: 280-350px
- Button size: 36-40px
- Font sizes: 16-20px title, 11-12px description

## Customization

### Colors
All colors can be customized by modifying the CSS in the component:
- Background: `#f5f1e8` (beige)
- Accent: `#8b7355` (brown)
- Text: `#2c2c2c` (dark gray)
- Description: `#666666` (medium gray)

### Timing
Adjust animation timings:
```jsx
<PremiumCoverflow 
  images={images}
  autoplayDelay={5000} // 5 seconds
  height="700px"
/>
```

### Callbacks
Listen to slide changes:
```jsx
<PremiumCoverflow 
  images={images}
  onSlideChange={(index) => {
    console.log(`Now viewing slide ${index + 1}`);
  }}
/>
```

## Performance

- **Lazy Loading**: Images load on demand
- **GPU Acceleration**: CSS 3D transforms
- **Optimized**: Efficient Swiper.js implementation
- **Smooth**: 60fps animations on modern devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- ♿ Keyboard navigation support
- 📢 Aria labels on buttons
- 🎯 Focus management
- 🖱️ Click targets properly sized

## Example: Gallery with Multiple Sections

```jsx
import PremiumCoverflow from '@/components/PremiumCoverflow';

const hotelImages = [
  { id: 1, src: '/hotel1.jpg', title: 'Room View', description: 'Luxury room with garden view' },
  { id: 2, src: '/hotel2.jpg', title: 'Lobby', description: 'Grand entrance lobby' },
  // ...
];

const exteriorImages = [
  { id: 1, src: '/ext1.jpg', title: 'Facade', description: 'Beautiful building exterior' },
  // ...
];

export default function GalleryPage() {
  return (
    <div>
      <section>
        <h2>Hotel Interior</h2>
        <PremiumCoverflow images={hotelImages} />
      </section>
      
      <section>
        <h2>Exterior Views</h2>
        <PremiumCoverflow images={exteriorImages} height="500px" />
      </section>
    </div>
  );
}
```

## Technologies Used

- **React**: UI framework
- **TypeScript**: Type safety
- **Swiper.js**: Carousel/slider library
- **CSS3**: Styling and animations
- **Hardware Acceleration**: 3D transforms

## Notes

- The component automatically handles infinite looping
- Images maintain their aspect ratio
- All animations use cubic-bezier for smooth motion
- Component is production-ready and fully responsive
- Supports lazy loading for performance optimization

## Troubleshooting

### Swiper Not Working
Ensure `swiper/css` and related CSS files are imported at the top of the component.

### Images Not Loading
Check image paths and ensure lazy loading is working correctly.

### Performance Issues
Disable autoplay on low-end devices or reduce image quality.

### Touch Not Working
Ensure Swiper touchEventsTarget is set correctly (automatically handled by default).
