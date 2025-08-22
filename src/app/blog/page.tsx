import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { getPosts } from "@/lib/sanity/utils"

export const metadata: Metadata = {
  title: 'Blog - Gabriel Castro',
  description: 'Thoughts on React, TypeScript, and modern web development',
}

// Enable ISR with revalidation every 60 seconds
export const revalidate = 60

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPage() {
  const posts = await getPosts()
  const featuredPosts = posts?.filter(post => post.featured) || []
  const allPosts = posts || []

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
              <Card key={post._id} className="group hover:shadow-lg transition-all duration-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <time className="text-sm text-muted-foreground">
                      {formatDate(post.publishedAt)}
                    </time>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug.current}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.tags?.map((tag) => (
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
            <Card key={post._id} className="group hover:shadow-md transition-all duration-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <time className="text-sm text-muted-foreground">
                        {formatDate(post.publishedAt)}
                      </time>
                      {post.featured && (
                        <Badge variant="outline" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors mb-2">
                      <Link href={`/blog/${post.slug.current}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-2 mb-3">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {post.tags?.map((tag) => (
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