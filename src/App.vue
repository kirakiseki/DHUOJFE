<script setup>
import Nav from './components/nav.vue';
</script>

<template>
  <el-container>
    <el-header class="header">
      <Nav></Nav>
    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<style lang="scss">
@import "@/assets/scss/globalStyle.scss";
@import "@/assets/scss/base.scss"
</style>