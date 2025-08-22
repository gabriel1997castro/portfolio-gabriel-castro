import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

// Import your schema documents
import { siteSettings } from './schemas/siteSettings'
import { project } from './schemas/project'
import { job } from './schemas/job'
import { post } from './schemas/post'

export default defineConfig({
  name: 'default',
  title: 'Gabriel Castro Portfolio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content Management')
          .items([
            S.divider(),
            S.documentTypeListItem('siteSettings').title('Site Settings'),
            S.divider(),
            S.documentTypeListItem('post').title('Blog Posts'),
            S.documentTypeListItem('project').title('Projects'),
            S.documentTypeListItem('job').title('Work Experience'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: [siteSettings, post, project, job],
  },
})