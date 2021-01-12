const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'HMV Soluciones',
  base: "/hmvsolucionesdocs/",  
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',    
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Procesos',
        ariaLabel: 'Procesos',
        items: [
          { text: 'Ventas', link: '/guide/' },
          { text: 'Software a la Medida', link: '/guide/' },
          { text: "PWA's", link: '/guide/' },
        ]
      },
      {
        text: 'Motivaciones',
        link: '/motivaciones/',
      },
      {
        text: 'Blog',
        link: '/blog/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      '/motivaciones/': [
        {
          title: 'Motivaciones',
          collapsable: true,
          children: [
            '',
            'jack-ma',
            'elon-musk',
          ]
        }
      ],
      '/blog/': [
        {
          title: 'Blog',
          collapsable: false,
          children: [
            '',
            'article1',
            'article2',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
