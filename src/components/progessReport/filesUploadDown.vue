<!--  -->
<template>
  <div id="filesUploadDown" class="listPage">
    <div class="uplaodFile">上传附件：</div>
    <div class="files_content">
      <el-upload
        class="upload-demo"
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false"
      >
        <el-button slot="trigger" size="small" type="primary"
          >选取文件</el-button
        >
        <el-button
          style="margin-left: 10px;"
          size="small"
          type="success"
          @click="submitUpload"
          >上传到服务器</el-button
        >
      </el-upload>
    </div>
    <div class="downLoadFile">下载附件：</div>
    <ul class="files_content">
      <li v-for="(item, index) in fileList" :key="index">
        <a :href="item.url" target="_blank">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import "../../assets/css/public.scss";
export default {
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
      setTimeout(() => {
        this.fileList = [];
      }, 1000);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>
<style lang="scss" scoped>
.el-form-item__content {
  margin-left: 0 !important;
}

#filesUploadDown {
  padding-top: 10px;
  height: calc(100% - 48px);
  .uplaodFile,
  .downLoadFile {
    padding: 10px 0;
  }
  a {
    color: #409eff;
    text-decoration: underline;
  }
  .files_content {
      width:300px;
    padding-left: 20px;
  }
  .el-row {
    height: 0.4rem;
  }

  #addNewdialog {
    .el-select {
      width: 100%;
    }

    .el-dialog__body {
      padding: 0 0.2rem 0.2rem 0.2rem;
      width: 100%;
      display: inline-flex;
    }
  }
}
</style>
