<script>
export default {
    mounted: function () {
        let result = mdParser("# Markdown Test \n ## test\n---\n+ test\n\`\`\`cpp\nint main(){\n return 0;\n}\n\`\`\`\n $$\\left( \\sum_{k=1}^n a_k b_k \\right)^{2} \\leq\\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right)$$ \n# Inline MathJax test\n expression $\\sqrt{3x-1}+(1+x)^2$ is an example of an inline equation.");
        this.$refs.content.innerHTML = result;
        console.log(result);
        mathFind();
    },
    methods: {
        rerender() {
            console.log("test");
        }
    }
}
</script>

<script setup>
import mdParser from '@/loader/mdparser'
import mathFind from '@/loader/mathFind'
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
        <el-button @click="rerender">Rerender Math Test</el-button>
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