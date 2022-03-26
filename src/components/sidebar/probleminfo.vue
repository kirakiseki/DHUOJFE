<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>
                    <font-awesome-icon class="icon icon-sidebar" :icon="['fas', 'chart-area']" />Problem Info
                </span>
                <el-button class="button" type="text"></el-button>
            </div>
        </template>
        <el-descriptions direction="vertical" :column="2" :size="large" border>
            <el-descriptions-item label="Author" :span="2">
                <div class="author-container">
                    <el-avatar
                        class="avatar"
                        src="https://avatars.githubusercontent.com/u/38367158?v=4"
                    />
                    <a class="author-id">Ishirai</a>
                </div>
            </el-descriptions-item>
            <el-descriptions-item label="Accepted Rate" :span="2">
                <el-progress :text-inside="true" :stroke-width="22" :percentage="80" />
            </el-descriptions-item>
            <el-descriptions-item label="Your Submit Times">2</el-descriptions-item>
            <el-descriptions-item label="Your Average Score">80</el-descriptions-item>
            <el-descriptions-item label="Rating" :span="2">
                <div class="rating-container">
                    <el-rate
                        v-model="value"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value} points"
                    />
                </div>
            </el-descriptions-item>
            <el-descriptions-item label="Included in Problemset">
                <el-button class="button" type="text">Example Problemset 1</el-button>
                <el-button class="button" type="text">Example Problemset 2</el-button>
                <el-button class="button" type="text">More<font-awesome-icon class="icon" :icon="['fas', 'angle-right']" /></el-button>
            </el-descriptions-item>
        </el-descriptions>
    </el-card>
</template>

<script setup>
import { computed, ref } from 'vue'
const props = defineProps({
    title: String,
})


const size = ref('')
const blockMargin = computed(() => {
    const marginMap = {
        large: '32px',
        default: '28px',
        small: '24px',
    }
    return {
        marginTop: marginMap[size.value] || marginMap.default,
    }
})
const value = ref(3.7)
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

.author-container {
    display: flex;
    align-items: center;
}

.author-id {
    margin-left: 10px;
    font-size: medium;
}

.rating-container * {
    display: flex;
    align-items: center;
}
</style>