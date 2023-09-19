import {StringRule} from 'sanity'

export default {
  title: 'Hero',
  name: 'hero',
  type: 'object',
  fields: [
    {
      title: 'Headline',
      name: 'headline',
      type: 'string',
    },
    {
      title: 'Sub headline',
      name: 'subheadline',
      type: 'string',
    },
    {
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          name: 'stat',
          title: 'Stat',
          type: 'object',
          fields: [
            {
              name: 'number',
              title: 'Number',
              type: 'string',
              validation: (Rule: StringRule) => Rule.required(),
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule: StringRule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
}
