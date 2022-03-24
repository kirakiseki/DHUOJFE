<script setup>
import Nav from './components/nav.vue';
import Footer from './components/footer.vue';
import Problem from './components/content/problem.vue';
import Tags from './components/sidebar/tags.vue';
</script>

<template>
  <div class="page-container">
    <el-container class="main-container">
      <el-header class="header">
        <Nav></Nav>
      </el-header>
      <el-main class="main">
        <el-row :gutter="20" class="hidden-md-and-down">
          <el-col :span="19">
            <Problem id="UVA114514" title="夜に駆ける"></Problem>
          </el-col>
          <el-col :span="5" class="sidebar">
            <Tags></Tags>
            <Tags></Tags>
            <Tags></Tags>
            <Tags></Tags>
          </el-col>
        </el-row>
        <el-row class="hidden-lg-and-up">
          <el-col :span="24" class="sidebar">
            <Main title="hidden-lg-and-up 1"></Main>
            <Tags></Tags>
            <Tags></Tags>
            <Tags></Tags>
            <Tags></Tags>
          </el-col>
        </el-row>
      </el-main>
      <el-footer class="footer">
        <Footer></Footer>
      </el-footer>
    </el-container>
    <el-backtop />
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/globalStyle.scss";
@import "@/assets/scss/base.scss";
</style>