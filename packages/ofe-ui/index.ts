// OFE UI Components
import { OButton } from './button'
import { withInstall } from './utils'

// 单个组件导出
export { OButton, withInstall }

// 默认导出包含所有组件的对象
export default {
  OButton,
  install(app: any) {
    app.use(OButton)
  }
}