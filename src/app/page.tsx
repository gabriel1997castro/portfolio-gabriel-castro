import { Button } from "@/components/ui/button";
import { InteractiveButton } from "@/components/ui/interactive-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import {
  getFeaturedProjects,
  getFeaturedPosts,
  getSiteSettings,
} from "@/lib/sanity/utils";
import { urlFor } from "@/lib/sanity/client";
import Image from "next/image";

// Enable ISR with revalidation every 60 seconds
export const revalidate = 60;

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
      <section className="py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto lg:mx-0">
              <Image
                src={
                  siteSettings?.avatar?.asset
                    ? urlFor(siteSettings.avatar.asset)
                        .width(512)
                        .height(512)
                        .url()
                    : "/images/gabriel-castro.jpg"
                }
                alt={`${siteSettings?.name || "Gabriel Castro"} - ${siteSettings?.title || "Frontend Engineer"}`}
                fill
                className="rounded-full object-cover border-4 border-white/10 shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 font-display">
              {siteSettings?.name || "Gabriel Castro"}
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
              {siteSettings?.title || "Frontend Engineer"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8">
              {siteSettings?.bio ||
                "Passionate about building exceptional user experiences with React, TypeScript, and modern web technologies. Focused on performance, clean code, and shipping high-quality features."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild>
                <Link href="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight font-display">
            Featured Projects
          </h2>
          <Button variant="ghost" asChild>
            <Link href="/projects">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects?.map((project) => (
            <Link key={project._id} href={`/projects/${project.slug.current}`}>
              <Card className="group hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer h-full">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 relative overflow-hidden">
                    {project.images?.[0]?.image && (
                      <Image
                        src={urlFor(project.images[0].image)
                          .width(400)
                          .height(225)
                          .url()}
                        alt={project.images[0].caption || project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>
                    {project.tagline || project.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech?.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.links?.gitUrl && (
                      <InteractiveButton
                        size="sm"
                        variant="outline"
                        href={project.links.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        stopPropagation={true}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </InteractiveButton>
                    )}
                    {project.links?.liveUrl && (
                      <InteractiveButton
                        size="sm"
                        href={project.links.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        stopPropagation={true}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </InteractiveButton>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight font-display">
            Latest Posts
          </h2>
          <Button variant="ghost" asChild>
            <Link href="/blog">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts?.map((post) => (
            <Link key={post._id} href={`/blog/${post.slug.current}`}>
              <Card className="group hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <time>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    {post.tags?.[0] && (
                      <Badge variant="outline">{post.tags[0]}</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
