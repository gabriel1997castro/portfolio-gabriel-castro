import { client } from './client'
import * as queries from './queries'
import { SiteSettings, Project, Job, Post } from './types'

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    return await client.fetch(queries.siteSettingsQuery)
  } catch (error) {
    console.warn('Failed to fetch site settings from Sanity:', error)
    return null
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    return await client.fetch(queries.projectsQuery)
  } catch (error) {
    console.warn('Failed to fetch projects from Sanity:', error)
    return []
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    return await client.fetch(queries.featuredProjectsQuery)
  } catch (error) {
    console.warn('Failed to fetch featured projects from Sanity:', error)
    return []
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    return await client.fetch(queries.projectBySlugQuery, { slug })
  } catch (error) {
    console.warn('Failed to fetch project by slug from Sanity:', error)
    return null
  }
}

export async function getJobs(): Promise<Job[]> {
  try {
    return await client.fetch(queries.jobsQuery)
  } catch (error) {
    console.warn('Failed to fetch jobs from Sanity:', error)
    return []
  }
}

export async function getPosts(): Promise<Post[]> {
  try {
    return await client.fetch(queries.postsQuery)
  } catch (error) {
    console.warn('Failed to fetch posts from Sanity:', error)
    return []
  }
}

export async function getFeaturedPosts(): Promise<Post[]> {
  try {
    return await client.fetch(queries.featuredPostsQuery)
  } catch (error) {
    console.warn('Failed to fetch featured posts from Sanity:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    return await client.fetch(queries.postBySlugQuery, { slug })
  } catch (error) {
    console.warn('Failed to fetch post by slug from Sanity:', error)
    return null
  }
}

export async function getPostSlugs(): Promise<Array<{ slug: { current: string } }>> {
  try {
    return await client.fetch(queries.postSlugsQuery)
  } catch (error) {
    console.warn('Failed to fetch post slugs from Sanity:', error)
    return []
  }
}

export async function getProjectSlugs(): Promise<Array<{ slug: { current: string } }>> {
  try {
    return await client.fetch(queries.projectSlugsQuery)
  } catch (error) {
    console.warn('Failed to fetch project slugs from Sanity:', error)
    return []
  }
}