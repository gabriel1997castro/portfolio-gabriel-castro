import { defineType } from 'sanity'

export const job = defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Leave empty if current position',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'bullets',
      title: 'Key Achievements',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of key achievements and responsibilities',
    },
    {
      name: 'tech',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'company',
      subtitle: 'role',
      media: 'logo',
    },
  },
  orderings: [
    {
      title: 'Start Date, New',
      name: 'startDateDesc',
      by: [{ field: 'startDate', direction: 'desc' }],
    },
  ],
})