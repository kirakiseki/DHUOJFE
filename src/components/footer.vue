<template>
    <el-row class="footer">
        <el-col :span="12">
            <div class="copyright">
                <span>© 2022 Donghua University ACM Lab. All Right Reserved.</span>
                <br />
                <span>B431 Comprehensive Lab Building, Songjiang Campus, Donghua University</span>
                <br />
                <span>North Renmin Road, Shanghai, 201620</span>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="author">
                <span>
                    Frontend by
                    <el-avatar
                        class="avatar"
                        size="small"
                        src="https://avatars.githubusercontent.com/u/38367158?v=4"
                    />
                    <a href="https://blog.ishirai.cc"> Ishirai </a>
                </span>
                <br />
                <span>
                    Backend by
                    <el-avatar
                        class="avatar"
                        size="small"
                        src="https://avatars.githubusercontent.com/u/40843263?v=4"
                    />
                    <a href="https://github.com/AEMShana"> AEMShana </a> and
                    <el-avatar
                        class="avatar"
                        size="small"
                        src="https://avatars.githubusercontent.com/u/101724828?v=4"
                    />
                    <a href="https://github.com/Yincronus"> Yincronus </a>
                </span>
            </div>
        </el-col>
    </el-row>
    <el-row class="footer-dark hidden-md-and-down" justify="space-between">
        <div class="badge">
            <img
                src="https://img.shields.io/github/last-commit/kirakiseki/dhuojfe?style=for-the-badge"
            />
        </div>
        <p id="hitokoto">
            <a href="#" id="hitokoto_text"></a>
        </p>
    </el-row>
</template>

<style scoped lang="scss">
@import "@/assets/scss/footer.scss";
</style>