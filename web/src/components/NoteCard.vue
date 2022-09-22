<template>
  <link
    rel="stylesheet"
    href="//at.alicdn.com/t/c/font_3656534_s3q2tsta4s.css"
  />
  <div class="wgNoteCard" :style="{ background: cardColor[card.imgurl] }">
    <div class="top">
      <p class="time">{{ dateOne(card.moment) }}</p>
      <p class="label">{{ label[card.type][card.label] }}</p>
    </div>
    <p class="message">{{ card.message }}</p>
    <div class="foot">
      <div class="footLeft">
        <span class="iconfont icon-liuyan">{{ card.comment }}</span>
        <span class="iconfont icon-aixin1">{{ card.like }}</span>
      </div>
      <div class="name">{{ card.name }}</div>
    </div>
  </div>
</template>

<script>
import { label, cardColor } from "../utils/data";
import { dateOne } from "../utils/weiguang.js";
export default {
  data() {
    return {
      label,
      dateOne,
      cardColor,
    };
  },
  props: {
    width: {
      default: "100%",
    },
    note: {
      default: {},
    },
  },
  computed: {
    card() {
      return this.note;
    },
  },
  created() {},
};
</script>

<style lang="less" scoped>
.wgNoteCard {
  width: 360px;
  height: 240px;
  background-color: #efdcda;
  padding: @padding-md;
  box-sizing: border-box;
  position: relative;
  // 写在组件里面，而不是页面里面
  margin: 8px;
  .top {
    display: flex;
    justify-content: space-between;
    p {
      font-size: @font-size-sm;
      color: @gray-8;
    }
  }
  .message {
    height: 170px;
    font-size: @font-size-base;
    margin-top: 10px;
    color: @gray-8;
    cursor: pointer;
  }
  .foot {
    display: flex;
    justify-content: space-between;
    .footLeft {
      span {
        font-size: @font-size-sm;
        letter-spacing: 0;
        line-height: 20px;
        font-weight: 400;
        margin-right: 8px;
      }
      .icon-aixin1:before {
        color: #d34e54;
        cursor: pointer;
      }
      .icon-liuyan:before {
        color: #2d5b3a;
        cursor: pointer;
      }
    }
    .name {
      font-size: @font-size-sm;
      color: @gray-8;
      font-weight: 700;
    }
  }
}
</style>
