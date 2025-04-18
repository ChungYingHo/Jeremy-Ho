import type * as Preset from "@docusaurus/preset-classic"
import { themes as prismThemes } from "prism-react-renderer"

const themeConfig = {
  // Replace with your project's social card
  image: 'img/docusaurus-social-card.jpg',
  navbar: {
    title: 'CodeFictionist',
    logo: {
      alt: 'CodeFictionist-Logo',
      src: 'img/logo.png',
    },
    items: [
      {
        type: 'docSidebar',
        sidebarId: 'tutorialSidebar',
        position: 'left',
        label: 'Tutorial',
      },
      {to: '/blog', label: 'Blog', position: 'left'},
      {
        href: 'https://github.com/facebook/docusaurus',
        label: 'GitHub',
        position: 'right',
      },
    ],
  },
  footer: {
    style: 'dark',
    links: [
      {
        title: 'Docs',
        items: [
          {
            label: 'Tutorial',
            to: '/docs/intro',
          },
        ],
      },
      {
        title: 'Community',
        items: [
          {
            label: 'Stack Overflow',
            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          },
          {
            label: 'Discord',
            href: 'https://discordapp.com/invite/docusaurus',
          },
          {
            label: 'X',
            href: 'https://x.com/docusaurus',
          },
        ],
      },
      {
        title: 'More',
        items: [
          {
            label: 'Blog',
            to: '/blog',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/facebook/docusaurus',
          },
        ],
      },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
  },
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
  },
} satisfies Preset.ThemeConfig

export default themeConfig