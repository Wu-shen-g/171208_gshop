<template>
  <!-- 底部路由导航 -->
  <!-- :class="{on:'/xx'===$route.path}" 跳转到xx页面时，底部导航变换对应颜色 -->
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" :class="{on:'/msite'===$route.path}" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/search'===$route.path}" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/order'===$route.path}" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/profile'===$route.path}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </a>
  </footer>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    //点击跳转
    goTo(path){
      this.$router.replace(path)
    }
  },

  watch: {}
};
</script>
<style scoped>
.footer_guide {
  display: flex;
  position: fixed;
  border-top: 1px #e4e4e4 solid;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 50px；;
}
.footer_guide .guide_item {
  display: flex;
  flex: 1;
  text-align: center;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  color: #999999;
}
.footer_guide .on {
  color: #02a774;
}
.footer_guide .guide_item span {
  font-size: 12px;
  margin: 2px 0;
}
.footer_guide .guide_item span .iconfont {
  font-size: 22px;
}
</style>