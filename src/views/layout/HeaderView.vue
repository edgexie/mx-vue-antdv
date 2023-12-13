<template>
  <a-layout-header class="flex align-center" style="padding: 0; background-color: white">
    <menu-unfold-outlined
      v-if="collapsed"
      class="flex items-center trigger"
      @click="() => (collapsed = !collapsed)"
    />
    <menu-fold-outlined
      v-else
      class="flex items-center trigger"
      @click="() => (collapsed = !collapsed)"
    />
    <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
  </a-layout-header>
</template>
<script lang="ts" setup>
import { ref, computed, h } from 'vue'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import { MenuProps } from 'ant-design-vue'
import { routes } from '@/router'
import { useRoute } from 'vue-router'
import type { ItemType } from 'ant-design-vue'
const route = useRoute()
const props = defineProps<{
  collapsed: Boolean
}>()
const emit = defineEmits(['update:collapsed']) // 获取 emit 函数

const collapsed = computed({
  get() {
    return props.collapsed
  },
  set(value) {
    emit('update:collapsed', value)
  }
})
const current = ref<string[]>([route.matched[1].name as string])

const items = ref<MenuProps['items']>(
  routes
    .filter((e) => e.name === 'Home')
    .map((e) => {
      const children = e.children
      return children.map((child) => {
        return {
          key: child.name,
          title: child.meta.title,
          label: h('a', { href: '/' + child.path }, child.meta.title as string)
        } as ItemType
      })
    })
    .flat()
)
/* const items = ref<MenuProps['items']>([
  {
    key: 'mail',
    icon: () => h(MailOutlined),
    label: 'Navigation One',
    title: 'Navigation One'
  },
  {
    key: 'app',
    icon: () => h(AppstoreOutlined),
    label: 'Navigation Two',
    title: 'Navigation Two'
  },
  {
    key: 'sub1',
    icon: () => h(SettingOutlined),
    label: 'Navigation Three - Submenu',
    title: 'Navigation Three - Submenu',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1'
          },
          {
            label: 'Option 2',
            key: 'setting:2'
          }
        ]
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3'
          },
          {
            label: 'Option 4',
            key: 'setting:4'
          }
        ]
      }
    ]
  },
  {
    key: 'alipay',
    label: h('a', { href: 'https://antdv.com', target: '_blank' }, 'Navigation Four - Link'),
    title: 'Navigation Four - Link'
  }
]) */
</script>
<style>
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
</style>
