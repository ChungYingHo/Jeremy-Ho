import type {Config} from '@docusaurus/types'
import presets from './config/presets'
import themeConfig from './config/themeConfig'
import plugins from './config/plugins'

const config: Config = {
  // Metadata for the website
  title: 'Jeremy Ho',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  url: 'https://jeremy-ho.com', // Set the production url of your site here
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: '', // Usually your GitHub org/user name.
  projectName: '', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // i18n config
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  // Preset features, theme UI and plugins settings
  presets,
  themeConfig,
  plugins,

  // setup mermaid and search plugin
  markdown: {
    mermaid: true,
  },
  themes: [
    "@docusaurus/theme-mermaid",
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
}

export default config
