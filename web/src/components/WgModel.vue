<template>
  <transition name="animation">
    <div class="wgModel" v-if="isModel">
      <div class="head">
        <div class="title">{{ title }}</div>
        <div class="iconfont icon-cuowu" @click="change"></div>
      </div>
      <div class="wgModelMain">
        <slot></slot>
        <div class="slot"></div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  title: {
    default: "标题",
  },
  isModel: {
    default: false,
  },
});
const emit = defineEmits(["close"]);
function change() {
  emit("close");
}
props;
</script>

<style lang="less" scoped>
.animation {
  &-enter {
    &-from {
      transform: translateX(450px);
    }
    &-active {
      transition: @tr ease-out;
    }
    &-to {
      transform: translateX(0);
    }
  }
  &-leave {
    &-from {
      transform: translateX(0);
    }
    &-active {
      transition: @tr ease-in;
    }
    &-to {
      transform: translateX(450px);
    }
  }
}
.wgModel {
  width: 450px;
  height: 100%;
  position: fixed;
  right: 0;
  top: 60px;
  z-index: 998;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(10px);
  padding: @padding-md;
  box-sizing: border-box;
  .head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .title {
      font-weight: 700;
    }
    .iconfont {
      cursor: pointer;
    }
  }
}
.wgModelMain {
  border: 1px solid #eee;
  height: 600px;
  overflow-y: auto;
  //   padding: @padding-sm;
}
.wgModelMain::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
.wgModelMain::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.2);
}
.wgModelMain::-webkit-scrollbar-track {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.2);
}
.slot {
  height: 1200px;
  //   background-color: red;
}
</style>
