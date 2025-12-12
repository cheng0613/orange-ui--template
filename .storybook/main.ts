import type { StorybookConfig } from '@storybook/vue3-vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  viteFinal: async config => {
    // 添加路径别名
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(__dirname, '../'),
      '@ofe/ui-vue': resolve(__dirname, '../packages/ofe-ui'),
      'element-plus': resolve(
        __dirname,
        '../packages/ofe-ui/node_modules/element-plus'
      )
    }

    return config
  }
}

export default config
