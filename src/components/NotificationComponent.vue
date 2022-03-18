<template>
  <el-button plain @click="open1"> A success ElNotification component test </el-button>
</template>

<script setup>
import { h } from 'vue'
import { ElNotification } from 'element-plus'

const open1 = () => {
  ElNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  })
}
</script>