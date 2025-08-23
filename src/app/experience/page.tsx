import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";
import { getJobs } from "@/lib/sanity/utils";
import { urlFor } from "@/lib/sanity/client";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Experience - Gabriel Castro",
  description: "My professional journey as a Frontend Engineer",
};

// Enable ISR with revalidation every 60 seconds
export const revalidate = 60;

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

function calculateDuration(
  startDate: string,
  endDate: string | null | undefined
) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));

  if (diffMonths < 12) {
    return `${diffMonths} month${diffMonths === 1 ? "" : "s"}`;
  }

  const years = Math.floor(diffMonths / 12);
  const remainingMonths = diffMonths % 12;

  if (remainingMonths === 0) {
    return `${years} year${years === 1 ? "" : "s"}`;
  }

  return `${years} year${years === 1 ? "" : "s"} ${remainingMonths} month${remainingMonths === 1 ? "" : "s"}`;
}

export default async function ExperiencePage() {
  const jobs = await getJobs();
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-display">
          Experience
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          My professional journey in frontend development, building modern web
          applications with React, TypeScript, and cutting-edge technologies.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

        <div className="space-y-8">
          {jobs?.map((job) => (
            <div key={job._id} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-6 w-4 h-4 bg-primary rounded-full border-4 border-background" />

              {/* Job Card */}
              <div className="ml-12 md:ml-20">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center relative overflow-hidden">
                          {job.logo ? (
                            <Image
                              src={urlFor(job.logo).width(48).height(48).url()}
                              alt={`${job.company} logo`}
                              width={48}
                              height={48}
                              className="object-cover"
                            />
                          ) : (
                            <Building className="h-6 w-6 text-white" />
                          )}
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-1">
                            {job.role}
                          </CardTitle>
                          <CardDescription className="text-lg font-medium text-foreground">
                            {job.company}
                          </CardDescription>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {formatDate(job.startDate)} -{" "}
                          {job.endDate ? formatDate(job.endDate) : "Present"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>•</span>
                        <span>
                          {calculateDuration(job.startDate, job.endDate)}
                        </span>
                      </div>
                      {job.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {job.bullets && job.bullets.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {job.bullets.map((bullet, bulletIndex) => (
                            <li
                              key={bulletIndex}
                              className="flex items-start gap-2"
                            >
                              <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {job.tech && job.tech.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Summary */}
      <section className="mt-16 md:ml-8 ml-4">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          Core Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Frontend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">React Native</Badge>
                <Badge variant="outline">Preact</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Testing & Quality</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Jest</Badge>
                <Badge variant="outline">Cypress</Badge>
                <Badge variant="outline">RTL</Badge>
                <Badge variant="outline">Storybook</Badge>
                <Badge variant="outline">ESLint</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tools & Infrastructure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Docker</Badge>
                <Badge variant="outline">Kubernetes</Badge>
                <Badge variant="outline">Git</Badge>
                <Badge variant="outline">CI/CD</Badge>
                <Badge variant="outline">Webpack</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
