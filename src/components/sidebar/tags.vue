<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>
                    <font-awesome-icon class="icon icon-sidebar" :icon="['fas', 'tags']" />Tags
                </span>
                <el-button class="button" type="text">All algorithm tags</el-button>
            </div>
        </template>
        <div class="tags-container">
            <el-button v-for="o in 20" :key="o" type="plain">{{ "tag " + o }}</el-button>
        </div>
    </el-card>
</template>

<script setup>
const props = defineProps({
    title: String,
})
</script>

<style scoped lang="scss">
@import "@/assets/scss/tags.scss";
</style>