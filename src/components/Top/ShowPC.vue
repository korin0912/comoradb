<template>
  <div v-if="isLoading" class="container">
    <div>
      更新中
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
      <!-- カレンダー -->
      <div class="outline-box calendar">
        <label class="caption">カレンダー</label>
        <input type="month" v-model="calendarMonth" class="calendar" />
        <router-link :to="{ name: 'CalendarShow', params: { calendarMonth: calendarMonth } }">
          <i class="icon forward calendar" />
        </router-link>
      </div>
      <!-- フィルター -->
      <TopFilter v-on:updateTable="updateTable" :initFilterParams="filterParams" />
    </div>
  </div>
</template>

<script>
import top from "./Top.js";
import PCTable from "./PCTable.vue";
import TopFilter from "./Filter.vue";
const { default: axios } = require("axios");

export default {
  name: "TopShowPC",
  components: {
    PCTable,
    TopFilter,
  },
  data: function () {
    let isLocal = process.env.NODE_ENV == "development";
    let calendarMonth = "";
    let commitMessage = "";
    let filterParams = top.getInitialFilterParams();

    let now = new Date();
    let year = now.getFullYear();
    let month = "0" + (now.getMonth() + 1);
    month = month.substring(month.length - 2);
    let day = "0" + now.getDate();
    day = day.substring(day.length - 2);

    calendarMonth = `${year}-${month}`;
    // console.log(calendarMonth);

    if (isLocal)
    {
        commitMessage = `daily update. ${year}/${month}/${day}`;
    }
    // console.log(process.env.NODE_ENV);

    return {
      isLoading: false,
      isLocal: isLocal,
      calendarMonth: calendarMonth,
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
      await axios.post("http://localhost:8082/daily-update", `{"commitMessage":"${this.commitMessage}"}`, { headers: { "Content-Type": "text/plain" } }).then((res) => {
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

div.calendar {
  position: relative;
  margin: 10px 10px 0px 10px;
  border-color: var(--comora-color-dirk-purple);
}

.icon.calendar::before {
  border-width: 1px;
  border-color: #888888;
  border-radius: 4px;
  border-style: solid;
  padding: 1px 2px 1px 2px;
}

input.calendar {
  width: calc(100% - 37px - 4px);
  margin: 0;
  margin-right: 4px;
  padding: 2px;
  border-radius: 4px 4px 4px 4px;
  border-width: 1px;
  border-color: #aaaaaa;
  border-style: solid;
  vertical-align: middle;
}

button.calendar {
  text-align: center;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: #dddddd;
  border-radius: 8px;
  padding: 0;
  margin: 2px 0 2px 0;
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