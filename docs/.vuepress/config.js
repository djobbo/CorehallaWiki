module.exports = {
  title: 'Corehalla Wiki',
  description: 'Brawlhalla Community Wiki',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Corehalla', link: 'http://corehalla.com' }
    ],
    sidebar: 'auto',
    smoothScroll: true,
    searchPlaceholder: 'Search Wiki...',
    searchMaxSuggestions: 4
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@legend': 'assets/images/icons/legends',
        '@weapon': 'assets/images/icons/weapons'
      }
    }
  }
}