import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Projects - Gabriel Castro',
  description: 'Explore my portfolio of React and TypeScript projects',
}

// Sample projects data - will be replaced with Sanity data later
const projects = [
  {
    id: '1',
    title: 'ShowSeeker Pilot',
    slug: 'showseeker-pilot',
    tagline: 'Advanced ads management platform',
    summary: 'Built new features for ads management and pilot product development using modern React and TypeScript stack with comprehensive testing.',
    tech: ['React', 'TypeScript', 'AG Grid', 'Cypress', 'Jest'],
    year: 2024,
    featured: true,
    links: {
      liveUrl: 'https://demo.showseeker.com',
      gitUrl: null,
    },
    image: 'bg-gradient-to-br from-blue-500 to-purple-600',
  },
  {
    id: '2',
    title: 'Insurance Fast Quote',
    slug: 'insurance-fast-quote',
    tagline: 'Streamlined insurance quote experience',
    summary: 'Developed a guided quote UX with React, TypeScript, and Storybook. Implemented comprehensive testing with Jest/RTL and Cypress.',
    tech: ['React', 'TypeScript', 'Storybook', 'Jest', 'RTL', 'Cypress'],
    year: 2023,
    featured: true,
    links: {
      liveUrl: 'https://demo.insurance.com',
      gitUrl: 'https://github.com/gabriel1997castro/insurance-quote',
    },
    image: 'bg-gradient-to-br from-green-500 to-teal-600',
  },
  {
    id: '3',
    title: 'Consultant Chatbot',
    slug: 'consultant-chatbot',
    tagline: 'AI-powered consulting assistant',
    summary: 'Built a lightweight Preact chatbot with Spring APIs backend. Features include intelligent suggestions and PDF rendering.',
    tech: ['Preact', 'Spring Boot', 'Python', 'Docker', 'Kubernetes'],
    year: 2022,
    featured: false,
    links: {
      liveUrl: null,
      gitUrl: 'https://github.com/gabriel1997castro/consultant-bot',
    },
    image: 'bg-gradient-to-br from-orange-500 to-red-600',
  },
  {
    id: '4',
    title: 'Healthcare Hub (FHIR)',
    slug: 'healthcare-hub-fhir',
    tagline: 'FHIR-compliant patient records system',
    summary: 'Developed a comprehensive healthcare platform with patient records and vaccination schedules using React and React Native.',
    tech: ['React', 'React Native', 'FHIR', 'Node.js', 'GraphQL'],
    year: 2021,
    featured: true,
    links: {
      liveUrl: 'https://demo.healthcare-hub.com',
      gitUrl: null,
    },
    image: 'bg-gradient-to-br from-purple-500 to-pink-600',
  },
]

export default function ProjectsPage() {
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
            .filter(project => project.featured)
            .map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-200">
                <CardHeader>
                  <div className={`aspect-video ${project.image} rounded-lg mb-4`} />
                  <CardTitle className="group-hover:text-primary transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{project.tagline}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.summary}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
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
                      {project.links.gitUrl && (
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.links.gitUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                      {project.links.liveUrl && (
                        <Button size="sm" asChild>
                          <Link href={project.links.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>

      {/* All Projects */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-6">All Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-200">
              <CardHeader>
                <div className={`aspect-video ${project.image} rounded-lg mb-4`} />
                <CardTitle className="group-hover:text-primary transition-colors">
                  <Link href={`/projects/${project.slug}`}>
                    {project.title}
                  </Link>
                </CardTitle>
                <CardDescription>{project.tagline}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.summary}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
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
                    {project.links.gitUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.links.gitUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    {project.links.liveUrl && (
                      <Button size="sm" asChild>
                        <Link href={project.links.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}