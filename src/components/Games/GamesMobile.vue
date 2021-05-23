<template>
  <div class="container">
    <div class="main">
      <GamesTable :key="resetKey" :filterParams="filterParams" />
    </div>
  </div>
</template>

<script>
import games from "./Games.js";
import GamesTable from "./GamesMobileTable.vue";

export default {
  name: "GamesMobile",
  components: {
    GamesTable,
  },
  data: function () {
    let filterParams = games.getInitialFilterParams();
    return {
      resetKey: 0,
      filterParams: filterParams,
    };
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