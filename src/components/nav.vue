<template>
    <el-row class="hidden-sm-and-down">
        <el-col :span="2" class="banner banner-logo hidden-md-and-down"></el-col>
        <el-col :span="22" class="banner hidden-md-and-down">
            <div class="banner-title-container">
                <el-row>
                    <span class="banner-title">DHU Online Judge</span>
                </el-row>
                <el-row>
                    <p class="banner-subtitle">Developed by ACM Training Team of Donghua University</p>
                </el-row>
            </div>
        </el-col>
    </el-row>
    <el-affix position="top">
        <el-row>
            <el-col :span="24">
                <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                >
                    <p class="menu-title">DHU OJ</p>
                    <el-menu-item index="1">Home</el-menu-item>
                    <el-sub-menu index="2">
                        <template #title>Problem Set</template>
                        <el-menu-item index="2-1">item one</el-menu-item>
                        <el-menu-item index="2-2">item two</el-menu-item>
                        <el-menu-item index="2-3">item three</el-menu-item>
                        <el-sub-menu index="2-4">
                            <template #title>item four</template>
                            <el-menu-item index="2-4-1">item one</el-menu-item>
                            <el-menu-item index="2-4-2">item two</el-menu-item>
                            <el-menu-item index="2-4-3">item three</el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>
                    <el-menu-item index="3">Contest</el-menu-item>
                    <el-menu-item index="4">Blogs</el-menu-item>
                    <el-menu-item index="5">Info</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </el-affix>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/nav.scss";
</style>