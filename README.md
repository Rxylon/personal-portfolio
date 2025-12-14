# Personal Portfolio - Linear Edition

A high-performance personal portfolio built with the visual language of Linear.app. Features a deep black palette, precise typography, bento-box grid layouts, and performance-optimized animations.

## 🎨 Design Features

- **Linear-inspired Dark Theme**: Deep black palette (#08090A) with subtle layering
- **Glassmorphism Navigation**: Floating capsule nav with backdrop blur
- **Bento Grid About Section**: Bio broken into visually appealing grid boxes
- **Staggered Project List**: Interactive project cards with hover effects
- **Canvas Star Field**: Animated particle background
- **Scroll Animations**: Smooth fade-in effects with Framer Motion

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Inter font family

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Project Images
Add project screenshots to the `/public/` folder:
- `project-1.png`
- `project-2.png`
- `project-3.png`
- `project-4.png`
- `project-5.png`

### Social Icons
The following icons are included in `/public/`:
- GitHub logo
- LinkedIn icon
- LeetCode logo

### Colors
Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  linear: {
    void: "#08090A",      // Primary background
    surface: "#141517",    // Card backgrounds
    text: "#F2F2F3",       // Primary text
    muted: "#8A8F98",      // Secondary text
    accent: "#5E6AD2",     // Accent color (Linear purple)
  },
}
```

## 📁 Project Structure

```
personal_website/
├── app/
│   ├── globals.css       # Global styles & utilities
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── Navigation.tsx    # Floating capsule nav
│   ├── Hero.tsx          # Hero section with 3D card
│   ├── About.tsx         # Bento grid about section
│   ├── Projects.tsx      # Staggered project list
│   ├── Contact.tsx       # Contact & social links
│   ├── StarField.tsx     # Canvas particle animation
│   └── ScrollReveal.tsx  # Scroll animation wrapper
├── public/
│   ├── github-logo.png
│   ├── linkedin-icon.webp
│   └── leetcode-logo.png
├── tailwind.config.ts    # Tailwind configuration
└── package.json
```

## 📱 Responsive Design

The portfolio is fully responsive:
- **Desktop**: Full 12-column grid layout
- **Tablet**: Adapted grid with maintained hierarchy
- **Mobile**: Single-column stack layout

## ⚡ Performance

- Optimized animations with `will-change` properties
- Lazy-loaded images with Next.js Image component
- Intersection Observer for scroll animations
- Canvas-based star field for smooth 60fps animation

## 📄 License

MIT License - Feel free to use this template for your own portfolio!
