import { TableOfContents } from '@/components/blog/table-of-contents'
import { PostAuthor } from '@/components/blog/post-author'
import { PortableText } from '@portabletext/react'
import { portableTextComponents } from '@/components/portable-text-components'
import { PortableTextBlock } from '@portabletext/types'
import { SiteSettings } from '@/lib/sanity/types'

// Sample PortableText content with headings
const sampleContent: PortableTextBlock[] = [
  {
    _type: 'block',
    _key: 'intro',
    style: 'normal',
    children: [{ _type: 'span', _key: 'span1', text: 'This is a demo page showcasing the dynamic Table of Contents and Author components.', marks: [] }]
  },
  {
    _type: 'block',
    _key: 'h2-1',
    style: 'h2',
    children: [{ _type: 'span', _key: 'span2', text: 'Getting Started with React', marks: [] }]
  },
  {
    _type: 'block',
    _key: 'p1',
    style: 'normal',
    children: [{ _type: 'span', _key: 'span3', text: 'React is a powerful library for building user interfaces.', marks: [] }]
  },
  {
    _type: 'block',
    _key: 'h3-1',
    style: 'h3',
    children: [{ _type: 'span', _key: 'span4', text: 'Installation Process', marks: [] }]
  },
  {
    _type: 'block',
    _key: 'p2',
    style: 'normal',
    children: [{ _type: 'span', _key: 'span5', text: 'You can install React using npm or yarn.', marks: [] }]
  },
  {
    _type: 'block',
    _key: 'h3-2',
    style: 'h3',
    children: [{ _type: 'span', _key: 'span6', text: 'Project Setup', marks: [] }]
  },
  {
    _type: 'block',
    _key: 'p3',
    style: 'normal',
    children: [{ _type: 'span', _key: 'span7', text: 'Set up your project structure properly.', marks: [] }]
  },
  {
    _type: 'block',
    _key: 'h2-2',
    style: 'h2',
    children: [{ _type: 'span', _key: 'span8', text: 'Advanced Concepts', marks: [] }]
  },
  {
    _type: 'block',
    _key: 'p4',
    style: 'normal',
    children: [{ _type: 'span', _key: 'span9', text: 'Once you understand the basics, you can move to advanced topics.', marks: [] }]
  },
  {
    _type: 'block',
    _key: 'h3-3',
    style: 'h3',
    children: [{ _type: 'span', _key: 'span10', text: 'State Management', marks: [] }]
  },
  {
    _type: 'block',
    _key: 'p5',
    style: 'normal',
    children: [{ _type: 'span', _key: 'span11', text: 'Learn about Redux, Context API, and other state management solutions.', marks: [] }]
  }
]

// Sample site settings
const sampleSiteSettings: SiteSettings = {
  name: 'Gabriel Castro',
  title: 'Frontend Engineer',
  bio: 'Passionate about React, TypeScript, and building performant web applications. I love creating clean, maintainable code and sharing knowledge with the community.',
  email: 'gabriel@example.com',
  location: 'São Paulo, Brazil'
}

export default function ComponentsDemoPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 max-w-6xl">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6 font-display leading-tight">
            Dynamic Components Demo
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 md:mb-6 leading-relaxed">
            Demonstrating the dynamic Table of Contents and Post Author components
          </p>
        </header>

        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Main Content */}
          <article className="lg:col-span-3 min-w-0">
            <div className="prose prose-sm sm:prose prose-invert lg:prose-lg xl:prose-xl max-w-none prose-headings:font-display prose-h2:text-xl sm:prose-h2:text-2xl prose-h3:text-lg sm:prose-h3:text-xl prose-pre:max-w-full prose-pre:overflow-x-auto">
              <PortableText
                value={sampleContent}
                components={portableTextComponents}
              />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 order-first lg:order-last">
            <div className="lg:sticky lg:top-24 space-y-4 lg:space-y-6">
              {/* Dynamic Table of Contents */}
              <TableOfContents content={sampleContent} />

              {/* Dynamic Author */}
              <PostAuthor siteSettings={sampleSiteSettings} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}