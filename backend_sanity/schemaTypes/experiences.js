export default {
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    {
      name: 'serialNumber',
      title: 'Serial Number',
      type: 'number',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'works',
      title: 'Works',
      type: 'array',
      of: [{type: 'workExperience'}],
    },
    {name: 'companyLogo', title: 'Company Logo', type: 'image'},
  ],
}
