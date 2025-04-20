import type * as Preset from "@docusaurus/preset-classic"
import { themes as prismThemes } from "prism-react-renderer"

const themeConfig = {
  // Replace with your project's social card
  image: 'img/social-card.png',
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
        title: 'Site Navigation',
        items: [
          {
            label: '筆記',
            to: '/docs/notes',
          },
          {
            label: '系列',
            to: '/docs/series',
          },
          {
            label: 'Blog',
            to: '/blog',
          }
        ],
      },
      {
        title: 'Community',
        items: [
          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/chung-ying-ho',
          },
          {
            label: 'iThome',
            href: 'https://ithelp.ithome.com.tw/users/20157439',
          }
        ],
      },
      {
        title: 'More',
        items: [
          {
            label: 'GitHub',
            href: 'https://github.com/ChungYingHo',
          },
          {
            label: 'npm',
            href: 'https://www.npmjs.com/~ag_jeremy',
          },
        ],
      },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} Jeremy Ho. Built with Docusaurus.`,
  },
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
    additionalLanguages: ['csharp', 'dart', 'powershell', 'scss']
  },
} satisfies Preset.ThemeConfig

export default themeConfig