# OFE UI 项目结构

## 📁 项目概览

OFE UI 采用了类似 Element Plus 的 Monorepo 项目结构，支持 TypeScript、Vue 3，并集成了完整的开发工具链。

```
ofe-ui/
├── .husky/                     # Git hooks 配置
│   ├── pre-commit              # 提交前检查
│   ├── commit-msg             # 提交信息校验
│   └── _/                    # husky 工具脚本
├── docs/                       # 项目文档
├── internal/                   # 内部工具和脚本
├── packages/                   # 核心包目录
│   └── ofe-ui/              # 组件库主包
│       ├── button/           # OButton 组件
│       │   ├── index.ts    # 组件导出
│       │   └── index.vue    # 组件实现
│       ├── utils/            # 工具函数
│       │   ├── index.ts    # 工具导出
│       │   └── shims-vue.d.ts
│       ├── index.ts          # 主包入口
│       ├── package.json
│       ├── vite.config.ts    # 构建配置
│       └── dist/            # 构建输出
├── play/                       # 开发环境演示/Playground
│   ├── src/
│   │   ├── App.vue
│   │   ├── main.ts
│   │   └── shims-vue.d.ts
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── scripts/                    # 构建和开发脚本
│   ├── build.ts             # 构建脚本
│   └── dev.ts               # 开发脚本
├── typings/                    # TypeScript 类型定义
├── .gitignore                  # Git 忽略文件
├── .prettierignore             # Prettier 忽略文件
├── .prettierrc                 # Prettier 配置
├── commitlint.config.mjs        # Commit 消息校验配置
├── eslint.config.mjs            # ESLint 配置
├── package.json                # 项目依赖和脚本
├── pnpm-workspace.yaml         # pnpm 工作区配置
├── tsconfig.base.json          # TypeScript 基础配置
└── tsconfig.json               # TypeScript 主配置
```

## 📦 包结构说明

### @ofe/ui
- **作用**: 组件库主包，包含所有 UI 组件的实现和工具函数
- **输出**: ES Module 和 UMD 格式，支持 TypeScript 类型声明
- **依赖**: ElementPlus 作为底层组件库
- **结构**: 统一包管理，简化项目结构

### @ofe/play
- **作用**: 开发环境演示和测试
- **技术栈**: Vite + Vue 3 + TypeScript

## 🛠️ 开发工具链

- **包管理**: pnpm workspace
- **构建工具**: Vite
- **代码规范**: ESLint + Prettier + commitlint
- **Git hooks**: husky + lint-staged
- **TypeScript**: 多配置文件支持不同场景

## 🚀 使用命令

```bash
# 开发
pnpm dev              # 启动开发服务器
pnpm build            # 构建组件库
pnpm lint              # 代码检查和自动修复
pnpm format            # 代码格式化

# 代码检查
pnpm lint:check        # 仅检查不修复
pnpm format:check      # 格式化检查
pnpm type-check       # TypeScript 类型检查
```

## 📝 提交规范

遵循 Conventional Commits 规范：

- `feat`: 新功能
- `fix`: 修复
- `docs`: 文档变更
- `style`: 代码格式
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 测试
- `chore`: 构建过程或辅助工具的变动
- `ci`: CI配置
- `build`: 构建系统
- `revert`: 回滚

## 🔧 Git Hooks

- **pre-commit**: 运行 lint-staged，对暂存文件进行检查和格式化
- **commit-msg**: 使用 commitlint 检查提交信息格式