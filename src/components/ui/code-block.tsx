'use client'

import React, { useState, useEffect } from 'react'
import { Button } from './button'
import { Badge } from './badge'
import { Copy, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { codeToHtml } from 'shiki'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  showLineNumbers?: boolean
  className?: string
}

export function CodeBlock({ 
  code, 
  language = 'text', 
  title, 
  showLineNumbers = false,
  className 
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [highlightedCode, setHighlightedCode] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function highlightCode() {
      try {
        setIsLoading(true)
        const html = await codeToHtml(code, {
          lang: language,
          theme: 'github-dark',
          transformers: showLineNumbers ? [
            {
              line(node, line) {
                node.properties['data-line'] = line
              }
            }
          ] : undefined
        })
        setHighlightedCode(html)
      } catch (error) {
        console.error('Error highlighting code:', error)
        // Fallback to plain text
        setHighlightedCode(`<pre><code>${code}</code></pre>`)
      } finally {
        setIsLoading(false)
      }
    }

    highlightCode()
  }, [code, language, showLineNumbers])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const getLanguageDisplayName = (lang: string) => {
    const languageMap: Record<string, string> = {
      'javascript': 'JavaScript',
      'typescript': 'TypeScript',
      'jsx': 'React JSX',
      'tsx': 'React TSX',
      'html': 'HTML',
      'css': 'CSS',
      'json': 'JSON',
      'bash': 'Shell',
      'sh': 'Shell',
      'shell': 'Shell',
      'text': 'Text'
    }
    return languageMap[lang] || lang.toUpperCase()
  }

  if (isLoading) {
    return (
      <div className={cn(
        "relative rounded-lg border bg-muted/50 p-4",
        className
      )}>
        <div className="animate-pulse">
          <div className="h-4 bg-muted rounded w-1/4 mb-2"></div>
          <div className="space-y-2">
            <div className="h-3 bg-muted rounded"></div>
            <div className="h-3 bg-muted rounded w-5/6"></div>
            <div className="h-3 bg-muted rounded w-4/6"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn(
      "relative group rounded-lg border bg-muted/30 overflow-hidden",
      className
    )}>
      {/* Header with language badge and copy button */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b bg-muted/50">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          {title && (
            <span className="text-xs sm:text-sm font-medium text-foreground truncate">{title}</span>
          )}
          {language && language !== 'text' && (
            <Badge variant="secondary" className="text-xs flex-shrink-0">
              {getLanguageDisplayName(language)}
            </Badge>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="h-8 w-8 p-0 opacity-70 hover:opacity-100 transition-opacity flex-shrink-0 ml-2"
        >
          {copied ? (
            <Check className="h-3 w-3 text-green-500" />
          ) : (
            <Copy className="h-3 w-3" />
          )}
        </Button>
      </div>

      {/* Code content with improved mobile scrolling */}
      <div className="relative overflow-x-auto scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent">
        <div 
          className={cn(
            "p-3 sm:p-4 text-xs sm:text-sm leading-relaxed",
            "[&>pre]:!bg-transparent [&>pre]:!border-0 [&>pre]:!p-0 [&>pre]:!m-0",
            "[&>pre>code]:!bg-transparent [&>pre>code]:!p-0 [&>pre>code]:!text-xs [&>pre>code]:sm:!text-sm",
            "[&>pre>code]:!font-mono [&>pre>code]:!leading-relaxed",
            showLineNumbers && "sm:[&>pre]:pl-12"
          )}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
        
        {/* Line numbers overlay - hidden on mobile for better readability */}
        {showLineNumbers && (
          <div className="hidden sm:block absolute left-0 top-0 p-3 sm:p-4 pr-2 text-xs text-muted-foreground border-r border-border/50 bg-muted/20 select-none">
            {code.split('\n').map((_, index) => (
              <div key={index} className="leading-relaxed min-h-[1.5em]">
                {index + 1}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}