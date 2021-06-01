<template>
  <div class="container">
    <!-- メインテーブル -->
    <div class="main">
      <GamesTable :key="resetKey" :filterParams="filterParams" />
    </div>
    <!-- サイドバー -->
    <div class="sidebar">
      <div v-if="isLocal" class="box box-outline">
        <label class="caption">追加</label>
        <!-- 追加ボタン -->
        <div class="create">
          <button class="create">ゲーム</button>
          <br />
          <router-link :to="{ name: 'MovieCreate' }">
            <button class="create">動画</button>
          </router-link>
        </div>
      </div>
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
    let isLocal = process.env.NODE_ENV == "local";
    console.log(process.env.NODE_ENV);
    return {
      isLocal: isLocal,
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

div.create {
  position: relative;
  border-radius: 5px;
  border-width: 0px;
  margin: 0px 10px 0px 10px;
  padding: 0 0 5px 0;
  text-align: center;
}

button.create {
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: #dddddd;
  border-radius: 8px;
  margin: 0 0 5px 0;
  padding: 1px 10px 1px 10px;
}
</style>