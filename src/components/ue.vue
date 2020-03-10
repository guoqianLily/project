<template>
  <div class="zdyeditor" style="">
    <!-- <el-card style="height: 100%;width:100%"> -->
    <quill-editor v-model="content" ref="myQuillEditor" style="height:100%;width:100%" :options="editorOption">
      <!-- 自定义toolar -->

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
  // let Size = Quill.import('attributors/style/size')
  // Size.whitelist = ['10px', '12px', '14px', '16px', '18px', '20px']
  // Quill.register(Size, true)

  // // 自定义字体类型
  // var fonts = ['SimSun', 'SimHei', 'Microsoft-YaHei', 'KaiTi', 'FangSong', 'Arial', 'Times-New-Roman', 'sans-serif',
  //   '宋体', '黑体'
  // ]
  // var Font = Quill.import('formats/font')
  // Font.whitelist = fonts
  // Quill.register(Font, true)
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线
    ["blockquote", "code-block"], // 引用  代码块
    [{
      header: 1
    }, {
      header: 2
    }], // 1、2 级标题
    [{
      list: "ordered"
    }, {
      list: "bullet"
    }], // 有序、无序列表
    [{
      script: "sub"
    }, {
      script: "super"
    }], // 上标/下标
    [{
      indent: "-1"
    }, {
      indent: "+1"
    }], // 缩进
    // [{'direction': 'rtl'}],                         // 文本方向
    [{
      size: ['10px', '12px', '14px', '16px', '18px', '20px']
    }], // 字体大小
    [{
      header: [1, 2, 3, 4, 5, 6, false]
    }], // 标题
    [{
      color: []
    }, {
      background: []
    }], // 字体颜色、字体背景颜色
    [{
      font: []
    }], // 字体种类
    [{
      align: []
    }], // 对齐方式
    ["clean"], // 清除文本格式
    //["link", "image","video"] // 链接、图片、视频
    ["link", "image"] // 链接、图片
  ];
  export default {
    name: 'FuncFormsEdit',
    components: {
      quillEditor
    },
    props: {
      content: {
        type: String,
        default:{
          return:'',
        }
      }
    },
    data() {
      return {
        editorOption: {
          placeholder: "请输入",
          theme: "snow", // or 'bubble' 
          modules: {
            toolbar: {
              container: toolbarOptions
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
      // content: {
      //   get() {
      //     return this.content;
      //   },
      //   set(val) {
      //     var newval = val;
      //     if (val.split("strong").length > 1) {
      //       newval = val.slice(0, val.split("strong")[0].length + 6) + ' style="font-weight: bold !important"' + val
      //         .slice(val.split("strong")[0].length + 6)
      //       val = newval;
      //     }
      //     if (val.split("em").length > 1) {
      //       newval = val.slice(0, val.split("em")[0].length + 2) + ' style="font-style: italic !important"' + val
      //         .slice(
      //           val.split("em")[0].length + 2)
      //       val = newval;
      //     }
      //     //grants_改变由父组件控制
      //     this.$emit("on-change-cantent", val);
      //   }
      // }
    },
    mounted() {
      let content = ''; // 请求后台返回的内容字符串
      this.str = this.escapeStringHTML(content);
    },
    watch: {
      content(val, oldVal) {
        var newval = val;
        if (val.split("strong").length > 1) {
          newval = val.slice(0, val.split("strong")[0].length + 6) + ' style="font-weight: bold !important"' + val
            .slice(val.split("strong")[0].length + 6)
          val = newval;
        }
        if (val.split("em").length > 1) {
          newval = val.slice(0, val.split("em")[0].length + 2) + ' style="font-style: italic !important"' + val.slice(
            val.split("em")[0].length + 2)
          val = newval;
        }
        // console.log(newval);
        // console.log(val)
         this.$emit("on-change-content", val);
      },
    }
  }
</script>
<style lang="scss">
  .zdyeditor {
    height: 100%;
    width: 100%;
    position: relative;
    float: left;
    
    .ql-toolbar.ql-snow {
      padding: 2px 8px 2px 4px;
      line-height: 34px;
      border-radius: 10px 10px 0px 0px;
         text-align: left;
      .ql-formats {
        margin-right: -4px;
      }

      .ql-strike,
      .ql-blockquote,
      .ql-background,
      .ql-formats:nth-child(2),
      .ql-formats:nth-child(3),
      .ql-formats:nth-child(4),
      .ql-formats:nth-child(5),
      .ql-formats:nth-child(8),
      .ql-formats:nth-child(10),
      .ql-formats:nth-child(11),
      .ql-formats:nth-child(12),
      .ql-formats:nth-child(13) {
        display: none !important;
      }

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

        strong {
          font-weight: bold !important;
        }

        em {
          font-style: italic !important;
        }
      }
    }
  }
</style>
<style>
  .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: '保存';
    padding-right: 0px;
  }

  .ql-snow .ql-tooltip[data-mode=video]::before {
    content: "请输入视频地址:";
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: '14px';
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="10px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="10px"]::before {
    content: '10px';
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="12px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="12px"]::before {
    content: '12px';
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="14px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="14px"]::before {
    content: '14px';
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="16px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="16px"]::before {
    content: '16px';
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="18px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="18px"]::before {
    content: '18px';
  }

  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="20px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="20px"]::before {
    content: '20px';
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: '文本';
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
    content: '标题1';
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
    content: '标题2';
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
    content: '标题3';
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
    content: '标题4';
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
    content: '标题5';
  }

  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
    content: '标题6';
  }

  .ql-snow .ql-picker.ql-font .ql-picker-label::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: '标准字体';
  }

  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {
    content: '衬线字体';
  }

  .ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,
  .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {
    content: '等宽字体';
  }
</style>