<template>
  <div>
    <button @click="show = !show">点击展开/关闭</button>
    <!--这里的name 和 css 类名第一个字段要一样-->
    <transition name="popup">
      <div class="box" v-show="show"></div>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false // 默认隐藏
    }
  }
}
</script>
<style>
.box {
  height: 200px;
  background: #000;
  overflow: hidden;
}
.popup-enter-active,
.popup-leave-active {
  transition: all 1s ease;
}
.popup-enter,
.popup-leave-to {
  height: 0;
}
</style>
