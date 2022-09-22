<template>
  <div>
    <top-bar></top-bar>
    <router-view></router-view>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import footerBar from "../components/FooterBar.vue";
import topBar from "../components/TopBar.vue";
export default {
  data() {
    return {};
  },
  components: { topBar, footerBar },
  computed: {},
  created() {},
  methods: {},
};
</script>

<style lang="less"></style>
