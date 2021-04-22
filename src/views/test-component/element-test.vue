<template>
  <div class="test">
    <span>测试element-UI的使用</span>
    <div>{{ msg }}</div>
    <el-button type="primary">嘿嘿</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我是一个msg'
    }
  }
}
</script>

<style></style>
