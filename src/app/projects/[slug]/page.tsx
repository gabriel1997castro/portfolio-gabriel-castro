import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Sample projects data - will be replaced with Sanity data later
const projects = [
  {
    id: '1',
    title: 'ShowSeeker Pilot',
    slug: 'showseeker-pilot',
    tagline: 'Advanced ads management platform',
    summary: 'Built new features for ads management and pilot product development using modern React and TypeScript stack with comprehensive testing.',
    description: `
      <p>The ShowSeeker Pilot project represents a comprehensive ads management platform designed to streamline advertising operations and enhance user experience. This project involved developing new features for both the main ads management system and a pilot product that served as a testing ground for innovative advertising solutions.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Advanced ad campaign management interface</li>
        <li>Real-time analytics and reporting dashboard</li>
        <li>User role management and permissions system</li>
        <li>Integration with multiple ad networks</li>
        <li>Responsive design for mobile and desktop</li>
      </ul>
      
      <h3>Technical Highlights</h3>
      <ul>
        <li>Implemented complex data grids using AG Grid for managing large datasets</li>
        <li>Built comprehensive test suites with Cypress for end-to-end testing</li>
        <li>Used TypeScript throughout for type safety and better developer experience</li>
        <li>Implemented performance optimizations for handling large amounts of data</li>
      </ul>
    `,
    tech: ['React', 'TypeScript', 'AG Grid', 'Cypress', 'Jest', 'Styled Components'],
    year: 2024,
    featured: true,
    links: {
      liveUrl: 'https://demo.showseeker.com',
      gitUrl: null,
    },
    images: [
      { image: 'bg-gradient-to-br from-blue-500 to-purple-600', caption: 'Dashboard Overview' },
      { image: 'bg-gradient-to-br from-purple-500 to-blue-600', caption: 'Campaign Management' },
      { image: 'bg-gradient-to-br from-blue-600 to-purple-500', caption: 'Analytics View' },
    ],
  },
  {
    id: '2',
    title: 'Insurance Fast Quote',
    slug: 'insurance-fast-quote',
    tagline: 'Streamlined insurance quote experience',
    summary: 'Developed a guided quote UX with React, TypeScript, and Storybook. Implemented comprehensive testing with Jest/RTL and Cypress.',
    description: `
      <p>The Insurance Fast Quote system revolutionizes the insurance quote process by providing a streamlined, user-friendly interface that guides customers through obtaining quotes quickly and efficiently.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Multi-step guided quote process</li>
        <li>Real-time quote calculations</li>
        <li>Integration with multiple insurance providers</li>
        <li>Document upload and verification system</li>
        <li>Mobile-optimized responsive design</li>
      </ul>
      
      <h3>Technical Approach</h3>
      <ul>
        <li>Component-driven development with Storybook</li>
        <li>Comprehensive unit testing with Jest and React Testing Library</li>
        <li>End-to-end testing with Cypress</li>
        <li>State management with React Context and custom hooks</li>
      </ul>
    `,
    tech: ['React', 'TypeScript', 'Storybook', 'Jest', 'RTL', 'Cypress', 'React Hook Form'],
    year: 2023,
    featured: true,
    links: {
      liveUrl: 'https://demo.insurance.com',
      gitUrl: 'https://github.com/gabriel1997castro/insurance-quote',
    },
    images: [
      { image: 'bg-gradient-to-br from-green-500 to-teal-600', caption: 'Quote Form Interface' },
      { image: 'bg-gradient-to-br from-teal-500 to-green-600', caption: 'Results Dashboard' },
    ],
  },
]

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Gabriel Castro`,
    description: project.summary,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    notFound()
  }

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
        <p className="text-xl text-muted-foreground mb-6">
          {project.tagline}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-4">
          {project.links.gitUrl && (
            <Button variant="outline" asChild>
              <Link href={project.links.gitUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Link>
            </Button>
          )}
          {project.links.liveUrl && (
            <Button asChild>
              <Link href={project.links.liveUrl} target="_blank" rel="noopener noreferrer">
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
            <h2 className="text-2xl font-bold tracking-tight mb-4">Project Overview</h2>
            <div className="grid gap-4">
              {project.images.map((img, index) => (
                <div key={index} className="space-y-2">
                  <div className={`aspect-video ${img.image} rounded-lg`} />
                  <p className="text-sm text-muted-foreground text-center">
                    {img.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div className="prose prose-invert max-w-none">
            <h2>About This Project</h2>
            <div dangerouslySetInnerHTML={{ __html: project.description }} />
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
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Links</h4>
                <div className="space-y-2">
                  {project.links.liveUrl && (
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href={project.links.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                  {project.links.gitUrl && (
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href={project.links.gitUrl} target="_blank" rel="noopener noreferrer">
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
                {projects
                  .filter(p => p.slug !== project.slug)
                  .slice(0, 2)
                  .map((relatedProject) => (
                    <div key={relatedProject.id}>
                      <Link
                        href={`/projects/${relatedProject.slug}`}
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
  )
}