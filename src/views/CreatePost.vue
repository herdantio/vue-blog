<template>
  <div>
    <blog-post-editor/>
  </div>
</template>

<script>
export default {
  name: "CreatePost",
  components: {
    BlogPostEditor: () => import('@/components/Blog/BlogPostEditor')
  },
}
</script>

<style scoped>

</style>