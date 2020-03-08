<template>
  <div id="editor" style="">
    <!-- <el-card style="height: 100%;width:100%"> -->
    <quill-editor v-model="content" ref="myQuillEditor" style="height:100%;width:100%" :options="editorOption">
      <!-- 自定义toolar -->
      <div id="toolbar" slot="toolbar">
        <!-- Add a bold button -->
        <button class="ql-bold" title="加粗">Bold</button>
        <button class="ql-italic" title="斜体">Italic</button>
        <button class="ql-underline" title="下划线">underline</button>
        <!--Add list -->
        <!-- <button class="ql-list" value="ordered" title="有序列表"></button>
          <button class="ql-list" value="bullet" title="无序列表"></button> -->
        <!-- Add font size dropdown -->
        <!-- <select class="ql-header" title="段落格式">
            <option selected>段落</option>
            <option value="1">标题1</option>
            <option value="2">标题2</option>
            <option value="3">标题3</option>
            <option value="4">标题4</option>
            <option value="5">标题5</option>
            <option value="6">标题6</option>
          </select> -->
        <select class="ql-size" title="字体大小">
          <option value="10px">10px</option>
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px" selected>16px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
        </select>
        <!-- <select class="ql-font" title="字体">
            <option value="SimSun">宋体</option>
            <option value="SimHei">黑体</option>
            <option value="Microsoft-YaHei">微软雅黑</option>
            <option value="KaiTi">楷体</option>
            <option value="FangSong">仿宋</option>
            <option value="Arial">Arial</option>
          </select> -->
        <!-- Add subscript and superscript buttons -->
        <select class="ql-color" value="color" title="字体颜色"></select>
        <!-- <select class="ql-align" value="align" title="对齐"></select> -->
        <!-- You can also add your own -->
      </div>
    </quill-editor>

    <!-- </el-card> -->
  </div>
</template>

<script>
  import {
    Quill,
    quillEditor
  } from 'vue-quill-editor'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  //引入font.css 
  import '../assets/css/font.css'

  // 自定义字体大小
  let Size = Quill.import('attributors/style/size')
  Size.whitelist = ['10px', '12px', '14px', '16px', '18px', '20px']
  Quill.register(Size, true)

  // 自定义字体类型
  var fonts = ['SimSun', 'SimHei', 'Microsoft-YaHei', 'KaiTi', 'FangSong', 'Arial', 'Times-New-Roman', 'sans-serif',
    '宋体', '黑体'
  ]
  var Font = Quill.import('formats/font')
  Font.whitelist = fonts
  Quill.register(Font, true)
  export default {
    name: 'FuncFormsEdit',
    components: {
      quillEditor
    },
    data() {
      return {
        content: '',
        editorOption: {
          placeholder: "请输入",
          theme: "snow", // or 'bubble' 
          modules: {
            toolbar: {
              container: '#toolbar'
            }
          }
        }
      }
    },
    methods: {
      onEditorReady(editor) { // 准备编辑器
      },
      onEditorBlur() {}, // 失去焦点事件
      onEditorFocus() {}, // 获得焦点事件
      onEditorChange() {}, // 内容改变事件
      // 转码
      escapeStringHTML(str) {
        str = str.replace(/&lt;/g, '<');
        str = str.replace(/&gt;/g, '>');
        return str;
      },
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill;
        console.log(this.$refs.myQuillEditor.quill)
      },
    },
    mounted() {
      let content = ''; // 请求后台返回的内容字符串
      this.str = this.escapeStringHTML(content);
    },
    watch:{
      content(val, oldVal){
        var newval=val;
        if(val.split("strong").length>1){
          newval=val.slice(0,val.split("strong")[0].length+6)+' style="font-weight: bold !important"'+val.slice(val.split("strong")[0].length+6)
          val=newval;
        }
        if(val.split("em").length>1){
          newval=val.slice(0,val.split("em")[0].length+2)+' style="font-style: italic !important"'+val.slice(val.split("em")[0].length+2)
          val=newval;
        }
        console.log(newval);
        console.log(val)
         this.$emit('content',val)
      },
    }
  }
</script>
<style lang="scss">
  #editor {
    height: 100%;
    width: 100%;
    position: relative;
    float: left;
    .ql-toolbar.ql-snow {
      padding: 2px 8px 2px 4px;
      line-height: 34px;
      border-radius: 10px 10px 0px 0px;
      .ql-picker.ql-size {
        width: 64px;
        line-height: 23px;
      }
      .ql-color-picker {
        line-height: 30px;
      }
    }
    .ql-container.ql-snow {
      border: 1px solid #ccc;
      height: calc(100% - 40px);
      border-radius: 0px 0px 10px 10px;

      .ql-editor {
        padding: 3px 10px;
        .ql-blank::before {
          left: 4px;
          right: 4px;
        }
        strong{
          font-weight:bold !important;
        }
        em{
          font-style: italic !important;
        }
      }
    }
  }
</style>