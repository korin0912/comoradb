<template>
  <div v-if="isLoading" class="container">
    <div v-if="isLoading">
      <vue-loading type="spin" color="#333" :size="{ width: '50px', height: '50px' }"></vue-loading>
    </div>
  </div>
  <div v-else class="container">
    <!-- メインテーブル -->
    <div class="main bottom-blank">
      <PCTable :key="resetKey" :filterParams="filterParams" />
    </div>
    <!-- サイドバー -->
    <div class="sidebar">
      <!-- 追加ボタン -->
      <div v-if="isLocal" class="outline-box create">
        <label class="caption">追加</label>
        <router-link :to="{ name: 'GameEdit', params: { gameId: 0 } }">
          <button class="create">ゲーム</button>
        </router-link>
        <br />
        <router-link :to="{ name: 'MovieEdit', params: { movieId: 0 } }">
          <button class="create">動画</button>
        </router-link>
      </div>
      <!-- 日次更新ボタン -->
      <div v-if="isLocal" class="outline-box create">
        <label class="caption">日次更新</label>
        <button class="create" v-on:click="dailyUpdate()">Git 反映</button>
        <input v-model="commitMessage" placeholder="" class="commit-msg-text" />
      </div>
      <!-- フィルター -->
      <TopFilter v-on:updateTable="updateTable" :initFilterParams="filterParams" />
    </div>
  </div>
</template>

<script>
import { VueLoading } from "vue-loading-template";
import top from "./Top.js";
import PCTable from "./PCTable.vue";
import TopFilter from "./Filter.vue";
const { default: axios } = require("axios");

export default {
  name: "TopShowPC",
  components: {
    VueLoading,
    PCTable,
    TopFilter,
  },
  data: function () {
    let isLocal = process.env.NODE_ENV == "development";
    let filterParams = top.getInitialFilterParams();
    let commitMessage = "";
    if (isLocal)
    {
        let now = new Date();
        let month = "0" + (now.getMonth() + 1);
        let day = "0" + now.getDate();
        let ymd = `${now.getFullYear()}/${month.substring(month.length - 2)}/${day.substring(day.length - 2)}`;
        commitMessage = `daily update. ${ymd}`;
    }
    // console.log(process.env.NODE_ENV);

    return {
      isLoading: false,
      isLocal: isLocal,
      commitMessage: commitMessage,
      resetKey: 0,
      filterParams: filterParams,
    };
  },
  methods: {
    updateTable: function (newFilterParams) {
      this.filterParams = newFilterParams;
      this.resetKey++;
    },
    dailyUpdate: async function () {
      this.isLoading = true;
      await axios.post("http://localhost:8082/daily-update", `{"commitMessage":"${this.commitMessage}"}`, { headers: { "Content-Type": "application/json" } }).then((res) => {
        console.log(res.status);
        this.isLoading = false;
        alert(res.data);
      });
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

input.commit-msg-text {
  width: calc(100% - 6px);
  margin: 0;
  padding: 2px;
  border-radius: 4px 4px 4px 4px;
  border-width: 1px;
  border-color: #aaaaaa;
  border-style: solid;
}
</style>