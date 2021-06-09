<template>
  <div class="container">
    <!-- メインテーブル -->
    <div class="main bottom-blank">
      <PCTable :key="resetKey" :filterParams="filterParams" />
    </div>
    <!-- サイドバー -->
    <div class="sidebar">
      <div v-if="isLocal" class="outline-box create">
        <label class="caption">追加</label>
        <!-- 追加ボタン -->
        <router-link :to="{ name: 'GameEdit', params: { gameId: 0 } }">
          <button class="create">ゲーム</button>
        </router-link>
        <br />
        <router-link :to="{ name: 'MovieEdit', params: { movieId: 0 } }">
          <button class="create">動画</button>
        </router-link>
      </div>
      <TopFilter v-on:updateTable="updateTable" :initFilterParams="filterParams" />
    </div>
  </div>
</template>

<script>
import top from "./Top.js";
import PCTable from "./PCTable.vue";
import TopFilter from "./Filter.vue";

export default {
  name: "TopShowPC",
  components: {
    PCTable,
    TopFilter,
  },
  data: function () {
    let isLocal = process.env.NODE_ENV == "development";
    let filterParams = top.getInitialFilterParams();
    // console.log(process.env.NODE_ENV);

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
  margin: 10px 10px 0px 10px;
  border-color: var(--comora-color-dirk-purple);
}

button.create {
  text-align: center;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: #dddddd;
  border-radius: 8px;
  padding: 0;
  margin: 2px 0 2px 0;
}
</style>