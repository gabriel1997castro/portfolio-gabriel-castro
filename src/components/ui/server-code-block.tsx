import type { BundledLanguage } from 'shiki/bundle/web'
import { highlight } from '@/lib/highlight'
import { CodeBlock } from './code-block'

interface ServerCodeBlockProps {
  code: string
  language?: BundledLanguage | string
  title?: string
  showLineNumbers?: boolean
  className?: string
}

export async function ServerCodeBlock({ 
  code, 
  language = 'javascript', 
  title, 
  showLineNumbers = false,
  className 
}: ServerCodeBlockProps) {
  // Pre-render the code block on the server
  const initial = await highlight(code, language, 'github-dark')
  
  return (
    <CodeBlock
      code={code}
      language={language}
      title={title}
      showLineNumbers={showLineNumbers}
      className={className}
      initial={initial}
    />
  )
}
