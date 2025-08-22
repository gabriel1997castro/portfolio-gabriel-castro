import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Share2 } from "lucide-react"
import Link from "next/link"
import { getPostBySlug, getPosts, getPostSlugs } from "@/lib/sanity/utils"
import { PortableText } from '@portabletext/react'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

// Enable ISR with revalidation every 60 seconds
export const revalidate = 60

export async function generateStaticParams() {
  const posts = await getPostSlugs()
  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - Gabriel Castro`,
    description: post.excerpt,
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Get related posts
  const allPosts = await getPosts()
  const relatedPosts = allPosts
    ?.filter(p => p.slug.current !== post.slug.current)
    .filter(p => p.tags?.some(tag => post.tags?.includes(tag)))
    .slice(0, 2) || []

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Back Navigation */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time>{formatDate(post.publishedAt)}</time>
            </div>
            {post.featured && (
              <>
                <span>•</span>
                <Badge variant="outline" className="text-xs">
                  Featured
                </Badge>
              </>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-display">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags?.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </header>

        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {post.body ? (
              <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-h2:text-2xl prose-h3:text-xl prose-pre:bg-muted prose-pre:border prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded">
                <PortableText value={post.body} />
              </div>
            ) : (
              <div className="prose prose-invert prose-lg max-w-none">
                <p>Content coming soon...</p>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents */}
              <Card>
                <CardHeader>
                  <h3 className="font-semibold">Table of Contents</h3>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2 text-sm">
                    <Link href="#understanding" className="block text-muted-foreground hover:text-foreground transition-colors">
                      Understanding React&apos;s Rendering
                    </Link>
                    <Link href="#optimization" className="block text-muted-foreground hover:text-foreground transition-colors">
                      Optimization Techniques
                    </Link>
                    <Link href="#bundle" className="block text-muted-foreground hover:text-foreground transition-colors">
                      Bundle Optimization
                    </Link>
                    <Link href="#measuring" className="block text-muted-foreground hover:text-foreground transition-colors">
                      Measuring Performance
                    </Link>
                  </nav>
                </CardContent>
              </Card>

              {/* Author */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      GC
                    </div>
                    <div>
                      <h4 className="font-semibold">Gabriel Castro</h4>
                      <p className="text-sm text-muted-foreground">Senior Frontend Engineer</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Passionate about React, TypeScript, and building performant web applications.
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <Card>
                  <CardHeader>
                    <h3 className="font-semibold">Related Posts</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <div key={relatedPost._id}>
                          <Link
                            href={`/blog/${relatedPost.slug.current}`}
                            className="block group"
                          >
                            <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2 mb-1">
                              {relatedPost.title}
                            </h4>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {relatedPost.excerpt}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <time className="text-xs text-muted-foreground">
                                {formatDate(relatedPost.publishedAt)}
                              </time>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </aside>
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-16 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Get notified when I publish new articles about React, TypeScript, and frontend development.
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <Button className="flex-1" asChild>
                  <Link href="/contact">
                    Subscribe to Updates
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}