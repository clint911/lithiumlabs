# LithiumLabs Design System

## Overview

The LithiumLabs design system is a premium, institutional-grade visual language built for FinTech and Web3 platforms. It emphasizes trust, precision, and sophisticated minimalism through carefully crafted micro-interactions and transformations.

---

## Color Palette

### Brand Colors

- **Primary**: `brand-primary` - Electric Blue (#2563EB)
  - Used for: Primary CTAs, key highlights, active states
  - RGB: 37, 99, 235
  - Psychology: Trust, innovation, reliability

- **Secondary**: `brand-secondary` - Vibrant Magenta (#FF64FF)
  - Used for: Secondary accents, alternative CTAs, creative highlights
  - RGB: 255, 100, 255
  - Psychology: Creativity, forward-thinking, premium

- **Tertiary**: `brand-tertiary` - Custom Accent
  - Used for: Tertiary elements, diverse visual hierarchy
  - Psychology: Versatility, balance

- **Foundation**: `brand-foundation` - Deep Navy/Black (#030712)
  - Base background color
  - Creates premium feel and reduces eye strain
  - Allows vibrant colors to pop

### Opacity Scale

- `white/[0.03]` - 3% - Subtle background layers
- `white/[0.04]` - 4% - Card backgrounds (base)
- `white/[0.05]` - 5% - Card backgrounds (hover/active)
- `white/[0.06]` - 6% - Hero elements, emphasis
- `white/10` - 10% - Border elements
- `white/20` - 20% - Border hover states
- `white/30` - 30% - Secondary text
- `white/40` - 40% - Muted text
- `white/50` - 50% - Icons, labels
- `white/60` - 60% - Body copy
- `white/70` - 70% - Important copy
- `white/90` - 90% - High emphasis text

---

## Typography

### Font System

- **Primary Font**: System sans-serif stack
- **Weight Scale**:
  - `font-light` (300) - Descriptive text, subtitles
  - `font-bold` (700) - Emphasis within body
  - `font-black` (900) - Headings, labels, CTAs

### Size Scale

- **5xl-7xl**: Hero headings (48-72px / text-5xl to text-7xl)
- **4xl-5xl**: Section headings (36-48px / text-4xl to text-5xl)
- **3xl**: Card titles (30px / text-3xl)
- **2xl**: Subsection headings (24px / text-2xl)
- **xl**: Large body, important copy (20px / text-xl)
- **lg**: Standard body (18px / text-lg)
- **sm**: Small copy (14px / text-sm)
- **xs**: Labels, captions (12px / text-xs)
- **[10px]**: Micro labels (10px)
- **[9px]**: Badge text (9px)
- **[8px]**: Smallest elements (8px)

### Typographic Style Rules

1. **UPPERCASE** + `tracking-tighter` or `tracking-widest` for headings
2. **lowercase** + `font-light` for descriptive body copy
3. All CTAs and labels: UPPERCASE + font-black + tracking-widest
4. Line heights: `leading-[0.9]` for headlines, `leading-relaxed` for body

---

## Spacing & Layout

### Border Radius Scale

- `rounded-[1.5rem]` (24px) - Small elements
- `rounded-[2rem]` (32px) - Icons, small cards
- `rounded-[2.5rem]` (40px) - Medium cards
- `rounded-[3rem]` (48px) - Standard cards
- `rounded-[3.5rem]` (56px) - Large cards
- `rounded-[4rem]` (64px) - Hero sections, special emphasis
- `rounded-xl` (12px) - Buttons, small interactive elements
- `rounded-2xl` (16px) - Primary buttons
- `rounded-full` - Badges, pills, dots

### Padding Scale

- `p-10` (40px) - Small card padding
- `p-12` (48px) - Standard card padding
- `p-16` (64px) - Large card/section padding
- `py-5` / `px-8` - Button padding (small)
- `py-6` / `px-8` - Button padding (medium)
- `py-8` / `px-12` - Button padding (large)

### Gaps

- `gap-4` (16px) - Tight element spacing
- `gap-6` (24px) - Standard element spacing
- `gap-8` (32px) - Card spacing
- `gap-10` (40px) - Large card spacing
- `gap-12` (48px) - Section spacing

---

## Component Patterns

### Cards

**Base Structure**:

```tsx
<Card className="backdrop-blur-3xl bg-white/[0.04] border-white/10
  hover:border-white/20 transition-all duration-700
  rounded-[3rem] group shadow-[0_0_40px_rgba(37,99,235,0.03)]
  hover:shadow-[0_0_60px_rgba(37,99,235,0.08)]">
```

**Key Characteristics**:

- Heavy backdrop blur (`backdrop-blur-3xl`) for glassmorphism
- Low opacity backgrounds (3-6%)
- Subtle borders that glow on hover
- Extended transition durations (500-1000ms)
- Custom shadow glow effects with brand colors
- Group hover states for child element coordination

### Buttons

**Primary CTA**:

```tsx
<Button className="bg-brand-primary hover:bg-brand-primary/90
  text-white px-12 py-8 rounded-2xl text-xl font-black
  uppercase tracking-widest shadow-2xl">
```

**Secondary/Outline**:

```tsx
<Button variant="outline" className="border-white/10 text-white/70
  hover:text-white px-8 py-6 rounded-xl font-black uppercase
  text-xs tracking-widest">
```

**Characteristics**:

- Always UPPERCASE + font-black
- Wide tracking (tracking-widest)
- Generous padding
- Consistent icon spacing (ml-3 or ml-4)
- Scale transforms on hover

### Badges

```tsx
<Badge className="bg-brand-primary/10 text-brand-primary
  border-none px-4 py-1 rounded-full text-[9px]
  font-black uppercase tracking-widest">
```

**Rules**:

- 10% opacity background of brand color
- Full text color of brand
- Always font-black + uppercase + tracking-widest
- Text size: 8-10px

---

## Micro-Animations & Transformations

### Hover Transformations

1. **Scale Effects**:
   - Cards: No scale (stability)
   - Icons: `group-hover:scale-110` (10% growth)
   - Buttons: `hover:scale-[1.02]` (subtle 2% lift)
   - Dots/Bullets: `group-hover:scale-150` (50% emphasis)

2. **Border Transitions**:
   - From: `border-white/10`
   - To: `border-brand-primary/20` or `border-white/20`
   - Duration: `transition-all duration-700`

3. **Shadow Glow**:
   - Base: `shadow-[0_0_40px_rgba(37,99,235,0.03)]`
   - Hover: `shadow-[0_0_60px_rgba(37,99,235,0.08)]`
   - Creates dynamic depth perception

4. **Background Shifts**:
   - Images: `group-hover:scale-110` with `transition-transform duration-1000`
   - Backgrounds: `hover:bg-white/10` (opacity increase)

5. **Line Expansions**:
   - Base: `w-8`
   - Hover: `group-hover:w-16`
   - Creates kinetic feedback

### Entry Animations

```tsx
animate-in fade-in zoom-in duration-1000
```

- Used on hero sections
- Creates premium reveal effect
- Combines opacity + scale

### Transition Durations

- Fast: `duration-500` (500ms) - Button hover, simple interactions
- Standard: `duration-700` (700ms) - Card borders, most elements
- Slow: `duration-1000` (1000ms) - Images, hero animations

---

## Background Treatments

### Layered Background System

```tsx
{
  /* Layer 1: Image */
}
<div
  className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat 
  opacity-[0.4] scale-105"
  style={{ backgroundImage: 'url("/glass-facade-8016589.jpg")' }}
/>;

{
  /* Layer 2: Gradient Overlay */
}
<div
  className="fixed inset-0 z-0 bg-gradient-to-b 
  from-brand-foundation/20 via-brand-foundation/60 
  to-brand-foundation"
/>;
```

**Purpose**:

- Creates depth and visual interest
- Maintains text legibility
- `scale-105` prevents edge artifacts
- Gradient ensures footer visibility

---

## Icon System

### Usage Rules

- **Size Scale**: `h-4 w-4` (small), `h-5 w-5` (medium), `h-6 w-6` (large), `h-8 w-8` (XL), `h-10 w-10` (hero icons), `h-12 w-12` (feature icons)
- **Color**: Match brand color or `text-white/[opacity]`
- **Spacing**: `mr-3`, `mr-4`, `ml-3`, `ml-4` from text
- **Hover**: Add `transition-transform group-hover:scale-110`

### Icon Containers

```tsx
<div className="w-20 h-20 rounded-[2rem] bg-brand-primary/10
  border border-brand-primary/20 flex items-center justify-center
  transition-transform group-hover:scale-110">
```

---

## Layout Principles

### Grid Systems

- **2-column**: `grid-cols-1 md:grid-cols-2`
- **3-column**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **4-column**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`

### Container

```tsx
<div className="max-w-7xl mx-auto">
```

- Consistent across all pages
- Centers content
- Responsive padding: `px-4 sm:px-6 lg:px-8`

### Section Spacing

- Standard: `py-20` or `py-32`
- Hero: `pt-48 pb-20` (extra top padding for nav clearance)

---

## Shadow System

### Custom Glows

- **Blue glow**: `shadow-[0_0_40px_rgba(37,99,235,0.03)]`
- **Magenta glow**: `shadow-[0_0_40px_rgba(255,100,255,0.02)]`
- **Hover intensify**: Increase alpha ~2-3x
- **Primary button**: `shadow-2xl shadow-brand-primary/30`

### Layered Shadows

- Base: `shadow-4xl` (massive diffusion)
- Add custom glow on top for color tint

---

## Accessibility Considerations

1. **Contrast Ratios**:
   - Body text: minimum white/60 on dark background
   - Headings: white or white/90
   - Interactive elements: clear hover states

2. **Focus States**:
   - All buttons/links have hover states
   - Scale transforms provide tactile feedback

3. **Typography Hierarchy**:
   - Clear size jumps between levels
   - Font weight distinguishes importance

---

## Implementation Checklist

When creating new pages/components:

- [ ] Use `backdrop-blur-3xl` on all glass cards
- [ ] Implement layered background system
- [ ] All headings: UPPERCASE + font-black + tracking-tighter
- [ ] All CTAs: UPPERCASE + font-black + tracking-widest
- [ ] Hover states: 700ms transitions minimum
- [ ] Icons: group-hover:scale-110
- [ ] Borders: white/10 base, glow on hover
- [ ] Shadows: Include brand-color glows
- [ ] Test at opacity scale: 3%, 4%, 5%, 6%, 10%, 20%
- [ ] Verify rounded corners: 2rem, 3rem, 3.5rem, 4rem
- [ ] Ensure consistent padding: p-10, p-12, p-16
- [ ] Add entry animations to hero sections

---

## Brand Voice (Visual)

**Luxurious yet Accessible**

- Premium feel through glassmorphism and subtle animations
- Not overwhelming or gaudy

**Technical Precision**

- Sharp typography, clear hierarchy
- Measured spacing and alignment

**Forward-Thinking**

- Modern effects (blur, glow)
- Contemporary color choices

**Trustworthy**

- Consistent patterns
- Reliable, predictable interactions
- Professional presentation

---

## File Structure Conventions

### Page Structure

```
1. Background layers (fixed, z-0)
2. Navigation (from component)
3. Hero section (relative z-10)
4. Content sections (relative z-10)
5. CTA section
6. Footer
```

### Component Organization

```tsx
// Imports
import { Icons } from "lucide-react"
import { Components } from "@/components/ui/..."
import Navigation from "@/components/navigation"
import Link from "next/link"

// Main component
export default function PageName() {
  // Data arrays (if needed)
  const items = [...]

  // Return JSX
  return (
    <div className="min-h-screen bg-brand-foundation...">
      {/* Backgrounds */}
      {/* Navigation */}
      {/* Sections */}
      {/* Footer */}
    </div>
  )
}
```

---

## Anti-Patterns (What NOT to Do)

❌ **Don't**:

- Use bright, fully opaque backgrounds
- Apply thin font weights to headings
- Mix lowercase and capitals randomly in headings
- Use short transition durations (<300ms feels cheap)
- Forget backdrop-blur on cards
- Use solid borders (always semi-transparent)
- Overlay text on images without gradients
- Scale cards on hover (feels janky)
- Use default rounded corners (rounded-lg, rounded-md)

✅ **Do**:

- Keep backgrounds dark and layered
- Make headings font-black and UPPERCASE
- Use consistent tracking (tighter for display, wider for labels)
- Extend transitions (500-1000ms for premium feel)
- Always add backdrop-blur-3xl
- Use white/10 or brand-color/20 borders
- Layer gradients for text legibility
- Scale icons and buttons only, not cards
- Use custom rounded values (2rem, 3rem, 4rem)

---

_Last Updated: February 2026_
_Design System Version: 1.0_
