export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '628c04944f42a008b4cd10c9',
                  title: 'Sanity Studio',
                  name: 'vr-v-1-0-studio',
                  apiId: '2150bb65-7cf9-4cda-82a2-64ab2a65fa3c'
                },
                {
                  buildHookId: '628c04945a13ea055ae423df',
                  title: 'Portfolio Website',
                  name: 'vr-v-1-0',
                  apiId: 'fd0f3189-4cbe-44f1-a274-229e3ee22d32'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jstoneseo/vr-v1.0',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://vr-v-1-0.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
