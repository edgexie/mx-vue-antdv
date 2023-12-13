<template>
  <a-menu
    theme="dark"
    mode="inline"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
  >
    <template v-for="menu in menus" :key="menu.name">
      <template v-if="menu.children">
        <a-sub-menu :key="menu.name">
          <template #title>
            <component :is="menu.meta.icon"></component>
            <span>{{ menu.meta.title as string }}</span>
          </template>
          <MenuView :menus="menu.children"></MenuView>
        </a-sub-menu>
      </template>
      <a-menu-item :key="menu.name" v-else>
        <RouterLink :to="{ name: menu.name }">{{ menu.meta.title }}</RouterLink>
      </a-menu-item>
    </template>
  </a-menu>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { type RouteRecordRaw, useRoute } from 'vue-router'
const route = useRoute()
const selectedKeys = ref([route.name])
const keys = route.matched.map((e) => e.name)
const openKeys = ref(keys)
const props = defineProps<{
  menus: RouteRecordRaw[]
}>()
watch(
  () => route.name,
  (newVal) => {
    selectedKeys.value = [newVal]
    console.log(newVal)
  }
)
const { menus } = props
</script>
