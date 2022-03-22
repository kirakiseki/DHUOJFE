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