<template>
  <div>
    <menu-bar/>
    <flex-template-component justify="center" :span="18">
      <router-view></router-view>
    </flex-template-component>
  </div>
</template>

<script>
export default {
  name: "RootPage",
  components: {
    MenuBar: () => import('@/components/MenuBar'),
    FlexTemplateComponent: () => import('@/components/FlexTemplateComponent')
  }
}
</script>

<style scoped>

</style>