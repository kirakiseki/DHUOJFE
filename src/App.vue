<script setup>
import Nav from './components/nav.vue';
import Footer from './components/footer.vue';
import Problem from './components/content/problem.vue';
import Tags from './components/sidebar/tags.vue';
import Billboard from './components/sidebar/billboard.vue';
import ProblemInfo from './components/sidebar/probleminfo.vue';
</script>



<template>
  <div class="page-container">
    <el-container class="main-container">
      <el-header class="header">
        <Nav></Nav>
      </el-header>
      <el-main class="main">
        <el-row :gutter="20" class="hidden-md-and-down">
          <el-col :span="19" class="content">
            <Problem id="UVA114514" title="夜に駆ける"></Problem>
          </el-col>
          <el-col :span="5" class="sidebar">
            <Billboard></Billboard>
            <ProblemInfo></ProblemInfo>
            <Tags></Tags>
          </el-col>
        </el-row>
        <el-row class="hidden-lg-and-up">
          <el-col :span="24" class="content">
            <Problem id="UVA114514" title="夜に駆ける"></Problem>
          </el-col>
          <el-col :span="24" class="sidebar">
            <Billboard></Billboard>
            <ProblemInfo></ProblemInfo>
            <Tags></Tags>
          </el-col>
        </el-row>
      </el-main>
      <el-footer class="footer hidden-md-and-down">
        <Footer></Footer>
      </el-footer>
    </el-container>
    <el-backtop :bottom="150" />
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/globalStyle.scss";
@import "@/assets/scss/base.scss";
</style>
