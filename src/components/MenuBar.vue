<template>
  <el-menu mode="horizontal" active-text-color="#26FFAE">
    <el-menu-item index="1">Home</el-menu-item>
    <el-menu-item index="2">Blog</el-menu-item>
    <el-menu-item index="3">About</el-menu-item>
    <el-menu-item index="4" class="loginBTN">Login</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "MenuBar"
}
</script>

<style scoped>
.loginBTN{
  float: right;
}
</style>