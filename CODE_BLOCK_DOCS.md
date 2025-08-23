# Code Block Component Documentation

This code block component provides syntax highlighting using Shiki with Tailwind CSS styling. It follows the recommended Next.js patterns for both server and client components.

## Features

- ✅ Syntax highlighting with Shiki
- ✅ Server-side rendering support
- ✅ Client-side hydration
- ✅ Copy to clipboard functionality
- ✅ Language badges
- ✅ Line numbers (optional)
- ✅ Mobile responsive design
- ✅ Loading states
- ✅ Tailwind CSS styling

## Components

### ServerCodeBlock (Recommended)

Use this for server-rendered pages where you want the code to be highlighted on the server for better performance.

```tsx
import { ServerCodeBlock } from '@/components/ui/server-code-block'

export default function MyPage() {
  return (
    <ServerCodeBlock
      code="console.log('Hello, World!')"
      language="javascript"
      title="example.js"
      showLineNumbers={true}
    />
  )
}
```

### CodeBlock (Client Component)

Use this for client-side rendering or when you need dynamic code content.

```tsx
'use client'
import { CodeBlock } from '@/components/ui/code-block'

export default function MyComponent() {
  const [code, setCode] = useState("console.log('Hello!')")
  
  return (
    <CodeBlock
      code={code}
      language="javascript"
      title="Dynamic Code"
      showLineNumbers={false}
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `code` | `string` | - | The code content to highlight |
| `language` | `string` | `'javascript'` | Programming language for syntax highlighting |
| `title` | `string` | - | Optional title shown in the header |
| `showLineNumbers` | `boolean` | `false` | Whether to show line numbers |
| `className` | `string` | - | Additional CSS classes |
| `initial` | `JSX.Element` | - | (CodeBlock only) Pre-rendered content from server |

## Supported Languages

The component supports all languages that Shiki supports, including:

- `javascript`, `typescript`
- `jsx`, `tsx`
- `html`, `css`
- `json`
- `bash`, `shell`, `sh`
- `python`, `java`, `c`, `cpp`
- And many more...

## Styling

The component uses Tailwind CSS classes and is designed to work with your existing design system. It includes:

- Dark theme by default (`github-dark`)
- Responsive design (mobile-first)
- Smooth animations and transitions
- Accessible contrast ratios

## Examples

### Basic Usage

```tsx
<ServerCodeBlock
  code="const greeting = 'Hello, World!'"
  language="javascript"
/>
```

### With Line Numbers and Title

```tsx
<ServerCodeBlock
  code={multiLineCode}
  language="typescript"
  title="user-service.ts"
  showLineNumbers={true}
/>
```

### Multiple Languages

```tsx
<div className="space-y-4">
  <ServerCodeBlock
    code="npm install shiki"
    language="bash"
    title="Installation"
  />
  
  <ServerCodeBlock
    code="import { highlight } from '@/lib/highlight'"
    language="typescript"
    title="Import"
  />
</div>
```

## Performance

- **Server Component**: Code is highlighted on the server, no client-side JavaScript needed for highlighting
- **Client Component**: Uses lazy loading for Shiki, minimal bundle impact
- **Caching**: Results are cached for better performance
- **Bundle Size**: Uses Shiki's web bundle for optimal size

## Migration from Old Component

If you're upgrading from the old `dangerouslySetInnerHTML` approach:

1. Replace `import { CodeBlock }` with `import { ServerCodeBlock }`
2. Update any `language="text"` to a proper language identifier
3. Remove any custom HTML/CSS overrides - the new component handles styling automatically

## Troubleshooting

### Language Not Highlighting

Make sure you're using a valid language identifier. Check [Shiki's supported languages](https://shiki.style/languages).

### Styling Issues

The component uses Tailwind utility classes. Make sure your Tailwind CSS is properly configured and includes the necessary utilities.

### Server/Client Hydration

If you see hydration mismatches, ensure you're using `ServerCodeBlock` for server components and `CodeBlock` for client components consistently.
