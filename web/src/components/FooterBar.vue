<template>
  <div class="footerBar">
    <div class="column" id="left">
      <div class="logo">
        <img src="../static/logo.jpg" alt="" height="30" width="30" />
        <p class="logoName">微光</p>
      </div>
      <p>
        联系作者: 212320028@hdu.edu.cn
        <br />
        项目地址：<a href="https://github.com/YANGJUNYAN0715/weiguang"
          >链接🔗</a
        >
      </p>
    </div>
    <div class="column" id="container">
      <div class="center"></div>
    </div>
    <div class="column" id="right">
      <span>打赏（支付宝）</span>
      <img src="../static/reward.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footerBar {
  height: 100px;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 30px;
  // 双飞翼布局
  #left {
    width: 400px;
    margin-left: 30px;
    .logo {
      display: flex;
      align-items: center;
      // 让中间元素居中
      width: 200px;
      .logoName {
        font-size: @font-size-lg;
        font-weight: 600;
        color: @gray-2;
        margin-left: 10px;
      }
    }
    p {
      margin-left: 20px;
      color: @gray-2;
      font-weight: 600;
      a {
        color: @gray-2;
        text-decoration: none;
      }
    }
  }
  .column {
    flex: left;
  }
  #container {
    width: 100%;
  }
  .center {
    margin-left: 400px;
    margin-right: 300px;
  }
  #right {
    width: 300px;
    margin-left: -300px;
    display: flex;
    align-items: center;
    span {
      color: @gray-2;
      font-weight: 600;
    }
    img {
      width: 70px;
    }
  }
}
</style>
