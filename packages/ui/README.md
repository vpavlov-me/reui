# @your-org/ui

Core UI components based on Shadcn UI for multi-portal design system.

## Installation

```bash
npm install @your-org/ui @your-org/themes
# or
pnpm add @your-org/ui @your-org/themes
# or
yarn add @your-org/ui @your-org/themes
```

## Usage

### Import Styles

```tsx
import '@your-org/ui/styles';
```

### Import Components

```tsx
import { Button, Card, Input } from '@your-org/ui';

export default function App() {
  return (
    <Card>
      <Input placeholder="Email" />
      <Button>Submit</Button>
    </Card>
  );
}
```

### Utilities

```tsx
import { cn } from '@your-org/ui';

// Merge Tailwind classes
const className = cn('base-class', 'additional-class', conditionalClass && 'conditional');
```

## Components

- **Button** - Versatile button component with multiple variants
- **Card** - Container component with header, content, and footer
- **Input** - Form input component
- More components coming soon...

## Requirements

- React 18+
- Tailwind CSS 3.4+

## Configuration

Make sure your `tailwind.config.js` includes the UI package:

```js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/@your-org/ui/dist/**/*.{js,mjs}',
  ],
  // ... rest of config
};
```

## TypeScript

All components are fully typed with TypeScript.

```tsx
import type { ButtonProps } from '@your-org/ui';

const CustomButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## License

MIT
