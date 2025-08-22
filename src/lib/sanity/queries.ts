// Site Settings
export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  name,
  title,
  bio,
  location,
  email,
  phone,
  avatar,
  socials
}`

// Projects
export const projectsQuery = `*[_type == "project"] | order(year desc) {
  _id,
  title,
  slug,
  tagline,
  summary,
  tech,
  year,
  images,
  links,
  featured
}`

export const featuredProjectsQuery = `*[_type == "project" && featured == true] | order(year desc) {
  _id,
  title,
  slug,
  tagline,
  summary,
  tech,
  year,
  images,
  links
}`

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  tagline,
  summary,
  tech,
  year,
  images,
  links
}`

// Jobs
export const jobsQuery = `*[_type == "job"] | order(startDate desc) {
  _id,
  company,
  role,
  startDate,
  endDate,
  location,
  bullets,
  tech,
  logo
}`

// Posts
export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  tags,
  publishedAt,
  featured
}`

export const featuredPostsQuery = `*[_type == "post" && featured == true] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  tags,
  publishedAt
}`

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  tags,
  publishedAt,
  body
}`

export const postSlugsQuery = `*[_type == "post"] {
  slug
}`

export const projectSlugsQuery = `*[_type == "project"] {
  slug
}`