const siteMetadata = {
  title: 'Guilherme Vieira',
  author: 'Guilherme Vieira',
  headerTitle: 'guilherme',
  description: 'Software Developer at Cast Group',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://guilhermevgl.github.io/Portfolio/',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'guilhermeharfy@gmail.com',
  github: 'https://github.com/GuilhermeVgl',
  linkedin: 'https://www.linkedin.com/in/guilherme-vieira-de-freitas/',
  google: 'mailto:guilhermeharfy@gmail.com',
  whatsapp: 'https://api.whatsapp.com/send?phone=5567984158359&text=Hello%20Guilherme!%0AId%20Like%20to%20talk%20about...',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
