import type {Config} from '@docusaurus/types'
import presets from './config/preset'
import themeConfig from './config/theme'
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
  plugins
}

export default config
