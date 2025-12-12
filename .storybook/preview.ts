import type { Preview } from '@storybook/vue3-vite'
import 'element-plus/dist/index.css'
import '../packages/ofe-ui/dist/style.css'

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
