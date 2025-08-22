import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Contact - Gabriel Castro',
  description: 'Get in touch with Gabriel Castro for opportunities and collaborations',
}

export default function ContactPage() {
  const contactInfo = {
    email: 'gabriel1997.castro@gmail.com',
    phone: '+55 (61) 98215-1307',
    location: 'Brasília, Brazil',
    socials: {
      github: 'https://github.com/gabriel1997castro',
      linkedin: 'https://linkedin.com/in/gabriel-castro-a4b776111'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-display">
          Get in Touch
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          I&apos;m always interested in discussing new opportunities, collaborations, 
          or just chatting about frontend development and technology.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-6">Contact Information</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <Button variant="link" asChild className="p-0 h-auto text-muted-foreground">
                      <Link href={`mailto:${contactInfo.email}`}>
                        {contactInfo.email}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <Button variant="link" asChild className="p-0 h-auto text-muted-foreground">
                      <Link href={`tel:${contactInfo.phone}`}>
                        {contactInfo.phone}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">{contactInfo.location}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-6">Connect</h2>
            <div className="grid grid-cols-2 gap-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Button variant="ghost" asChild className="w-full h-auto p-0">
                    <Link 
                      href={contactInfo.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3"
                    >
                      <div className="p-4 bg-primary/10 rounded-lg">
                        <Github className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold">GitHub</h3>
                        <p className="text-sm text-muted-foreground">@gabriel1997castro</p>
                      </div>
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Button variant="ghost" asChild className="w-full h-auto p-0">
                    <Link 
                      href={contactInfo.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3"
                    >
                      <div className="p-4 bg-primary/10 rounded-lg">
                        <Linkedin className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold">LinkedIn</h3>
                        <p className="text-sm text-muted-foreground">gabriel-castro</p>
                      </div>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="space-y-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Let&apos;s Work Together</CardTitle>
              <CardDescription>
                I&apos;m currently available for new opportunities and exciting projects.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">What I&apos;m looking for:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Frontend Engineering roles with React/TypeScript</li>
                  <li>• Remote or hybrid opportunities</li>
                  <li>• Projects focused on user experience and performance</li>
                  <li>• Teams that value code quality and testing</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold">Available for:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Full-time positions</li>
                  <li>• Contract work</li>
                  <li>• Consulting projects</li>
                  <li>• Code reviews and mentoring</li>
                </ul>
              </div>

              <div className="pt-4">
                <Button asChild className="w-full">
                  <Link href={`mailto:${contactInfo.email}?subject=Let's work together`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Send me an email
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Email</span>
                  <span className="text-sm text-muted-foreground">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">LinkedIn</span>
                  <span className="text-sm text-muted-foreground">Within 2-3 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Phone</span>
                  <span className="text-sm text-muted-foreground">Best for urgent matters</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Preferred Communication</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                I prefer email for initial contact as it allows me to provide thoughtful 
                responses and keeps everything organized. For ongoing projects, I&apos;m 
                comfortable with various communication tools.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">I work well with:</h4>
                <div className="text-sm text-muted-foreground">
                  Slack, Discord, Microsoft Teams, Zoom, Google Meet
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}