<template>
  <div class="app">
    <header class="header">
      <h1>OFE UI 组件库</h1>
      <p class="subtitle">基于 Vue 3 + TypeScript + Vite 的现代化组件库</p>
    </header>

    <main class="main">
      <section class="demo-section">
        <h2>OButton 按钮组件</h2>
        
        <div class="demo-group">
          <h3>基础用法</h3>
          <div class="button-group">
            <o-button @click="handleClick">默认按钮</o-button>
            <o-button type="primary">主要按钮</o-button>
            <o-button type="secondary">次要按钮</o-button>
            <o-button type="success">成功按钮</o-button>
            <o-button type="warning">警告按钮</o-button>
            <o-button type="danger">危险按钮</o-button>
            <o-button type="info">信息按钮</o-button>
          </div>
        </div>

        <div class="demo-group">
          <h3>不同尺寸</h3>
          <div class="button-group">
            <o-button size="small">小型按钮</o-button>
            <o-button size="default">默认按钮</o-button>
            <o-button size="large">大型按钮</o-button>
          </div>
        </div>

        <div class="demo-group">
          <h3>圆角按钮</h3>
          <div class="button-group">
            <o-button round>默认圆角</o-button>
            <o-button type="primary" round>主要圆角</o-button>
            <o-button type="success" round>成功圆角</o-button>
          </div>
        </div>

        <div class="demo-group">
          <h3>朴素按钮</h3>
          <div class="button-group">
            <o-button plain>朴素按钮</o-button>
            <o-button type="primary" plain>主要朴素</o-button>
            <o-button type="success" plain>成功朴素</o-button>
          </div>
        </div>

        <div class="demo-group">
          <h3>状态</h3>
          <div class="button-group">
            <o-button disabled>禁用按钮</o-button>
            <o-button type="primary" disabled>禁用主要</o-button>
            <o-button :loading="loading" @click="toggleLoading">
              {{ loading ? '加载中...' : '点击加载' }}
            </o-button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)

const handleClick = () => {
  console.log('按钮被点击了！')
}

const toggleLoading = async () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<style scoped>
.app {
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header {
  text-align: center;
  padding: 3rem 1rem 2rem;
  color: white;
}

.header h1 {
  font-size: 2.5rem;
  margin: 0;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.subtitle {
  font-size: 1.1rem;
  margin: 0.5rem 0 0;
  opacity: 0.9;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem 3rem;
}

.demo-section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.demo-section h2 {
  color: #2c3e50;
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e1e8ed;
}

.demo-group {
  margin-bottom: 2rem;
}

.demo-group h3 {
  color: #34495e;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }
  
  .demo-section {
    padding: 1.5rem;
  }
  
  .button-group {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>