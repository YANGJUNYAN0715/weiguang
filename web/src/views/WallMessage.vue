<template>
  <div class="wallMessage">
    <p class="title">{{ wallType[id].name }}</p>
    <p class="slogan">{{ wallType[id].slogan }}</p>
    <div class="label">
      <p
        class="labelList"
        :class="{ labelSelected: nlabel == -1 }"
        @click="selectNode(-1)"
      >
        全部
      </p>
      <p
        class="labelList"
        :class="{ labelSelected: nlabel == index }"
        v-for="(item, index) in label[id]"
        :key="index"
        @click="selectNode(index)"
      >
        {{ item }}
      </p>
    </div>
    <div class="card" :style="{ width: nWidth + 'px' }">
      <note-card
        v-for="(item, index) in note"
        :key="index"
        :note="item"
        :width="'360px'"
      ></note-card>
    </div>
    <div
      class="add"
      :style="{ bottom: addbottom + 'px' }"
      @click="changeModel"
      v-show="!model"
    >
      <span class="iconfont icon-jia"></span>
    </div>
    <wg-model :title="title" v-on:close="changeModel" :isModel="model"
      ><new-card></new-card
    ></wg-model>
  </div>
</template>

<script>
import { wallType, label } from "@/utils/data";
import noteCard from "../components/NoteCard.vue";
import newCard from "../components/NewCard.vue";
import wgModel from "../components/WgModel.vue";
import { note } from "../mock/index.js";
export default {
  data() {
    return {
      wallType,
      label,
      id: 0,
      nlabel: 0,
      note: note.data,
      nWidth: 0,
      addbottom: 30,
      model: false,
      title: "添加留言",
    };
  },
  methods: {
    selectNode(index) {
      this.nlabel = index;
    },
    noteWidth() {
      let winWidth = document.body.clientWidth;
      this.nWidth = Math.floor((winWidth - 120) / 376) * 376;
    },
    scrollBottom() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      if (scrollTop + clientHeight + 100 >= document.body.scrollHeight) {
        this.addbottom =
          scrollTop +
          clientHeight +
          100 -
          document.documentElement.scrollHeight;
      } else {
        this.addbottom = 30;
      }
    },
    changeModel(e) {
      this.model = !this.model;
    },
  },
  components: { noteCard, wgModel, newCard },
  mounted() {
    this.noteWidth();
    // 自适应屏幕大小
    window.addEventListener("resize", this.noteWidth);
    // 监听滚动变化
    window.addEventListener("scroll", this.scrollBottom);
  },
  unmounted() {
    window.addEventListener("resize", this.noteWidth);
  },
};
</script>

<style lang="less" scoped>
.wallMessage {
  min-height: 700px;
  padding-top: 52px;
  margin: 72px;
  margin-top: 20px;
  .title {
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 8px;
  }
  .slogan {
    text-align: center;
    margin-bottom: 8px;
  }
  .label {
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
    .labelList {
      margin-left: 36px;
      line-height: 8px;
      color: @gray-6;
      width: 40px;
      padding: @padding-sm;
      box-sizing: content-box;
      cursor: pointer;
      // 页面缩小时候p标签让它不会自动换行
      white-space: nowrap;
    }
    .labelSelected {
      color: @gray-9;
      font-weight: 600;
      border: 1px solid @gray-9;
      border-radius: 16px;
      cursor: pointer;
      white-space: nowrap;
    }
  }
  .card {
    // 使得card能从左到右排列，还是有点似懂非懂
    min-width: 376px;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    border: 1px solid red;
  }
  .add {
    height: 60px;
    width: 60px;
    background-color: @gray-11;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    cursor: pointer;
    right: 40px;
    bottom: 120px;
    transition: @tr;
    .icon-jia {
      color: @gray-1;
    }
  }
}
</style>
