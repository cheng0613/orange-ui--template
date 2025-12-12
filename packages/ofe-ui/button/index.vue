<template>
  <el-button
    :type="buttonType"
    :size="size"
    :disabled="disabled || loading"
    :loading="loading"
    :round="round"
    :plain="plain"
    :class="buttonClasses"
    @click="handleClick"
  >
    <slot />
  </el-button>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus'
import { computed } from 'vue'

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
  size?: 'small' | 'default' | 'large'
  disabled?: boolean
  loading?: boolean
  round?: boolean
  plain?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  size: 'default',
  disabled: false,
  loading: false,
  round: false,
  plain: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

// 转换类型到ElementPlus的Button类型
const buttonType = computed(() => {
  // ElementPlus不直接支持secondary，使用空字符串表示默认类型
  if (props.type === 'secondary') {
    return ''
  }
  // ElementPlus支持其他所有类型
  return props.type
})

const buttonClasses = computed(() => [
  'o-button',
  {
    'o-button--secondary': props.type === 'secondary',
    'o-button--info': props.type === 'info'
  }
])

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style>
/* OFE Button 特有样式，基于 ElementPlus 扩展 */

/* Secondary 类型样式 - ElementPlus没有secondary，我们自定义 */
.o-button.o-button--secondary {
  --el-button-bg-color: #f4f4f5;
  --el-button-border-color: #dcdfe6;
  --el-button-text-color: #606266;
}

.o-button.o-button--secondary:hover {
  --el-button-hover-bg-color: #ecf5ff;
  --el-button-hover-border-color: #c6e2ff;
  --el-button-hover-text-color: #409eff;
}

.o-button.o-button--secondary:active {
  --el-button-active-bg-color: #d9ecff;
  --el-button-active-border-color: #a3d4ff;
  --el-button-active-text-color: #3a8ee6;
}

/* OFE 特有的尺寸调整 - 覆盖ElementPlus默认样式 */
.o-button.el-button--default {
  padding: 8px 16px;
  font-size: 14px;
}

/* OFE 特有的圆角调整 */
.o-button.el-button.is-round {
  border-radius: 20px;
}

.o-button.o-button--secondary.el-button.is-round {
  border-radius: 20px;
  padding: 8px 23px;
}

/* OFE 特有的微动画效果 */
.o-button {
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.o-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.o-button:active {
  transform: translateY(0);
}

/* 自定义主题色优化 */
.o-button.o-button--primary {
  --el-button-hover-bg-color: #66b1ff;
  --el-button-hover-border-color: #66b1ff;
}

.o-button.o-button--success {
  --el-button-hover-bg-color: #85ce61;
  --el-button-hover-border-color: #85ce61;
}

.o-button.o-button--warning {
  --el-button-hover-bg-color: #ebb563;
  --el-button-hover-border-color: #ebb563;
}

.o-button.o-button--danger {
  --el-button-hover-bg-color: #f78989;
  --el-button-hover-border-color: #f78989;
}

.o-button.o-button--info {
  --el-button-hover-bg-color: #a6a9ad;
  --el-button-hover-border-color: #a6a9ad;
}
</style>