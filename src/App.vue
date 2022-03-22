<script setup>
import Nav from './components/nav.vue';
import Footer from './components/footer.vue';
import Main from './components/main.vue';
</script>

<template>
  <el-container>
    <el-header class="header">
      <Nav></Nav>
    </el-header>
    <el-main class="main">
      <Main></Main>
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