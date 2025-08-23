"use client";

import React, { useState, useLayoutEffect, JSX } from "react";
import { Button } from "./button";
import { Badge } from "./badge";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { highlight } from "@/lib/highlight";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
  className?: string;
  initial?: JSX.Element;
}

export function CodeBlock({
  code,
  language = "javascript",
  title,
  showLineNumbers = false,
  className,
  initial,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [highlightedNode, setHighlightedNode] = useState<JSX.Element | null>(
    initial || null
  );
  const [isLoading, setIsLoading] = useState(!initial);

  useLayoutEffect(() => {
    if (!initial) {
      setIsLoading(true);
      highlight(code, language, "github-dark")
        .then(setHighlightedNode)
        .catch((error) => {
          console.error("Error highlighting code:", error);
          // Fallback to plain text
          setHighlightedNode(
            <pre className="!bg-transparent !border-0 !p-0 !m-0 !font-mono !text-sm !leading-relaxed overflow-x-auto">
              <code className="!bg-transparent !p-0 !font-mono !text-sm !leading-relaxed">
                {code}
              </code>
            </pre>
          );
        })
        .finally(() => setIsLoading(false));
    }
  }, [code, language, initial]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const getLanguageDisplayName = (lang: string) => {
    const languageMap: Record<string, string> = {
      javascript: "JavaScript",
      typescript: "TypeScript",
      jsx: "React JSX",
      tsx: "React TSX",
      html: "HTML",
      css: "CSS",
      json: "JSON",
      bash: "Shell",
      sh: "Shell",
      shell: "Shell",
      text: "Text",
    };
    return languageMap[lang] || lang.toUpperCase();
  };

  if (isLoading) {
    return (
      <div
        className={cn("relative rounded-lg border bg-muted/50 p-4", className)}
      >
        <div className="animate-pulse">
          <div className="h-4 bg-muted rounded w-1/4 mb-2"></div>
          <div className="space-y-2">
            <div className="h-3 bg-muted rounded"></div>
            <div className="h-3 bg-muted rounded w-5/6"></div>
            <div className="h-3 bg-muted rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative group rounded-lg border bg-muted/30 overflow-hidden",
        className
      )}
    >
      {/* Header with language badge and copy button */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b bg-muted/50">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          {title && (
            <span className="text-xs sm:text-sm font-medium text-foreground truncate">
              {title}
            </span>
          )}
          {language && language !== "text" && (
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
            showLineNumbers && "sm:pl-12"
          )}
        >
          {highlightedNode}
        </div>

        {/* Line numbers overlay - hidden on mobile for better readability */}
        {showLineNumbers && (
          <div className="hidden sm:block absolute left-0 top-0 p-3 sm:p-4 pr-2 text-xs text-muted-foreground border-r border-border/50 bg-muted/20 select-none">
            {code.split("\n").map((_, index) => (
              <div key={index} className="leading-relaxed min-h-[1.5em]">
                {index + 1}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
