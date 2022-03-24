<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>Tags</span>
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

<style>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    width: auto;
}

.tags-container {
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: space-between;
}

.tags-container > .el-button {
    margin: 3px;
}
</style>