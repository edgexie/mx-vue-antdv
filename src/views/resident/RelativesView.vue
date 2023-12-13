<template>
  <a-row>
    <a-col :span="24">
      <a-button type="primary">新增</a-button>
    </a-col>
  </a-row>
  <a-table :columns="columns" :data-source="data">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'action'">
        <a-button type="default" v-p:u>修改</a-button>
        <a-divider type="vertical"></a-divider>
        <a-button danger v-p:d>删除</a-button>
      </template>
    </template>
  </a-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '身高(米)',
    dataIndex: 'stature',
    key: 'stature'
  },
  {
    title: '操作',
    key: 'action'
  }
]
const data = ref([
  {
    key: '1',
    name: '谢沐熺',
    age: 6,
    stature: 1.2
  }
])
setTimeout(() => {
  data.value.push({
    key: '2',
    name: '李二',
    age: 26,
    stature: 1.2
  })
}, 1000)
</script>
