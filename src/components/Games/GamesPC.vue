<template>
  <div class="container">
    <!-- メインテーブル -->
    <div class="main">
      <GamesTable :key="resetKey" :filterParams="filterParams" />
    </div>
    <!-- サイドバー -->
    <div class="sidebar">
      <GamesFilter v-on:updateTable="updateTable" :initFilterParams="filterParams" />
    </div>
  </div>
</template>

<script>
import games from "./Games.js";
import GamesTable from "./GamesPCTable.vue";
import GamesFilter from "./GamesFilter.vue";

export default {
  name: "GamesPC",
  components: {
    GamesTable,
    GamesFilter,
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
  },
};
</script>

<style scoped>
@import "./Games.css";

.container {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 85% 15%;
  grid-template-areas: "box1 box2";
}

.main {
  grid-area: box1;
}

.sidebar {
  grid-area: box2;
}
</style>