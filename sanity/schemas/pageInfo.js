import {defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'Page Info',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type:'string',
    },
    {
      name: 'role',
      title: 'Role',
      type:'string',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'backgroundInformation',
      title: 'Background Information',
      type: 'text',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type:'string',
    },
    {
      name: 'email',
      title: 'Email',
      type:'string',
    },
    {
      name: 'address',
      title: 'Address',
      type:'string',
    },
    {
      name: 'socials',
      title: 'Socials',
      type:'array',
      of: [
        {
          type: 'reference', to: {
            type: 'social',
          }
        }
      ]
    }
  ],
})
