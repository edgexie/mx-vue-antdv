<template>
  <a-config-provider
    :theme="{
      algorithm: theme.defaultAlgorithm,
      token: { colorPrimaryBg: '#e6f7ff' }
    }"
  >
    <RouterView />
  </a-config-provider>
</template>
<script setup lang="ts">
import { theme } from 'ant-design-vue'
</script>
