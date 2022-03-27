<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>
                    <font-awesome-icon class="icon icon-sidebar" :icon="['far', 'message']" />Billboard
                </span>
                <el-button class="button" type="text">History Messages</el-button>
            </div>
        </template>
        <div class="billboard-container">
            眼镜蛇（震声）
            <br />一旦接受了自己的软弱🎶那我就是 无敌的🎵
            <br />发生什么事了🔉发生什么事了🔉发生什么事了🔉发生什么事了🔉发生什么事了🔉发生什么事了🔉
            <br />变身！！🎶
            <br />发生什么事了🔉发生什么事了🔉
            <br />释放自我（字正腔圆）🔊
            <br />哼啊啊啊啊啊啊啊啊🎶
            <br />🎤🎶走→我→的↗路↑↑🎶
            <br />🎶假↓面↑骑↑士↓～～～🎵
            <br />🎶贞→贞→贞→贞↗德↘↗🎶
            <br />
        </div>
        <p class="date">Sat Mar 26 2022 14:35:26 GMT+0800 (中国标准时间)</p>
    </el-card>
</template>

<script setup>
const props = defineProps({
    title: String,
})
</script>

<style lang="scss">
@import "@/assets/scss/billboard.scss";
</style>