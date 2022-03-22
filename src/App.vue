<script setup>
import Nav from './components/nav.vue';
import Footer from './components/footer.vue';
</script>

<template>
  <el-container>
    <el-header class="header">
      <Nav></Nav>
    </el-header>
    <el-main class="main">
      <el-skeleton :rows="15" />
    </el-main>
    <el-footer>
      <p>Footer Area</p>
      <Footer></Footer>
    </el-footer>
  </el-container>
  <el-backtop />
</template>

<style lang="scss">
@import "@/assets/scss/globalStyle.scss";
@import "@/assets/scss/base.scss";
</style>