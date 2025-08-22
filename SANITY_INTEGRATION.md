# Sanity CMS Integration

This document explains how the Sanity CMS integration works in this portfolio website.

## Overview

The portfolio is now fully integrated with Sanity CMS, allowing content to be managed through the Sanity Studio interface at `/studio`. All pages dynamically fetch content from Sanity.

## Features Implemented

### ✅ Content Management
- **Site Settings**: Personal info, contact details, bio
- **Projects**: Portfolio projects with images, tech stack, links
- **Jobs**: Work experience with company details, roles, tech
- **Posts**: Blog posts with rich content and tags

### ✅ Pages Integration
- **Home Page** (`/`) - Fetches featured projects, latest posts, site settings
- **Projects Page** (`/projects`) - All projects with filtering by featured
- **Project Detail** (`/projects/[slug]`) - Individual project data with images
- **Blog Page** (`/blog`) - All posts with featured posts section
- **Blog Post** (`/blog/[slug]`) - Individual post with PortableText rendering
- **Experience Page** (`/experience`) - Jobs timeline with company logos

### ✅ Performance Features
- **ISR (Incremental Static Regeneration)**: 60-second revalidation on all pages
- **generateStaticParams**: Pre-generates static pages for all projects and posts
- **Error Handling**: Graceful fallbacks when Sanity is unavailable
- **Image Optimization**: Sanity CDN integration with Next.js Image component

### ✅ Developer Experience
- **Webhook Revalidation**: `/api/revalidate` endpoint for real-time content updates
- **TypeScript Types**: Complete type definitions for all content types
- **GROQ Queries**: Optimized queries for all content fetching

## Setting Up Sanity

1. **Create a Sanity Project**:
   ```bash
   npm install -g @sanity/cli
   sanity init
   ```

2. **Configure Environment Variables**:
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your Sanity project details:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID
   - `NEXT_PUBLIC_SANITY_DATASET`: Usually "production"
   - `SANITY_READ_TOKEN`: API token for reading content
   - `SANITY_WEBHOOK_SECRET`: Secret for webhook authentication

3. **Access the Studio**:
   Visit `/studio` to manage content through the Sanity Studio interface.

## Webhook Setup

To enable real-time content updates:

1. In your Sanity project dashboard, go to "Webhooks"
2. Create a new webhook with:
   - **URL**: `https://your-domain.com/api/revalidate`
   - **Dataset**: production
   - **HTTP method**: POST
   - **HTTP Headers**: `Authorization: Bearer your_webhook_secret_here`
   - **Trigger on**: Create, Update, Delete for all document types

## Content Types

### Site Settings
- Personal information and contact details
- Used in header, footer, and contact forms

### Projects
- Portfolio projects with images and descriptions
- Tech stack tags and project links
- Featured flag for homepage display

### Jobs
- Work experience entries
- Company logos and tech stacks
- Chronological timeline display

### Posts
- Blog posts with rich PortableText content
- Tags for categorization
- Featured flag for homepage display

## Error Handling

All Sanity queries include error handling that:
- Logs warnings to console when Sanity is unavailable
- Returns empty arrays/null for graceful degradation
- Allows the site to build and run without Sanity connection

## Performance

- **ISR**: Pages regenerate every 60 seconds or on-demand via webhooks
- **CDN**: Images served optimized through Sanity CDN
- **Static Generation**: Dynamic routes pre-generated at build time
- **Caching**: Proper Next.js caching strategies implemented

## Development

The integration maintains backward compatibility - the site works with or without Sanity configured, making it perfect for development and production environments.