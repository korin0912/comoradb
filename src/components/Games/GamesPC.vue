<template>
  <div class="container">
    <!-- メインテーブル -->
    <div class="main">
      <GamesTable :key="resetKey" :filterParams="filterParams" />
    </div>
    <!-- サイドバー -->
    <div class="sidebar">
      <div class="filter-box filter-box-outline">
        <label class="caption">フィルター</label>
        <!-- テキスト -->
        <div class="filter-box">
          <label class="caption">テキスト</label>
          <input v-on:input="filterTable" v-model="filterParams.text" placeholder="" class="filter-text" />
          <button v-on:click="resetInput('text')" class="reset"><i :class="getResetIcon()" /></button>
        </div>
        <!-- 出演者 -->
        <div class="filter-box">
          <label class="caption">出演者</label>
          <div v-for="actor in filterParams.actors" :key="'filter-actor-' + actor.id" class="filter-checkbox">
            <input type="checkbox" :id="'filter-actor-' + actor.id" v-on:change="filterTable" v-model="actor.check" class="filter-checkbox" />
            <label :for="'filter-actor-' + actor.id" class="filter-checkbox">
              <router-link :to="{ name: 'Actors', query: { actorId: actor.id } }" target="_blank">{{ actor.name }}</router-link>
            </label>
          </div>
        </div>
        <!-- 公開日 -->
        <div class="filter-box">
          <label class="caption">公開日</label>
          <div>
            <input type="date" id="filter-date-from" v-on:change="filterTable" v-model="filterParams.releaseDates.from" class="filter-date" />
            <button v-on:click="resetInput('releaseDateFrom')" class="reset"><i :class="getResetIcon()" /></button>
          </div>
          <span>～</span>
          <div>
            <input type="date" id="filter-date-to" v-on:change="filterTable" v-model="filterParams.releaseDates.to" class="filter-date" />
            <button v-on:click="resetInput('releaseDateTo')" class="reset"><i :class="getResetIcon()" /></button>
          </div>
        </div>
        <!-- ジャンル -->
        <div class="filter-box">
          <label class="caption">ジャンル</label>
          <div v-for="genre in filterParams.genres" :key="'filter-genre-' + genre.id" class="filter-checkbox">
            <input type="checkbox" :id="'filter-genre-' + genre.id" v-on:change="filterTable" v-model="genre.check" class="filter-checkbox" />
            <label :for="'filter-genre-' + genre.id" class="filter-checkbox">{{ genre.name }}</label>
          </div>
        </div>
        <!-- 雑談 -->
        <div class="filter-box">
          <label class="caption">その他</label>
          <div class="filter-checkbox">
            <input type="checkbox" :id="'filter-chat'" v-on:change="filterTable" v-model="filterParams.chat" class="filter-checkbox" />
            <label :for="'filter-chat'" class="filter-checkbox">雑談のみ</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import common from "../Common/Common.js";
import games from "./Games.js";
import GamesTable from "./GamesPCTable.vue";

export default {
  name: "GamesPC",
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
  methods: {
    filterTable: function () {
      console.clear();
      this.filterParams = games.updateFilterParams(this.filterParams);
      this.resetKey ++;
    },
    resetInput: function (filter) {
      console.clear();
      this.filterParams = games.resetFilterParamsInput(this.filterParams, filter);
      this.resetKey ++;
    },
    getResetIcon: common.getResetIcon,
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

div.filter-box {
  position: relative;
  font-size: 13px;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: #c1abd2;
  margin: 0px 10px 10px 10px;
  padding: 13px 10px 10px 10px;
}

div.filter-box-outline {
  padding: 13px 0px 0px 0px;
  border-color: #8457a8;
}

div.filter-box .caption {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1em;
  padding: 0 1em;
  margin: 0;
  background-color: white;
  transform: translateY(-50%) translateX(1em);
}

input.filter-text {
  width: calc(100% - 6px - 23px);
  margin: 0;
  padding: 2px;
  border-radius: 4px 4px 4px 4px;
  border-width: 1px;
  border-color: #aaaaaa;
  border-style: solid;
}

div.filter-checkbox {
  text-align: left;
  width: 100%;
  margin: 0;
}

input.filter-checkbox {
  margin: 0px 3px 0px 0px;
}

label.filter-checkbox {
  font-size: 0.8rem;
  font-weight: 200;
  vertical-align: top;
}

input.filter-date {
  text-align: left;
  width: calc(100% - 6px - 23px);
  margin: 0;
  border-radius: 4px 4px 4px 4px;
  border-width: 1px;
  border-color: #aaaaaa;
  border-style: solid;
}

button.reset {
  width: 21px;
  height: 21px;
  margin: 0 0 0 2px;
  border-color: #ffffff;
  background-color: #ffffff;
  border-style: solid;
  padding: 0;
  content: "f057";
}

i.reset {
  vertical-align: middle;
}
</style>