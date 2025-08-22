import { client } from './client'
import * as queries from './queries'
import { SiteSettings, Project, Job, Post } from './types'

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return await client.fetch(queries.siteSettingsQuery)
}

export async function getProjects(): Promise<Project[]> {
  return await client.fetch(queries.projectsQuery)
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return await client.fetch(queries.featuredProjectsQuery)
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return await client.fetch(queries.projectBySlugQuery, { slug })
}

export async function getJobs(): Promise<Job[]> {
  return await client.fetch(queries.jobsQuery)
}

export async function getPosts(): Promise<Post[]> {
  return await client.fetch(queries.postsQuery)
}

export async function getFeaturedPosts(): Promise<Post[]> {
  return await client.fetch(queries.featuredPostsQuery)
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return await client.fetch(queries.postBySlugQuery, { slug })
}

export async function getPostSlugs(): Promise<Array<{ slug: { current: string } }>> {
  return await client.fetch(queries.postSlugsQuery)
}

export async function getProjectSlugs(): Promise<Array<{ slug: { current: string } }>> {
  return await client.fetch(queries.projectSlugsQuery)
}