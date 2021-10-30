<template>
  <div>
    <el-row type="flex" :justify="justify">
      <el-col :span="span">
        <slot></slot>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "FlexTemplateComponent",
  props: {
    justify: {
      default: 'center'
    },
    span: {
      default: 24
    }
  }
}
</script>

<style scoped>

</style>