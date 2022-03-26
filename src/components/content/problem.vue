<script>
export default {
    mounted: function () {
        let dat = `# Markdown Test \n ## test\n---\n+ Highlight test\n\`\`\`cpp\nint main(){\n return 0;\n}\n\`\`\`\n # Display math block \n $$\\left( \\sum_{k=1}^n a_k b_k \\right)^{2} \\leq\\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right)$$ \n# Inline MathJax test\n expression $\\sqrt{3x-1}+(1+x)^2$ is an example of an inline equation.\n\n`;
        let result = mdParser(dat);
        this.$refs.content.innerHTML = result;
        dat = `Here’s to the crazy ones.
向那些疯狂的家伙们致敬。

The misfits. The rebels. The troublemakers. The round pegs in the square holes.
他们特立独行，他们桀惊不逊，他们惹是生非，他们格格不入。

The ones who see things differently.
他们用与众不同的眼光看待事物。

They’re not fond of rules. And they have no respect for the status quo.
他们不喜欢墨守成规，他们也不愿安于现状。

You can quote them, disagree with them, glorify or vilify them.
你可以引用他们，反对他们，质疑他们，颂扬或是诋毁他们。

About the only thing you can’t do is ignore them.
但唯独不能漠视他们。

Because they change things. They push the human race forward.
因为他们改变了事物。他们推动人类向前发展。

And while some may see them as the crazy ones, we see genius.
或许他们是别人眼里的疯子，但他们却是我们眼中的天才。

Because the people who are crazy enough to think they can change the world,
因为只有那些疯狂到以为自己能够改变世界的人，

are the ones who do.
才能真正地改变世界。`;
        result = mdParser(dat);
        this.$refs.output3.innerHTML = result;
        dat = `![](https://img2.baidu.com/it/u=787217374,1531855528&fm=253&fmt=auto&app=138&f=JPG?w=500&h=500)`;
        result = mdParser(dat);
        this.$refs.input4.innerHTML = result;
        mathFind();
    },
    watch: function () {
        rerenderTex();
    }
}
</script>


<script setup>
import mdParser from '@/loader/mdparser'
import { rerenderTex, mathFind } from '@/loader/math'
import { computed, ref } from 'vue'

const props = defineProps({
    title: String,
    id: String,
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
</script>

<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span class="title">{{ id + " " + title }}</span>
            </div>
        </template>
        <el-button type="danger" @click="rerenderTex">[Debug] Rerender all expressions</el-button>
        <div ref="content"></div>
        <el-descriptions class="examples" title="Example" direction="vertical" :column="2" :size="large" border>
            <el-descriptions-item label="Input #1">Cherry</el-descriptions-item>
            <el-descriptions-item label="Output #1">🍋什么时候熟啊</el-descriptions-item>
            <el-descriptions-item label="Input #2">Lorem ipsum</el-descriptions-item>
            <el-descriptions-item label="Output #2">dolor sit amet</el-descriptions-item>
            <el-descriptions-item label="Input #3">Multiple lines</el-descriptions-item>
            <el-descriptions-item label="Output #3">
                <div ref="output3"></div>
            </el-descriptions-item>
            <el-descriptions-item label="Input #4"><div ref="input4"></div></el-descriptions-item>
            <el-descriptions-item label="Output #2">114514</el-descriptions-item>
        </el-descriptions>
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

.examples {
    padding-top: 3rem;
}
</style>