<template>
  <div class="head-component">
    <!-- 左边logo以及跳转首页的事件 -->
    <div class="left-head cursor" @click="toIndex">
      <h1 class="solgan">CORGI</h1>
      <img class="logo" src="@/assets/img/corgilogo.gif" alt="" />
    </div>
    <div class="right-head">
      <!-- 搜索框 -->
      <!-- todo 边框变绿过渡效果==>参考vue官网 -->
      <div class="input-box" :style="isFocus ? focusStyle : ''">
        <i class="el-icon-search"></i>
        <el-input
          v-model="inputValue"
          placeholder="请输入内容"
          class="search-input"
          @focus="inputFocus"
          @blur="inputBlur"
        ></el-input>
      </div>
      <!-- 导航栏 -->
      <div class="navbars">
        <ul class="nav-ul">
          <li
            class="tabs-item cursor"
            v-for="(item, index) in tabsData"
            :key="index"
            @click="toDetail(item, index)"
            :class="currentIndex === index ? 'active' : ''"
          >
            {{ item.text }}
          </li>
          <li>
            <a
              href="https://github.com/wizardlyCorgi"
              target="_blank"
              rel="noopener noreferrer"
              class="to-Github"
              >Github<i class="el-icon-place"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputValue: '',
      focusStyle: { borderColor: '#42b983' },
      isFocus: false,
      tabsData: [
        {
          text: '指北',
          path: '/',
          isClick: false
        },
        {
          text: '指东',
          path: '/',
          isClick: false
        },
        {
          text: '指南',
          path: '/about',
          isClick: false
        },
        {
          text: '指西',
          path: '/',
          isClick: false
        },
        {
          text: '指西',
          path: '/',
          isClick: false
        },
        {
          text: '指西',
          path: '/',
          isClick: false
        },
        {
          text: '指西',
          path: '/',
          isClick: false
        }
      ],
      currentIndex: null
    }
  },
  methods: {
    inputFocus () {
      this.isFocus = true
    },
    inputBlur () {
      this.isFocus = false
    },
    toIndex () {
      if (this.$route.fullPath === '/home') return
      this.$router.push('/')
    },
    toDetail (item, index) {
      this.$router.push(`${item.path}`)
      this.currentIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../assets/css/components-less/Head.less');
</style>
