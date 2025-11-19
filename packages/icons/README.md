# @your-org/icons

Icon components using Lucide Icons for the design system.

## Installation

```bash
npm install @your-org/icons
# or
pnpm add @your-org/icons
# or
yarn add @your-org/icons
```

## Usage

### Basic Usage

All Lucide icons are re-exported:

```tsx
import { Heart, Settings, Menu, X } from '@your-org/icons';

export default function App() {
  return (
    <div>
      <Heart className="h-6 w-6 text-red-500" />
      <Settings className="h-6 w-6" />
    </div>
  );
}
```

### Icon Wrapper

Use the `IconWrapper` component for custom icon rendering:

```tsx
import { IconWrapper, Heart } from '@your-org/icons';

export default function CustomIcon() {
  return <IconWrapper icon={Heart} className="h-8 w-8 text-primary" />;
}
```

### With Buttons

```tsx
import { Button } from '@your-org/ui';
import { Download, Share2 } from '@your-org/icons';

export default function ButtonWithIcon() {
  return (
    <>
      <Button>
        <Download className="mr-2 h-4 w-4" />
        Download
      </Button>

      <Button size="icon">
        <Share2 className="h-4 w-4" />
      </Button>
    </>
  );
}
```

## Available Icons

This package re-exports all icons from [Lucide Icons](https://lucide.dev/icons/).

Browse the full icon set at: [https://lucide.dev/icons/](https://lucide.dev/icons/)

## Styling

Icons inherit color from the parent's text color:

```tsx
<div className="text-primary">
  <Heart className="h-6 w-6" /> {/* Will be primary color */}
</div>
```

Or set color directly:

```tsx
<Heart className="h-6 w-6 text-red-500" />
```

## Size Options

Common size patterns:

```tsx
// Small (16px)
<Icon className="h-4 w-4" />

// Medium (20px)
<Icon className="h-5 w-5" />

// Large (24px)
<Icon className="h-6 w-6" />

// Extra Large (32px)
<Icon className="h-8 w-8" />
```

## TypeScript

Full TypeScript support included:

```tsx
import type { LucideProps } from '@your-org/icons';

const CustomIcon: React.FC<LucideProps> = (props) => {
  return <Heart {...props} />;
};
```

## License

MIT
