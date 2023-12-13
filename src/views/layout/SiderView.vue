<template>
  <a-layout-sider v-model:collapsed="_collased" :trigger="null" collapsible>
    <div class="logo">mylogo</div>
    <MenuView :menus="menus"></MenuView>
  </a-layout-sider>
</template>
<script setup lang="ts">
import { ref, defineProps, computed } from 'vue'

import { routes } from '@/router'
import { useRoute } from 'vue-router'
import MenuView from './MenuView.vue'
const route = useRoute()
console.log('this route is:', route)

const menus = routes
  .filter((e) => e.children && e.children.find((e) => e.name === route.matched[1].name))[0]
  .children.filter((e) => e.name === route.matched[1].name)

const props = defineProps<{
  collapsed: Boolean
}>()
const _collased = computed(() => props.collapsed)
</script>

<style scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
</style>
