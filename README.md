# Grapevine

The Smart Communications Platform for Business Travel.

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

## Scripts

| Command              | Description               |
| -------------------- | ------------------------- |
| `npm run dev`        | Start development server  |
| `npm run build`      | Build for production      |
| `npm run start`      | Start production server   |
| `npm run lint`       | Run ESLint                |
| `npm run format`     | Format code with Prettier |
| `npm run format:check` | Check code formatting   |

## Project Structure

```
├── app/                  # Next.js App Router pages
├── components/           # React components
│   ├── animations/       # Animation components
│   ├── icons/            # Custom icon components
│   └── primitives/       # UI primitive components
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Icons

This project uses [Lucide React](https://lucide.dev/icons/) for icons via a custom `Icon` component that supports dynamic icon loading.

### Usage

```tsx
import Icon from "@/components/icon";

// Basic usage
<Icon name="check" />

// With size
<Icon name="arrow-right" size={24} />

// With custom className
<Icon name="mail" className="text-primary" />

// With all props
<Icon name="user" size={20} className="text-navy" strokeWidth={2} />
```

### Available Props

| Prop          | Type       | Description                    |
| ------------- | ---------- | ------------------------------ |
| `name`        | `IconName` | Icon name from Lucide (required) |
| `size`        | `number`   | Icon size in pixels            |
| `className`   | `string`   | Tailwind/CSS classes           |
| `strokeWidth` | `number`   | Stroke width (default: 2)      |

### Finding Icons

Browse available icons at [lucide.dev/icons](https://lucide.dev/icons/). Use the kebab-case name (e.g., `arrow-right`, `chevron-down`, `check-circle`).
