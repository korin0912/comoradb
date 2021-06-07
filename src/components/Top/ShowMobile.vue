<template>
  <div v-if="loaded" class="container">
    <div class="main bottom-blank">
      <MobileTable :key="resetKey" :filterParams="filterParams" />
    </div>
    <Slide right @openMenu="handleOpenMenu">
      <TopFilter v-on:updateTable="updateTable" :initFilterParams="filterParams" />
    </Slide>
  </div>
</template>

<script>
import top from "./Top.js";
import MobileTable from "./MobileTable.vue";
import TopFilter from "./Filter.vue";
import { Slide } from "vue-burger-menu";

export default {
  name: "TopShowMobile",
  components: {
    MobileTable,
    TopFilter,
    Slide,
  },
  data: function () {
    return {
      loaded: false,
      resetKey: 0,
      filterParams: {},
    };
  },
  methods: {
    updateTable: function (newFilterParams) {
      this.filterParams = newFilterParams;
      this.resetKey++;
    },
    handleOpenMenu: function () {
      let bm_menu_style = document.querySelector(".bm-menu").style;
      bm_menu_style.backgroundColor = "#ffffff";
      bm_menu_style.paddingTop = "40px";
      let bm_item_list_style = document.querySelector(".bm-item-list").style;
      bm_item_list_style.marginLeft = "0";
    },
  },
  mounted: async function () {
    let filterParams = await top.getInitialFilterParams();
    this.filterParams = filterParams;

    this.loaded = true;
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 100%;
  grid-template-areas: "box1";
}

.main {
  grid-area: box1;
}
</style>