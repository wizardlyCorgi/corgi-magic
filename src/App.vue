<template>
  <div id="app">
    <div id="nav">
      <Head></Head>
    </div>
    <router-view />
    <!-- 路由过渡动画效果 -->
    <!-- <transition name="fade"></transition> -->
  </div>
</template>
<script>
import { Head } from '@/components'

export default {
  components: {
    Head
  }
}
</script>

<style lang="less">
@import 'assets/css/base.less';
#nav {
  position: relative;
  height: 80px;
}
</style>
