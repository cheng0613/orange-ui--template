# OFE UI

一个基于 Vue 3 + TypeScript + Vite 的现代化组件库，使用 Monorepo 架构管理。

## 特性

- 🚀 Vue 3 Composition API
- 📦 TypeScript 支持
- ⚡️ Vite 构建
- 🎨 现代化设计
- 📦 Monorepo 架构
- 🔧 按需引入

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **TypeScript** - JavaScript 的超集，提供静态类型检查
- **Vite** - 下一代前端构建工具
- **pnpm** - 快速、节省磁盘空间的包管理器

## 项目结构

```
ofe-ui/
├── packages/
│   └── ofe-ui/           # 组件库核心
│       ├── src/
│       │   ├── components/   # 组件源码
│       │   ├── index.ts      # 入口文件
│       │   └── install.ts    # 安装文件
│       ├── package.json
│       ├── tsconfig.json
│       └── vite.config.ts
├── playground/              # 示例应用
│   ├── src/
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── package.json
├── pnpm-workspace.yaml
├── tsconfig.json
└── README.md
```

## 安装

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建组件库
pnpm build
```

## 使用

### 全局安装

```typescript
import { createApp } from 'vue'
import OfeUI from '@ofe/ui'

const app = createApp(App)
app.use(OfeUI)
```

### 按需引入

```typescript
import { OButton } from '@ofe/ui'
```

### 组件示例

#### OButton 按钮组件

```vue
<template>
  <div>
    <!-- 基础用法 -->
    <o-button @click="handleClick">默认按钮</o-button>
    
    <!-- 不同类型 -->
    <o-button type="primary">主要按钮</o-button>
    <o-button type="success">成功按钮</o-button>
    <o-button type="warning">警告按钮</o-button>
    <o-button type="danger">危险按钮</o-button>
    
    <!-- 不同尺寸 -->
    <o-button size="small">小型</o-button>
    <o-button size="medium">中型</o-button>
    <o-button size="large">大型</o-button>
    
    <!-- 圆角 -->
    <o-button round>圆角按钮</o-button>
    
    <!-- 朴素 -->
    <o-button plain>朴素按钮</o-button>
    
    <!-- 状态 -->
    <o-button disabled>禁用</o-button>
    <o-button :loading="loading">加载中</o-button>
  </div>
</template>
```

#### API

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| type | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'primary'` | 按钮类型 |
| size | `'small' \| 'medium' \| 'large'` | `'medium'` | 按钮尺寸 |
| disabled | `boolean` | `false` | 是否禁用 |
| loading | `boolean` | `false` | 是否加载中 |
| round | `boolean` | `false` | 是否为圆角按钮 |
| plain | `boolean` | `false` | 是否为朴素按钮 |

#### 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击按钮时触发 | `(event: MouseEvent) => void` |

## 开发

```bash
# 安装依赖
pnpm install

# 启动示例应用
pnpm dev

# 构建组件库
pnpm build

# 类型检查
pnpm type-check

# 代码检查
pnpm lint
```

## License

MIT// 测试cz-git
