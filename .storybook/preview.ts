import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 全局 Vue 配置
setup(app => {
  app.use(ElementPlus)
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
