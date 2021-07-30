export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '61041367b2706200b3742376',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-eft3nnuq',
                  apiId: '3ec6a4a7-d3f7-43e6-898e-4e5293a481d2'
                },
                {
                  buildHookId: '610413674b4cf76fc7573cc1',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-bfbxsn3e',
                  apiId: 'f7e7b08f-631a-405a-bd02-6b31fee72947'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/julzmon/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-bfbxsn3e.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
