import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { getProjects } from "@/lib/sanity/utils"
import { urlFor } from "@/lib/sanity/client"
import Image from "next/image"

export const metadata: Metadata = {
  title: 'Projects - Gabriel Castro',
  description: 'Explore my portfolio of React and TypeScript projects',
}

// Enable ISR with revalidation every 60 seconds
export const revalidate = 60

export default async function ProjectsPage() {
  const projects = await getProjects()
  
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-display">
          Projects
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          A collection of projects I&apos;ve built using React, TypeScript, and modern web technologies. 
          Each project represents my passion for creating efficient, scalable, and user-friendly applications.
        </p>
      </div>

      {/* Featured Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            ?.filter(project => project.featured)
            .map((project) => (
              <Link key={project._id} href={`/projects/${project.slug.current}`}>
                <Card className="group hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer h-full">
                  <CardHeader>
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 relative overflow-hidden">
                      {project.images?.[0]?.image && (
                        <Image
                          src={urlFor(project.images[0].image).width(400).height(225).url()}
                          alt={project.images[0].caption || project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {project.summary}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech?.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {project.year}
                      </span>
                      <div className="flex gap-2">
                        {project.links?.gitUrl && (
                          <Button 
                            size="sm" 
                            variant="outline" 
                            asChild 
                            onClickCapture={(e) => e.stopPropagation()}
                          >
                            <Link href={project.links.gitUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        {project.links?.liveUrl && (
                          <Button 
                            size="sm" 
                            asChild 
                            onClickCapture={(e) => e.stopPropagation()}
                          >
                            <Link href={project.links.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
        </div>
      </section>

      {/* All Projects */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-6">All Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project) => (
            <Link key={project._id} href={`/projects/${project.slug.current}`}>
              <Card className="group hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer h-full">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 relative overflow-hidden">
                    {project.images?.[0]?.image && (
                      <Image
                        src={urlFor(project.images[0].image).width(400).height(225).url()}
                        alt={project.images[0].caption || project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.tagline}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.summary}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech?.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {project.year}
                    </span>
                    <div className="flex gap-2">
                      {project.links?.gitUrl && (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          asChild 
                          onClickCapture={(e) => e.stopPropagation()}
                        >
                          <Link href={project.links.gitUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                      {project.links?.liveUrl && (
                        <Button 
                          size="sm" 
                          asChild 
                          onClickCapture={(e) => e.stopPropagation()}
                        >
                          <Link href={project.links.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}