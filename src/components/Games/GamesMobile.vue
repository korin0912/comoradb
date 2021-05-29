<template>
  <div class="container">
    <div class="main">
      <GamesTable :key="resetKey" :filterParams="filterParams" />
    </div>
    <Slide right @openMenu="handleOpenMenu">
      <GamesFilter v-on:updateTable="updateTable" :initFilterParams="filterParams" />
    </Slide>
  </div>
</template>

<script>
import games from "./Games.js";
import GamesTable from "./GamesMobileTable.vue";
import GamesFilter from "./GamesFilter.vue";
import { Slide } from "vue-burger-menu";

export default {
  name: "GamesMobile",
  components: {
    GamesTable,
    GamesFilter,
    Slide,
  },
  data: function () {
    let filterParams = games.getInitialFilterParams();
    return {
      resetKey: 0,
      filterParams: filterParams,
    };
  },
  methods: {
    updateTable: function (newFilterParams) {
      this.filterParams = newFilterParams;
      this.resetKey++;
    },
    handleOpenMenu: function () {
      let bm_menu_style = document.querySelector('.bm-menu').style;
      bm_menu_style.backgroundColor = '#ffffff';
      bm_menu_style.paddingTop = '40px';
      let bm_item_list_style = document.querySelector('.bm-item-list').style;
      bm_item_list_style.marginLeft = '0';
    }
  },
};
</script>

<style scoped>
@import "./Games.css";

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