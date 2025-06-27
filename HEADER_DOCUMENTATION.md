# Shiro Header Component Documentation

## Overview

This codebase is a Next.js implementation of a sophisticated header component cloned from the original [Shiro project](https://github.com/Innei/Shiro). It features a highly interactive, responsive header with multiple display modes, smooth animations, and comprehensive functionality including navigation, authentication, theming, and scroll-based behaviors.

## Architecture

### Component Structure

The header implementation follows a modular architecture with clear separation of concerns:

```
src/components/
├── headers/
│   └── ShiroHeader.tsx          # Main entry point with providers
└── layout/header/
    ├── Header.tsx               # Core header component
    ├── config.ts                # Navigation menu configuration
    └── internal/                # Internal components
        ├── AnimatedLogo.tsx     # Animated logo with live indicator
        ├── BluredBackground.tsx # Glassmorphism backdrop
        ├── HeaderActionButton.tsx # Action buttons (theme, search)
        ├── HeaderArea.tsx       # Layout areas (left, center, logo)
        ├── HeaderContent.tsx    # Main content container
        ├── HeaderDrawerButton.tsx # Mobile menu trigger
        ├── HeaderDrawerContent.tsx # Mobile drawer content
        ├── HeaderMeta.tsx       # Page metadata display
        ├── HeaderWithShadow.tsx # Shadow effect wrapper
        ├── MenuPopover.tsx      # Desktop navigation menu
        ├── UserAuth.tsx         # Authentication UI
        └── hooks.ts             # Header-specific hooks
```

### Key Technologies

- **Framework**: Next.js 14.2.8 with App Router
- **Styling**: Tailwind CSS, DaisyUI, CSS Modules
- **Animation**: Framer Motion, CSS transitions
- **State Management**: Jotai atoms, React Query
- **UI Components**: Radix UI primitives
- **Icons**: Iconify with Tailwind plugin

## Header Modes and Behaviors

### 1. Scroll-Based Transformations

The header adapts its appearance based on scroll position with several distinct behaviors:

#### Background Opacity Transition
- **Threshold**: Starts at 197px (calculated as 84 + 63 + 50)
- **Behavior**: Background opacity gradually increases from 0 to 1 over 50px
- **Mobile**: Background is always visible (opacity: 1)

```typescript
// Controlled by useHeaderBgOpacity() hook
const bgOpacity = useHeaderBgOpacity()
```

#### Navigation Menu Fade
- **Desktop**: Menu fades out as user scrolls down
- **Opacity**: Inversely related to background opacity
- **Formula**: `menuOpacity = 1 - bgOpacity`

#### Shadow Effect
- **Trigger**: Appears when scroll > 100px AND bgOpacity > 0.8
- **Implementation**: Smooth box-shadow transition

#### Meta Information Display
- **Shows**: Page title, description, and slug
- **When**: Navigation menu is hidden (scrolled down)
- **Mobile**: Appears below logo
- **Desktop**: Appears in center area

### 2. Accessible Menu Mode

A floating navigation menu that appears when:
- User has scrolled down past 600px
- User then scrolls up (indicating intent to navigate)

Features:
- Positioned below the main header
- Smooth entrance/exit animations
- Auto-hides when scrolling down again

### 3. Responsive Modes

#### Desktop Mode (≥1024px)
```
[Logo] [Navigation Menu] [User Auth/Actions]
```
- Logo positioned on left
- Full navigation menu in center
- User authentication and action buttons on right
- Maximum width: 80rem (7xl)

#### Mobile Mode (<1024px)
```
[Drawer Button] [Logo] [Actions]
       [Meta Information]
```
- Hamburger menu button on left
- Logo centered
- Simplified action buttons
- Meta information appears below when scrolled

### 4. Special States

#### Home Page Mode
- Navigation menu always visible regardless of scroll position
- Enhanced visual prominence

#### Live Streaming Mode
- Logo becomes clickable when live stream is active
- Shows live indicator badge
- Single click opens live stream (instead of navigating home)

#### Authentication States
1. **Guest Mode**: Shows login button if OAuth providers configured
2. **Reader Mode**: Shows user avatar with dropdown menu
3. **Owner Mode**: Shows owner avatar with admin dashboard links

## Usage Guide

### Basic Implementation

1. **Import the header component**:
```tsx
import { ShiroHeader } from '@/components/headers/ShiroHeader'
```

2. **Add to your layout**:
```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ShiroHeader />
        <main>{children}</main>
      </body>
    </html>
  )
}
```

### Configuration

#### Navigation Menu Setup

Edit `src/components/layout/header/config.ts`:

```typescript
export const headerMenuConfig: IHeaderMenu[] = [
  {
    title: 'Home',
    path: '/',
    type: 'Home',
    icon: 'material-symbols:home-outline-rounded',
  },
  {
    title: 'Posts',
    path: '/posts',
    type: 'Post',
    subMenu: [
      {
        title: 'Categories',
        path: '/categories',
        icon: 'material-symbols:category-outline',
      },
    ],
  },
  // Add more menu items...
]
```

#### Theme Configuration

The header supports light/dark themes via DaisyUI. Configure in `tailwind.config.ts`:

```typescript
daisyui: {
  themes: [
    {
      light: {
        primary: '#ea580c',
        // ... other colors
      },
      dark: {
        primary: '#ea580c',
        // ... other colors
      },
    },
  ],
}
```

#### Accent Color

The header supports dynamic accent colors. Use the `AccentColorStyleInjector`:

```tsx
import { AccentColorStyleInjector } from '@/components/modules/shared/AccentColorStyleInjector'

// In your app
<AccentColorStyleInjector color="#ea580c" />
```

### Customization Options

#### 1. Header Background
Modify the blur and opacity in `BluredBackground.tsx`:
```tsx
backdrop-blur-xl    // Adjust blur intensity
bg-zinc-50/80      // Adjust color and opacity
```

#### 2. Animation Timing
Adjust transition durations in component classes:
```css
transition-all duration-200  // Modify duration
```

#### 3. Scroll Thresholds
Modify the scroll behavior thresholds in `hooks.ts`:
```typescript
const threshold = 197  // Adjust when background appears
const scrollUpThreshold = 600  // Adjust accessible menu trigger
```

#### 4. Mobile Breakpoint
The header uses Tailwind's `lg` breakpoint (1024px) for responsive behavior. Adjust in components as needed.

### Authentication Integration

The header supports OAuth authentication via AuthJS:

1. Configure OAuth providers in your AuthJS setup
2. The header will automatically show login button when providers are available
3. User authentication state is managed via `useSession()` hook

### Advanced Features

#### Custom Action Buttons
Add custom buttons to `HeaderActionButton.tsx`:
```tsx
<Button
  icon={<YourIcon />}
  onClick={handleCustomAction}
/>
```

#### Logo Customization
Modify `AnimatedLogo.tsx` to change logo behavior:
- Single click action
- Double click admin access
- Live streaming integration

#### Menu Popover Styling
Customize the navigation dropdown in `MenuPopover.tsx`:
- Hover effects
- Active state indicators
- Submenu animations

## Best Practices

1. **Performance**: Components are memoized - maintain this pattern when extending
2. **Accessibility**: Ensure all interactive elements have proper ARIA labels
3. **Responsive**: Test thoroughly on mobile devices
4. **Animations**: Keep animations smooth and under 300ms for best UX
5. **Error Handling**: Header includes error boundaries - maintain fault tolerance

## Development Tips

1. Use the provided hooks for consistent behavior:
   - `useHeaderBgOpacity()` - Background opacity based on scroll
   - `useMenuOpacity()` - Menu visibility
   - `useIsScrolledDown()` - Scroll direction detection

2. Follow the existing component patterns:
   - Use `memo()` for performance
   - Implement proper TypeScript types
   - Use Tailwind classes for styling

3. Test different scenarios:
   - Various scroll positions
   - Mobile and desktop viewports
   - With and without authentication
   - Different page types (home, posts, etc.)

## Troubleshooting

**Header not showing**: Ensure ShiroHeader is imported and added to your layout

**Menu not working**: Check that `headerMenuConfig` is properly configured

**Animations janky**: Verify Framer Motion is installed and layout animations are used correctly

**Theme not applying**: Ensure DaisyUI themes are configured in tailwind.config.ts

**Mobile drawer not opening**: Check that viewport detection is working (useViewport hook)

## Summary

This Shiro header clone provides a production-ready, feature-rich header component with sophisticated interactions, responsive design, and extensive customization options. It seamlessly adapts to different contexts while maintaining smooth performance and excellent user experience across all devices.