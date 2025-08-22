import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 font-display">
          Gabriel Castro
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
          Senior Frontend Engineer
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Passionate about building exceptional user experiences with React, TypeScript, 
          and modern web technologies. Focused on performance, clean code, and shipping 
          high-quality features.
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
          {/* Sample Project Cards */}
          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4" />
              <CardTitle>ShowSeeker Pilot</CardTitle>
              <CardDescription>
                Ads management features with modern React and TypeScript
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">AG Grid</Badge>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 rounded-lg mb-4" />
              <CardTitle>Insurance Fast Quote</CardTitle>
              <CardDescription>
                Guided quote UX with comprehensive testing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Storybook</Badge>
                <Badge variant="secondary">Jest</Badge>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 rounded-lg mb-4" />
              <CardTitle>Healthcare Hub</CardTitle>
              <CardDescription>
                FHIR-compliant patient records system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">React Native</Badge>
                <Badge variant="secondary">FHIR</Badge>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>
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
          {/* Sample Blog Cards */}
          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="line-clamp-2">
                React Performance Optimization Techniques
              </CardTitle>
              <CardDescription>
                Best practices for keeping your React apps fast and responsive
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Dec 15, 2024</span>
                <Badge variant="outline">React</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="line-clamp-2">
                Testing Strategies for Modern Frontend
              </CardTitle>
              <CardDescription>
                Comprehensive guide to testing React applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Dec 10, 2024</span>
                <Badge variant="outline">Testing</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="line-clamp-2">
                TypeScript Tips for Better DX
              </CardTitle>
              <CardDescription>
                Advanced TypeScript patterns for improved developer experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Dec 5, 2024</span>
                <Badge variant="outline">TypeScript</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
