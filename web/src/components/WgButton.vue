<template>
  <button class="wg-button"><slot></slot></button>
</template>

<script>
export default {
  props: {},
};
</script>

<style lang="less">
.wg-button {
  height: 40px;
  width: 100px;
  background-color: @gray-0;
  border: none;
  color: @gray-11;
  padding: 10px @padding-lg;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: @font-size-base;
  margin: 4px 10px;
  cursor: pointer;
}
</style>
