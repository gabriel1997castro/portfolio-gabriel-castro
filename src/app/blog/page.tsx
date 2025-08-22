import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Blog - Gabriel Castro',
  description: 'Thoughts on React, TypeScript, and modern web development',
}

// Sample blog posts data - will be replaced with Sanity data later
const posts = [
  {
    id: '1',
    title: 'React Performance Optimization Techniques',
    slug: 'react-performance-optimization',
    excerpt: 'Learn essential techniques for keeping your React applications fast and responsive, including memoization, code splitting, and bundle optimization.',
    publishedAt: '2024-12-15',
    tags: ['React', 'Performance', 'JavaScript'],
    readingTime: '8 min read',
    featured: true,
  },
  {
    id: '2',
    title: 'Testing Strategies for Modern Frontend Applications',
    slug: 'testing-strategies-frontend',
    excerpt: 'A comprehensive guide to testing React applications with Jest, React Testing Library, and Cypress. Best practices and common pitfalls.',
    publishedAt: '2024-12-10',
    tags: ['Testing', 'React', 'Jest', 'Cypress'],
    readingTime: '12 min read',
    featured: true,
  },
  {
    id: '3',
    title: 'TypeScript Tips for Better Developer Experience',
    slug: 'typescript-better-dx',
    excerpt: 'Advanced TypeScript patterns and configurations that improve developer experience and catch more errors at compile time.',
    publishedAt: '2024-12-05',
    tags: ['TypeScript', 'DX', 'Best Practices'],
    readingTime: '10 min read',
    featured: false,
  },
  {
    id: '4',
    title: 'Building Scalable Component Libraries',
    slug: 'scalable-component-libraries',
    excerpt: 'Design principles and technical approaches for creating maintainable and scalable component libraries with React and TypeScript.',
    publishedAt: '2024-11-28',
    tags: ['React', 'Components', 'Architecture'],
    readingTime: '15 min read',
    featured: false,
  },
  {
    id: '5',
    title: 'Modern State Management in React',
    slug: 'modern-state-management-react',
    excerpt: 'Comparing different state management solutions including Context, Zustand, and Redux Toolkit. When to use what.',
    publishedAt: '2024-11-20',
    tags: ['React', 'State Management', 'Architecture'],
    readingTime: '11 min read',
    featured: false,
  },
  {
    id: '6',
    title: 'CSS-in-JS vs Tailwind CSS: A Practical Comparison',
    slug: 'css-in-js-vs-tailwind',
    excerpt: 'Practical comparison of styling approaches in modern React applications, including performance considerations and developer experience.',
    publishedAt: '2024-11-15',
    tags: ['CSS', 'Styling', 'Tailwind'],
    readingTime: '9 min read',
    featured: false,
  },
]

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPage() {
  const featuredPosts = posts.filter(post => post.featured)
  const allPosts = posts

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-display">
          Blog
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Thoughts and insights on React, TypeScript, testing, and modern web development. 
          Sharing lessons learned from building production applications.
        </p>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Featured Posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <time className="text-sm text-muted-foreground">
                      {formatDate(post.publishedAt)}
                    </time>
                    <span className="text-xs text-muted-foreground">
                      {post.readingTime}
                    </span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* All Posts */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-6">All Posts</h2>
        <div className="space-y-6">
          {allPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-md transition-all duration-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <time className="text-sm text-muted-foreground">
                        {formatDate(post.publishedAt)}
                      </time>
                      <span className="text-xs text-muted-foreground">
                        {post.readingTime}
                      </span>
                      {post.featured && (
                        <Badge variant="outline" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors mb-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-2 mb-3">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}