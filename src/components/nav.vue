<template>
    <el-row>
        <el-col :span="24"  class="nav-card">
            <img src="../assets/logo.png" alt class="nav-logo" />
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24" class="navbar__menu-box">
            <ul class="el-menu el-menu--horizontal navbar__menu">
                <li class="el-menu-item">菜单1</li>
                <li class="el-menu-item">菜单2</li>
                <li class="el-menu-item">菜单2</li>
            </ul>
        </el-col>
    </el-row>
</template>

<script>

</script>
<style>
.nav-card {
    background-color: #0da7ff;
    height: 150px;
}
.nav-logo {
    height: 150px;
}
</style>