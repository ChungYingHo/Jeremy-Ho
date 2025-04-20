import type * as Preset from "@docusaurus/preset-classic"
import { themes as prismThemes } from "prism-react-renderer"

const themeConfig = {
  // Replace with your project's social card
  image: 'img/docusaurus-social-card.jpg',
  docs: {
    sidebar: {
      autoCollapseCategories: true
    },
  },
  navbar: {
    title: 'Jeremy Ho',
    logo: {
      alt: 'My Site Logo',
      src: 'img/logo.png',
    },
    items: [
      {
        type: 'docSidebar',
        sidebarId: 'notes',
        position: 'left',
        label: '筆記',
      },
      {
        type: 'docSidebar',
        sidebarId: 'series',
        position: 'left',
        label: '系列',
      },
      {to: '/blog', label: 'Blog', position: 'left'},
      {
        href: "https://github.com/ChungYingHo",
        title: "GitHub",
        className: "header-github-link",
        "aria-label": "GitHub repository",
        position: "right",
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
    additionalLanguages: ['csharp', 'dart', 'powershell', 'scss']
  },
} satisfies Preset.ThemeConfig

export default themeConfig