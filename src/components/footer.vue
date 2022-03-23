<template>
    <el-row class="footer hidden-sm-and-down">
        <el-col :span="24" class="hidden-md-and-down">
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/footer.scss";
</style>