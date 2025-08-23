import type { JSX } from 'react'
import type { BundledLanguage } from 'shiki/bundle/web'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { Fragment } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { codeToHast } from 'shiki/bundle/web'

interface ElementProps {
  [key: string]: unknown
}

export async function highlight(
  code: string, 
  lang: BundledLanguage | string = 'javascript',
  theme: string = 'github-dark'
) {
  const out = await codeToHast(code, {
    lang: lang as BundledLanguage,
    theme,
    transformers: []
  })

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: (props: ElementProps) => jsx('pre', {
        ...props,
        className: '!bg-transparent !border-0 !p-0 !m-0 !font-mono !text-sm !leading-relaxed overflow-x-auto'
      }),
      code: (props: ElementProps) => jsx('code', {
        ...props,
        className: '!bg-transparent !p-0 !font-mono !text-sm !leading-relaxed'
      }),
    },
  }) as JSX.Element
}
