<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },

  components: {
    FooterGuide
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style scoped>
#app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>