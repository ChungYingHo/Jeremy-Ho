import type * as Preset from "@docusaurus/preset-classic"
import { PresetConfig } from "@docusaurus/types"

const presets: PresetConfig[] = [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogSidebarTitle: "最新文章",
          blogSidebarCount: 10,
          blogDescription: "非程式相關的日常生活雜談"
        },
        theme: {
          customCss: './src/css/custom.scss',
        },
        gtag: {
          trackingID: 'G-X57D2M0BZX',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ]

export default presets