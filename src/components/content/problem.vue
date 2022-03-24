<script>
export default {
    mounted: function () {
        let result = mdParser(`# Markdown test \n \n ## Render by mdParser \n \n - test1 \n + test2`);
        this.$refs.content.innerHTML = result;
    }
}
</script>

<script setup>
import mdParser from '@/loader/mdparser'
const props = defineProps({
    title: String,
    id: String,
})


</script>

<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span class="title">{{ id + " " + title }}</span>
            </div>
        </template>
        <div ref="content"></div>
    </el-card>
</template>


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

.title {
    font-size: 1.5rem;
    font-weight: bold;
}
</style>