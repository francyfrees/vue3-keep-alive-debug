<template>
  <div>
    <el-upload
      :file-list="[]"
      :limit="5"
      :on-change="(file: UploadFile, fileList: UploadFiles) => handleAttrChange(file, fileList, 123)"
      list-type="picture-card"
    />
  </div>
</template>

<script setup lang="ts">
import type { UploadFile, UploadFiles, UploadRawFile } from 'element-plus'

const handleAttrChange = (
  file: UploadFile,
  fileList: UploadFiles,
  index: number
) => {
  console.log(file)
}
</script>
