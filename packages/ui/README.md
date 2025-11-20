# @reluna-ui/ui

Core UI components based on Shadcn UI for multi-portal design system.

## Installation

```bash
npm install @reluna-ui/ui @reluna-ui/themes
# or
pnpm add @reluna-ui/ui @reluna-ui/themes
# or
yarn add @reluna-ui/ui @reluna-ui/themes
```

## Usage

### Import Styles

```tsx
import '@reluna-ui/ui/styles';
```

### Import Components

```tsx
import { Button, Card, Input } from '@reluna-ui/ui';

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
import { cn } from '@reluna-ui/ui';

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
    './node_modules/@reluna-ui/ui/dist/**/*.{js,mjs}',
  ],
  // ... rest of config
};
```

## TypeScript

All components are fully typed with TypeScript.

```tsx
import type { ButtonProps } from '@reluna-ui/ui';

const CustomButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## License

MIT
