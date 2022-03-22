<script setup>
import Nav from './components/nav.vue';
</script>

<template>
  <el-container>
    <el-header class="header">
      <Nav></Nav>
    </el-header>
    <el-main class="main">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<style lang="scss">
@import "@/assets/scss/globalStyle.scss";
@import "@/assets/scss/base.scss"
</style>