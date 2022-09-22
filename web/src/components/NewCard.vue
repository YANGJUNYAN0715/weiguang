<template>
  <div class="newCard">
    <div class="colors">
      <p
        class="colorLi"
        v-for="(item, index) in cardColor"
        :key="index"
        :style="{ background: item }"
      ></p>
    </div>
    <div class="cardMain">
      <textarea placeholder="留言..." maxlength="99"></textarea>
      <input type="text" placeholder="签名" />
    </div>
  </div>
</template>

<script>
import { cardColor } from "@/utils/data";
export default {
  data() {
    return {
      cardColor,
    };
  },
  props: {},
};
</script>

<style lang="less" scoped>
.newCard {
  .colors {
    margin-top: 12px;
    margin-left: 12px;
    width: 50%;
    display: flex;
    justify-content: space-around;
    .colorLi {
      width: 24px;
      height: 24px;
    }
    .colorSelected {
      border: 1px solid rgba(59, 115, 240, 1);
    }
  }
  .cardMain {
    height: 480px;
    width: 100%;
    padding: @padding-md;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    textarea {
      width: 360px;
      height: 240px;
      font-size: @font-size-base;
      margin-top: 10px;
      color: @gray-8;
      background-color: rgba(252, 175, 162, 0.3);
      border: none;
      resize: none;
    }
    input {
      width: 360px;
      height: 24px;
      border: 1px solid #eee;
      border-radius: 4px;
      margin-top: 10px;
    }
  }
}
</style>
