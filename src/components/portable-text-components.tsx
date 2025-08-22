import { PortableTextComponents } from '@portabletext/react'
import { CodeBlock } from '@/components/ui/code-block'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/client'

// Custom components for PortableText rendering
export const portableTextComponents: PortableTextComponents = {
  types: {
    // Custom code block component
    codeBlock: ({ value }: { value: { language?: string; code: string; title?: string } }) => (
      <CodeBlock
        code={value.code}
        language={value.language}
        title={value.title}
        showLineNumbers={value.code.split('\n').length > 10}
        className="my-6"
      />
    ),
    
    // Enhanced image component
    image: ({ value }: { value: { alt?: string; caption?: string; asset: { _ref: string } } }) => (
      <figure className="my-8">
        <Image
          src={urlFor(value).width(800).height(600).url()}
          alt={value.alt || 'Blog image'}
          width={800}
          height={600}
          className="rounded-lg border"
        />
        {value.caption && (
          <figcaption className="text-center text-sm text-muted-foreground mt-2">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
  
  marks: {
    // Enhanced inline code styling
    code: ({ children }) => (
      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground border">
        {children}
      </code>
    ),
    
    // Enhanced link styling
    link: ({ children, value }) => (
      <a
        href={value.href}
        target={value.blank ? '_blank' : '_self'}
        rel={value.blank ? 'noopener noreferrer' : undefined}
        className="text-primary underline underline-offset-4 hover:no-underline transition-all duration-200"
      >
        {children}
      </a>
    ),
  },
  
  block: {
    // Enhanced blockquote styling
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary/50 pl-6 my-6 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
    
    // Enhanced heading styles
    h1: ({ children }) => (
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mt-12 mb-6 font-display">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight mt-10 mb-4 font-display">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8 mb-3 font-display">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6 mb-2 font-display">
        {children}
      </h4>
    ),
  },
  
  list: {
    // Enhanced list styling
    bullet: ({ children }) => (
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
        {children}
      </ol>
    ),
  },
  
  listItem: {
    // Enhanced list item styling
    bullet: ({ children }) => <li className="leading-7">{children}</li>,
    number: ({ children }) => <li className="leading-7">{children}</li>,
  },
}