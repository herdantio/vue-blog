<template>
  <div>
    <h1>Create Your Own Stories!</h1>

    <flex-template-component justify="left" :span="8">
      <el-form label-position="top">
        <el-form-item label="Post Title:">
          <el-input :value="title" @input="onTitleChange"></el-input>
        </el-form-item>
      </el-form>
    </flex-template-component>

    <quill-editor
        ref="myQuillEditor"
        :content="content"
        @change="onEditorChange"
    />
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "BlogPostEditor",
  components: {
    FlexTemplateComponent: () => import('@/components/FlexTemplateComponent')
  },
  computed: {
    ...mapState('Blog', {
      content: state => state.post.editorContent,
      title: state => state.post.title
    })
  },
  methods: {
    ...mapMutations('Blog', [
      'onEditorChange',
      'onTitleChange',
      'resetPostData'
    ])
  },
  destroyed() {
    this.resetPostData()
  }
}
</script>

<style scoped>

</style>