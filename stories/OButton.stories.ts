import type { Meta, StoryObj } from '@storybook/vue3'
import { OButton } from '@ofe/ui-vue'

const meta = {
  title: 'Components/OButton',
  component: OButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info']
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large']
    },
    disabled: {
      control: { type: 'boolean' }
    },
    loading: {
      control: { type: 'boolean' }
    },
    round: {
      control: { type: 'boolean' }
    },
    plain: {
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<typeof OButton>

export default meta
type Story = StoryObj<typeof meta>

// 默认按钮
export const Default: Story = {
  args: {
    type: 'primary'
  }
}

// 不同类型的按钮
export const Types: Story = {
  render: () => ({
    components: { OButton },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <OButton type="primary">主要按钮</OButton>
        <OButton type="secondary">次要按钮</OButton>
        <OButton type="success">成功按钮</OButton>
        <OButton type="warning">警告按钮</OButton>
        <OButton type="danger">危险按钮</OButton>
        <OButton type="info">信息按钮</OButton>
      </div>
    `
  })
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { OButton },
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <OButton size="small">小型按钮</OButton>
        <OButton size="default">默认按钮</OButton>
        <OButton size="large">大型按钮</OButton>
      </div>
    `
  })
}

// 圆角按钮
export const Round: Story = {
  render: () => ({
    components: { OButton },
    template: `
      <div style="display: flex; gap: 12px;">
        <OButton round>默认圆角</OButton>
        <OButton type="primary" round>主要圆角</OButton>
        <OButton type="success" round>成功圆角</OButton>
      </div>
    `
  })
}

// 朴素按钮
export const Plain: Story = {
  render: () => ({
    components: { OButton },
    template: `
      <div style="display: flex; gap: 12px;">
        <OButton plain>朴素按钮</OButton>
        <OButton type="primary" plain>主要朴素</OButton>
        <OButton type="success" plain>成功朴素</OButton>
      </div>
    `
  })
}

// 状态按钮
export const States: Story = {
  render: () => ({
    components: { OButton },
    template: `
      <div style="display: flex; gap: 12px;">
        <OButton disabled>禁用按钮</OButton>
        <OButton type="primary" disabled>禁用主要</OButton>
        <OButton loading>加载中...</OButton>
        <OButton type="primary" loading>主要加载中</OButton>
      </div>
    `
  })
}

// 交互示例
export const Interactive: Story = {
  args: {
    type: 'primary'
  },
  render: args => ({
    components: { OButton },
    setup() {
      const handleClick = () => {
        alert('按钮被点击了！')
      }
      return { args, handleClick }
    },
    template: `
      <OButton v-bind="args" @click="handleClick">
        点击我
      </OButton>
    `
  })
}
