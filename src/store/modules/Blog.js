export default {
    namespaced: true,
    state: {
        post: {
            title: '',
            editorContent: '',
        }
    },
    mutations: {
        onEditorChange(state, { quill, html, text }){
            state.post.editorContent = html
        },
        onTitleChange(state, title){
            state.post.title = title
        },
        resetPostData(state){
            let resetData = {
                post: '',
                editorContent: ''
            }
            state.post = {
                ...resetData
            }
        }
    }
}