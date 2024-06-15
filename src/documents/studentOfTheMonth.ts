import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'studentOfTheMonth',
  title: 'Student of The Month',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Student Name',
      type: 'string',
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'about',
      title: 'About Student',
      type: 'blockContent',
    }),
  ],
})
