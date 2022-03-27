<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>{{ title }}</span>
                <el-button class="button" type="text"></el-button>
            </div>
        </template>
        <div v-for="o in 14" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>
</template>

<script setup>
const props = defineProps({
    title: String,
})
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";
</style>