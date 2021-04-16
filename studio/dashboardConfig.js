export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60796facbd4239ea75432ef7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kfmu1vh8',
                  apiId: 'f2c2a240-44bf-4a99-b04a-fcebc8d8785e'
                },
                {
                  buildHookId: '60796faca5f2a0dc79f528fe',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tm4oxs5t',
                  apiId: '028cf680-8e0e-447b-bf39-c7e735d9695c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wentura/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tm4oxs5t.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
