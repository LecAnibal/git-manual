const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Git Manual',
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
    ],
    sidebar: {

      '/': [
        {
          title: 'Introducción',
          collapsable: false,
          children: [
            '',
          ]
        },
        {
          title: 'Configuración',
          collapsable: true,
          children: [
            '/Configuracion/INIT',

          ]
        },
        {
          title: 'Comandos',
          collapsable: true,
          children: [
            '/Comandos/',
            '/Comandos/Avanzados'
           ]
        },
        {
          title: 'Recomendaciones',
          collapsable: true,
          children: [
            '/Recomendaciones/Commit',
            '/Recomendaciones/PullRequest',
            '/Recomendaciones/Flow'
          ]
        },
        {
          title: 'Referencias',
          collapsable: false,
          children: [
            '/Referencias/',
          ]
        }
      ]
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
