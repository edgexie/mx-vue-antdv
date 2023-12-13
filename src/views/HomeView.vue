<template>
  <a-layout style="height: 100vh">
    <SiderView v-model:collapsed="collapsed"></SiderView>
    <a-layout>
      <HeaderView v-model:collapsed="collapsed"></HeaderView>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import HeaderView from '@/views/layout/HeaderView.vue'
import SiderView from './layout/SiderView.vue'
const collapsed = ref<boolean>(false)
</script>
<style scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
