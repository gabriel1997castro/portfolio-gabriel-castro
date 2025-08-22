import { PortableTextComponents } from '@portabletext/react'
import { CodeBlock } from '@/components/ui/code-block'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/client'

// Custom components for PortableText rendering
export const portableTextComponents: PortableTextComponents = {
  types: {
    // Custom code block component with mobile responsiveness
    codeBlock: ({ value }: { value: { language?: string; code: string; title?: string } }) => (
      <div className="my-4 md:my-6 -mx-4 sm:mx-0">
        <CodeBlock
          code={value.code}
          language={value.language}
          title={value.title}
          showLineNumbers={value.code.split('\n').length > 10}
          className="max-w-full overflow-x-auto text-sm sm:text-base"
        />
      </div>
    ),
    
    // Enhanced image component with responsive sizing
    image: ({ value }: { value: { alt?: string; caption?: string; asset: { _ref: string } } }) => (
      <figure className="my-6 md:my-8 -mx-4 sm:mx-0">
        <div className="relative w-full aspect-video md:aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src={urlFor(value).width(800).height(600).url()}
            alt={value.alt || 'Blog image'}
            fill
            className="object-cover border"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
        </div>
        {value.caption && (
          <figcaption className="text-center text-xs sm:text-sm text-muted-foreground mt-2 px-4 sm:px-0">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
  
  marks: {
    // Enhanced inline code styling with better mobile readability
    code: ({ children }) => (
      <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs sm:text-sm font-semibold text-foreground border break-words">
        {children}
      </code>
    ),
    
    // Enhanced link styling with better touch targets
    link: ({ children, value }) => (
      <a
        href={value.href}
        target={value.blank ? '_blank' : '_self'}
        rel={value.blank ? 'noopener noreferrer' : undefined}
        className="text-primary underline underline-offset-4 hover:no-underline transition-all duration-200 break-words min-h-[44px] inline-flex items-center"
      >
        {children}
      </a>
    ),
  },
  
  block: {
    // Enhanced blockquote styling with mobile padding
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary/50 pl-4 sm:pl-6 my-4 md:my-6 italic text-muted-foreground mx-4 sm:mx-0">
        {children}
      </blockquote>
    ),
    
    // Enhanced heading styles with responsive sizing
    h1: ({ children }) => (
      <h1 className="scroll-m-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-8 md:mt-12 mb-4 md:mb-6 font-display leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="scroll-m-20 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight mt-6 md:mt-10 mb-3 md:mb-4 font-display leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="scroll-m-20 text-lg sm:text-xl md:text-2xl font-semibold tracking-tight mt-5 md:mt-8 mb-2 md:mb-3 font-display leading-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="scroll-m-20 text-base sm:text-lg md:text-xl font-semibold tracking-tight mt-4 md:mt-6 mb-2 font-display leading-tight">
        {children}
      </h4>
    ),
  },
  
  list: {
    // Enhanced list styling with better mobile spacing
    bullet: ({ children }) => (
      <ul className="my-4 md:my-6 ml-4 sm:ml-6 list-disc [&>li]:mt-1 md:[&>li]:mt-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-4 md:my-6 ml-4 sm:ml-6 list-decimal [&>li]:mt-1 md:[&>li]:mt-2">
        {children}
      </ol>
    ),
  },
  
  listItem: {
    // Enhanced list item styling with better line height
    bullet: ({ children }) => <li className="leading-6 md:leading-7">{children}</li>,
    number: ({ children }) => <li className="leading-6 md:leading-7">{children}</li>,
  },
}