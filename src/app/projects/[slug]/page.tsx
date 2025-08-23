import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  getProjectBySlug,
  getProjects,
  getProjectSlugs,
} from "@/lib/sanity/utils";
import { urlFor } from "@/lib/sanity/client";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Enable ISR with revalidation every 60 seconds
export const revalidate = 60;

export async function generateStaticParams() {
  const projects = await getProjectSlugs();
  return projects.map((project) => ({
    slug: project.slug.current,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Gabriel Castro`,
    description: project.summary || project.tagline,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Get related projects
  const allProjects = await getProjects();
  const relatedProjects =
    allProjects
      ?.filter((p) => p.slug.current !== project.slug.current)
      .slice(0, 2) || [];

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Back Navigation */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      {/* Project Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-display">
            {project.title}
          </h1>
          <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
            {project.year}
          </span>
        </div>
        <p className="text-xl text-muted-foreground mb-6">{project.tagline}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech?.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-4">
          {project.links?.gitUrl && (
            <Button variant="outline" asChild>
              <Link
                href={project.links.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Link>
            </Button>
          )}
          {project.links?.liveUrl && (
            <Button asChild>
              <Link
                href={project.links.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Project Images */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Project Overview
            </h2>
            <div className="grid gap-4">
              {project.images?.map((img, index) => (
                <div key={index} className="space-y-2">
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg relative overflow-hidden">
                    {img.image && (
                      <Image
                        src={urlFor(img.image).width(800).height(450).url()}
                        alt={
                          img.caption ||
                          `${project.title} screenshot ${index + 1}`
                        }
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  {img.caption && (
                    <p className="text-sm text-muted-foreground text-center">
                      {img.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2 className="font-bold text-2xl pb-4">About This Project</h2>
            {project.summary && (
              <div className="text-muted-foreground leading-relaxed">
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p className="mb-4">{children}</p>,
                    h1: ({ children }) => (
                      <h1 className="text-2xl font-bold mb-4">{children}</h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-xl font-semibold mb-3">{children}</h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-lg font-medium mb-2">{children}</h3>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc pl-6 mb-4">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal pl-6 mb-4">{children}</ol>
                    ),
                    li: ({ children }) => <li className="mb-1">{children}</li>,
                    code: ({ children }) => (
                      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
                        {children}
                      </code>
                    ),
                    pre: ({ children }) => (
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
                        {children}
                      </pre>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary/30 pl-4 italic mb-4">
                        {children}
                      </blockquote>
                    ),
                    a: ({ href, children }) => (
                      <Link
                        href={href || "#"}
                        className="text-primary underline hover:no-underline"
                        target={href?.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href?.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {children}
                      </Link>
                    ),
                  }}
                >
                  {project.summary}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Project Details */}
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Year</h4>
                <p className="text-muted-foreground">{project.year}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech?.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Links</h4>
                <div className="space-y-2">
                  {project.links?.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <Link
                        href={project.links.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                  {project.links?.gitUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <Link
                        href={project.links.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Projects */}
          <Card>
            <CardHeader>
              <CardTitle>Other Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {relatedProjects.map((relatedProject) => (
                  <div key={relatedProject._id}>
                    <Link
                      href={`/projects/${relatedProject.slug.current}`}
                      className="block group"
                    >
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        {relatedProject.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {relatedProject.tagline}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
