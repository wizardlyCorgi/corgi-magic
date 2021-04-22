<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <!-- 路由过渡动画效果 -->
    <transition name="fade"><router-view /></transition>
  </div>
</template>

<style lang="less">
@import 'assets/css/base.less';
</style>
