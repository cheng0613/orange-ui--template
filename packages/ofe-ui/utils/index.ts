import type { App, Component } from 'vue'

// 工具函数
export const withInstall = <T extends Component>(component: T) => {
  (component as any).install = (app: App) => {
    app.component((component as any).__name || 'OfeComponent', component)
  }
  return component as T & { install: (app: App) => void }
}