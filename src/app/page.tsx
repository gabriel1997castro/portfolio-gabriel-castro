import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { getFeaturedProjects, getFeaturedPosts, getSiteSettings } from "@/lib/sanity/utils";
import { urlFor } from "@/lib/sanity/client";
import Image from "next/image";

// Enable ISR with revalidation every 60 seconds
export const revalidate = 60

export default async function Home() {
  // Fetch data from Sanity
  const [siteSettings, featuredProjects, featuredPosts] = await Promise.all([
    getSiteSettings(),
    getFeaturedProjects(),
    getFeaturedPosts(),
  ]);
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 font-display">
          {siteSettings?.name || 'Gabriel Castro'}
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
          {siteSettings?.title || 'Senior Frontend Engineer'}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          {siteSettings?.bio || 'Passionate about building exceptional user experiences with React, TypeScript, and modern web technologies. Focused on performance, clean code, and shipping high-quality features.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight font-display">Featured Projects</h2>
          <Button variant="ghost" asChild>
            <Link href="/projects">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects?.map((project) => (
            <Card key={project._id} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 relative overflow-hidden">
                  {project.images?.[0]?.image && (
                    <Image
                      src={urlFor(project.images[0].image).width(400).height(225).url()}
                      alt={project.images[0].caption || project.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  {project.tagline || project.summary}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech?.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.links?.gitUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.links.gitUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  )}
                  {project.links?.liveUrl && (
                    <Button size="sm" asChild>
                      <Link href={project.links.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight font-display">Latest Posts</h2>
          <Button variant="ghost" asChild>
            <Link href="/blog">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts?.map((post) => (
            <Card key={post._id} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription>
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <time>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</time>
                  {post.tags?.[0] && (
                    <Badge variant="outline">{post.tags[0]}</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
