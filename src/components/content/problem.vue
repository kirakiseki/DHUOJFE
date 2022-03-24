<script>
export default {
    mounted: function () {
        let result = mdParser("# Markdown Test \n ## test\n---\n+ test\n\`\`\`cpp\nint main(){\n return 0;\n}\n\`\`\`\n$$\\LaTeX$$\n## TODO \n serverless MathJax Supprt");
        this.$refs.content.innerHTML = result;
        console.log(result);
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