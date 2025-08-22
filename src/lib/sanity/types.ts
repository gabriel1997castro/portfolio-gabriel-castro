import { SanityImageObject } from '@sanity/image-url/lib/types/types'
import { PortableTextBlock } from '@portabletext/types'

export interface SiteSettings {
  name: string
  title: string
  bio: string
  location?: string
  email: string
  phone?: string
  avatar?: SanityImageObject
  socials?: {
    github?: string
    linkedin?: string
    twitter?: string
  }
}

export interface Project {
  _id: string
  title: string
  slug: {
    current: string
  }
  tagline?: string
  summary?: string
  tech?: string[]
  year?: number
  images?: Array<{
    image: SanityImageObject
    caption?: string
  }>
  links?: {
    liveUrl?: string
    gitUrl?: string
  }
  featured?: boolean
}

export interface Job {
  _id: string
  company: string
  role: string
  startDate: string
  endDate?: string
  location?: string
  bullets?: string[]
  tech?: string[]
  logo?: SanityImageObject
}

export interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  coverImage?: SanityImageObject
  tags?: string[]
  publishedAt: string
  body?: PortableTextBlock[]
  featured?: boolean
}