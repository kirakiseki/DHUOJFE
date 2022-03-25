<script>
export default {
    mounted: function () {
        let dat = `# Markdown Test \n ## test\n---\n+ Highlight.js-Github Theme\n\`\`\`cpp\nint main(){\n return 0;\n}\n\`\`\`\n # Display math\n$$\\left( \\sum_{k=1}^n a_k b_k \\right)^{2} \\leq\\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right)$$ \n# Inline MathJax test\n expression $\\sqrt{3x-1}+(1+x)^2$ is an example of an inline equation.`;
        let result = mdParser(dat);
        this.$refs.content.innerHTML = result;
        mathFind();
    },
    watch: function(){
        rerenderTex();
    }
}
</script>

<script setup>
import mdParser from '@/loader/mdparser'
import {rerenderTex,mathFind} from '@/loader/math'
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