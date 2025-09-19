const config: Config = {
  title: 'João Pedro Vilares',
  tagline: '',
  favicon: 'img/favicon.ico',

  // URL pública do site
  url: 'https://joaoptvilares.github.io',
  // Como é um user site, o baseUrl é /
  baseUrl: '/',

  // Configuração GitHub Pages
  organizationName: 'JoaoPTVilares', // o teu username no GitHub
  projectName: 'JoaoPTVilares.github.io', // o nome do repositório
  deploymentBranch: 'main', // ramo onde o deploy será feito (por default é gh-pages)

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/JoaoPTVilares/JoaoPTVilares.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} João Pedro Vilares`,
    },
  },
};

export default config;
