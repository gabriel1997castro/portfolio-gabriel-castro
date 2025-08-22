import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Resume - Gabriel Castro',
  description: 'Download or view Gabriel Castro&apos;s resume online',
}

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 font-display">
              Resume
            </h1>
            <p className="text-xl text-muted-foreground">
              Senior Frontend Engineer
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
            <Button asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto">
        {/* Personal Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Gabriel Castro</CardTitle>
            <CardDescription className="text-lg">Senior Frontend Engineer</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <Link href="mailto:gabriel1997.castro@gmail.com" className="text-sm hover:underline">
                    gabriel1997.castro@gmail.com
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">+55 (61) 98215-1307</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Brasília, Brazil</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4 text-muted-foreground" />
                  <Link href="https://github.com/gabriel1997castro" className="text-sm hover:underline" target="_blank">
                    github.com/gabriel1997castro
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4 text-muted-foreground" />
                  <Link href="https://linkedin.com/in/gabriel-castro-a4b776111" className="text-sm hover:underline" target="_blank">
                    linkedin.com/in/gabriel-castro-a4b776111
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Experienced Senior Frontend Engineer with 5+ years of expertise in building modern, 
              scalable web applications using React, TypeScript, and cutting-edge technologies. 
              Passionate about creating exceptional user experiences, implementing comprehensive testing strategies, 
              and maintaining high code quality standards. Proven track record of delivering complex projects 
              from conception to production in both startup and enterprise environments.
            </p>
          </CardContent>
        </Card>

        {/* Core Skills */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Core Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Frontend Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">React Native</Badge>
                  <Badge variant="outline">Preact</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Testing & Quality</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Jest</Badge>
                  <Badge variant="outline">Cypress</Badge>
                  <Badge variant="outline">RTL</Badge>
                  <Badge variant="outline">Storybook</Badge>
                  <Badge variant="outline">ESLint</Badge>
                  <Badge variant="outline">E2E Testing</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Tools & Infrastructure</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Git</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">Kubernetes</Badge>
                  <Badge variant="outline">CI/CD</Badge>
                  <Badge variant="outline">Webpack</Badge>
                  <Badge variant="outline">Vite</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Work Experience */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Work Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* ShowSeeker */}
            <div className="border-l-2 border-primary/20 pl-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-lg">React Frontend Developer</h3>
                  <p className="text-muted-foreground">ShowSeeker</p>
                </div>
                <span className="text-sm text-muted-foreground">Mar 2023 - Present</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-3">
                <li>Developed new features for ads management and pilot product using React and TypeScript</li>
                <li>Implemented comprehensive E2E testing with Cypress ensuring product reliability</li>
                <li>Built responsive UI components that work seamlessly across desktop and mobile devices</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">React</Badge>
                <Badge variant="secondary" className="text-xs">TypeScript</Badge>
                <Badge variant="secondary" className="text-xs">Cypress</Badge>
                <Badge variant="secondary" className="text-xs">Jest</Badge>
              </div>
            </div>

            {/* Autocomplete */}
            <div className="border-l-2 border-muted pl-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-lg">React Frontend Developer</h3>
                  <p className="text-muted-foreground">Autocomplete</p>
                </div>
                <span className="text-sm text-muted-foreground">Jun 2022 - Feb 2023</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-3">
                <li>Built insurance quotes flow using React, TypeScript, and Storybook for component development</li>
                <li>Implemented comprehensive testing strategy with Jest/RTL and Cypress for quality assurance</li>
                <li>Collaborated with international team members to deliver features on time</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">React</Badge>
                <Badge variant="secondary" className="text-xs">TypeScript</Badge>
                <Badge variant="secondary" className="text-xs">Storybook</Badge>
                <Badge variant="secondary" className="text-xs">Jest</Badge>
                <Badge variant="secondary" className="text-xs">Cypress</Badge>
              </div>
            </div>

            {/* NTT DATA */}
            <div className="border-l-2 border-muted pl-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-lg">React & Java Full-Stack Developer</h3>
                  <p className="text-muted-foreground">NTT DATA | everis</p>
                </div>
                <span className="text-sm text-muted-foreground">Jul 2021 - Jul 2022</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-3">
                <li>Developed lightweight Preact chatbot with intelligent suggestions and PDF rendering capabilities</li>
                <li>Built robust Spring Boot APIs to support frontend applications and data processing</li>
                <li>Created Python automation scripts and deployed applications using Docker and Kubernetes</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Preact</Badge>
                <Badge variant="secondary" className="text-xs">Spring Boot</Badge>
                <Badge variant="secondary" className="text-xs">Python</Badge>
                <Badge variant="secondary" className="text-xs">Docker</Badge>
                <Badge variant="secondary" className="text-xs">Kubernetes</Badge>
              </div>
            </div>

            {/* Core Consulting */}
            <div className="border-l-2 border-muted pl-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-lg">React & React Native Developer</h3>
                  <p className="text-muted-foreground">Core Consulting</p>
                </div>
                <span className="text-sm text-muted-foreground">Oct 2019 - Jul 2021</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-3">
                <li>Built healthcare hub with FHIR compliance for patient records and vaccination schedules</li>
                <li>Developed shared codebase for both web and mobile applications using React and React Native</li>
                <li>Created dynamic clinical record renderer with complex data visualization components</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">React</Badge>
                <Badge variant="secondary" className="text-xs">React Native</Badge>
                <Badge variant="secondary" className="text-xs">FHIR</Badge>
                <Badge variant="secondary" className="text-xs">Node.js</Badge>
                <Badge variant="secondary" className="text-xs">GraphQL</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education & Certifications */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Education & Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Continuously learning through online courses, documentation, and hands-on experience. 
              Focused on staying current with React ecosystem developments, testing best practices, 
              and modern frontend architecture patterns.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}