import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'header', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              description: 'Important for SEO and accessibility.',
            },
            {
              name: 'customClass',
              type: 'string',
              title: 'Custom CSS Class',
              description: 'Add a custom CSS class for styling purposes.',
            },
          ]
        }
      ],
      description: 'Optional images used in this blog post. Use placeholders like [[image:0]] in the body text to insert them.'
    }),
    defineField({
      name: 'metaTags',
      title: 'Meta Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'metaTag' }] }],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
    }),
  ],
})