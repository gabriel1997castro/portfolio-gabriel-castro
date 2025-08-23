import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getPostBySlug, getPosts, getPostSlugs } from "@/lib/sanity/utils";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/components/portable-text-components";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Enable ISR with revalidation every 60 seconds
export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getPostSlugs();
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Gabriel Castro`,
    description: post.excerpt,
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts
  const allPosts = await getPosts();
  const relatedPosts =
    allPosts
      ?.filter((p) => p.slug.current !== post.slug.current)
      .filter((p) => p.tags?.some((tag) => post.tags?.includes(tag)))
      .slice(0, 2) || [];

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 max-w-6xl">
      {/* Back Navigation */}
      <div className="mb-8 ml-4">
        <Button variant="ghost" asChild className="h-auto py-2 px-3">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Article Header */}
        <header className="mb-8 md:mb-12">
          <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time>{formatDate(post.publishedAt)}</time>
            </div>
            {post.featured && (
              <>
                <span className="hidden sm:block">•</span>
                <Badge variant="outline" className="text-xs">
                  Featured
                </Badge>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6 font-display leading-tight">
            {post.title}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 md:mb-6 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
            {post.tags?.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="h-auto py-2 px-3">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </header>

        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Main Content */}
          <article className="lg:col-span-3 min-w-0">
            {post.body ? (
              <div className="prose prose-sm sm:prose prose-invert lg:prose-lg xl:prose-xl max-w-none prose-headings:font-display prose-h2:text-xl sm:prose-h2:text-2xl prose-h3:text-lg sm:prose-h3:text-xl prose-pre:max-w-full prose-pre:overflow-x-auto">
                <PortableText
                  value={post.body}
                  components={portableTextComponents}
                />
              </div>
            ) : (
              <div className="prose prose-sm sm:prose prose-invert lg:prose-lg max-w-none">
                <p>Content coming soon...</p>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 order-first lg:order-last">
            <div className="lg:sticky lg:top-24 space-y-4 lg:space-y-6">
              {/* Table of Contents */}
              <Card>
                <CardHeader>
                  <h3 className="font-semibold">Table of Contents</h3>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2 text-sm">
                    <Link
                      href="#understanding"
                      className="block text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Understanding React&apos;s Rendering
                    </Link>
                    <Link
                      href="#optimization"
                      className="block text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Optimization Techniques
                    </Link>
                    <Link
                      href="#bundle"
                      className="block text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Bundle Optimization
                    </Link>
                    <Link
                      href="#measuring"
                      className="block text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Measuring Performance
                    </Link>
                  </nav>
                </CardContent>
              </Card>

              {/* Author */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src="/images/gabriel-castro.jpg"
                      alt="Gabriel Castro"
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">Gabriel Castro</h4>
                      <p className="text-sm text-muted-foreground">
                        Frontend Engineer
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Passionate about React, TypeScript, and building performant
                    web applications.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
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
                Get notified when I publish new articles about React,
                TypeScript, and frontend development.
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <Button className="flex-1" asChild>
                  <Link href="/contact">Subscribe to Updates</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
