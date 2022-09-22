<template>
  <div class="topBar">
    <div class="logo">
      <img src="../static/logo.jpg" alt="" height="30" width="30" />
      <p class="logoName">微光</p>
    </div>
    <div class="menu">
      <wg-button>留言墙</wg-button>
      <wg-button>照片墙</wg-button>
    </div>
    <div class="user">
      <div class="userHead"></div>
    </div>
  </div>
</template>

<script>
import wgButton from "./WgButton.vue";
export default {
  data() {
    return {};
  },
  components: {
    wgButton,
  },
};
</script>

WeiGuang
<style lang="less">
.topBar {
  width: 100%;
  height: 60px;
  // 设置最小窗口宽度
  min-width: 1000px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;
  .logo {
    display: flex;
    align-items: center;
    // 让中间元素居中
    width: 200px;
    .logoName {
      font-size: @font-size-lg;
      font-weight: 600;
      color: @gray-11;
      margin-left: 10px;
    }
  }
  .user {
    width: 200px;
    .userHead {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      float: right;
      background-image: linear-gradient(45deg, #9000ff, #5e00ff);
    }
  }
  .menu {
    white-space: nowrap;
  }
}
</style>
