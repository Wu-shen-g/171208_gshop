<template>
  <header class="header">
    <slot name="search"></slot>
    <a class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </a>
    <slot name="login"></slot>
  </header>
</template>

<script>
export default {
  props: { title: String }
};
</script>
<style scoped>
.header .header_title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  color: #fff;
  text-align: center;
}
.header_title_text {
  font-size: 20px;
  color: #fff;
  display: block;
}
</style>