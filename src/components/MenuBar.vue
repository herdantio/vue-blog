<template>
  <el-menu mode="horizontal" active-text-color="#26FFAE" :router="true">
    <el-menu-item index="/">Home</el-menu-item>
    <el-submenu index="/">
      <template slot="title">Blog</template>
      <el-menu-item index="/create">Create Post</el-menu-item>
      <el-menu-item index="2-2">My Post</el-menu-item>
    </el-submenu>
    <el-menu-item index="/about">About</el-menu-item>
    <el-menu-item index="/login" class="loginBTN">Login</el-menu-item>
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