<script setup>
import Nav from './components/nav.vue';
import Footer from './components/footer.vue';
import Main from './components/main.vue';
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
            <Main title="hidden-md-and-down 1"></Main>
          </el-col>
          <el-col :span="5" class="sidebar">
              <Tags></Tags>
              <Tags></Tags>
          </el-col>
        </el-row>
        <el-row class="hidden-lg-and-up">
          <el-col :span="24">
            <Main title="hidden-lg-and-up 1"></Main>
          </el-col>
        </el-row>
        <el-row class="hidden-lg-and-up">
          <el-col :span="24">
            <Main title="hidden-lg-and-up 2"></Main>
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