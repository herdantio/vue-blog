<template>
  <div>
    <menu-bar/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "RootPage",
  components: {
    MenuBar: () => import('@/components/MenuBar')
  }
}
</script>

<style scoped>

</style>