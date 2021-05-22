<template>
  <div class="container">
    <!-- メインテーブル -->
    <div class="main">
      <table class="table">
        <thead>
          <tr>
            <th colspan="4" class="pale first left">
              {{ "ゲーム (" + gameCount + ")" }}
            </th>
            <th colspan="5" class="dark first">
              {{ "動画 (" + movieCount + ")" }}
            </th>
          </tr>
          <tr>
            <th class="pale second left game-id">#</th>
            <th class="pale second game-name" colspan="2">タイトル</th>
            <th class="pale second game-genres">ジャンル</th>
            <th class="dark second movie-id">#</th>
            <th class="dark second movie-name">タイトル</th>
            <th class="dark second movie-date">公開日</th>
            <th class="dark second movie-actors">出演</th>
            <th class="dark second movie-chat">雑談</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item in items">
            <tr v-if="item.game != null || item.movie != null" :key="item.key" class="text-upper">
              <!-- ゲーム -->
              <template v-if="item.game != null">
                <!-- ID -->
                <td :rowspan="item.gameRow" class="text-center left">
                  {{ item.game.id }}
                </td>
                <!-- タイトル -->
                <td :rowspan="item.gameRow">
                  {{ item.game.name }}
                </td>
                <!-- リンク -->
                <td :rowspan="item.gameRow" class="text-center links">
                  <a v-for="(url, urlIndex) in item.game.urls" :key="url.keyPrefix + urlIndex" :href="url.url" target="_blank" class="icon">
                    <template v-if="url.tag == 1">
                      <i :class="url.icon" />
                    </template>
                    <template v-else-if="url.tag == 2">
                      <img class="urlicon" :src="url.icon" />
                    </template>
                  </a>
                </td>
                <!-- ジャンル -->
                <td :rowspan="item.gameRow" class="genres">
                  <span v-for="genre in item.game.genres" :key="genre.key" class="genre">
                    {{ genre.name }}
                  </span>
                </td>
              </template>
              <!-- 動画 -->
              <template v-if="item.movie != null">
                <!-- ID -->
                <td :rowspan="item.movieRow" class="text-center">
                  {{ item.movie.id }}
                </td>
                <!-- タイトル -->
                <td :rowspan="item.movieRow" class="movie">
                  <a :href="item.movie.url" target="_blank">{{ item.movie.name }}</a>
                </td>
                <!-- 公開日 -->
                <td :rowspan="item.movieRow" class="text-center">
                  {{ item.movie.releaseDate }}
                </td>
                <!-- 出演者 -->
                <td :rowspan="item.movieRow" class="text-center">
                  <img v-for="actor in item.movie.actors" :key="actor.key" :src="actor.icon" :title="actor.name" class="actor" />
                </td>
                <!-- 雑談 -->
                <td :rowspan="item.movieRow" class="text-center">
                  <i v-if="item.movie.chat" class="fas fa-check fa-lg checkmark" />
                </td>
              </template>
            </tr>
          </template>
        </tbody>
      </table>
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
            <label :for="'filter-actor-' + actor.id" class="filter-checkbox">{{ actor.name }}</label>
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
          <label class="caption">ゲームジャンル</label>
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

export default {
  name: "GamesPC",
  props: ["data"],
  data: function () {
    return {
      items: this.data.items,
      gameCount: this.data.gameCount,
      movieCount: this.data.movieCount,
      filterParams: this.data.filterParams,
    };
  },
  methods: {
    filterTable: function () {
      console.clear();
      this.filterParams = games.updateFilterParams(this.filterParams);
      let tableItems = games.getTableItems(this.filterParams);
      this.items = tableItems.items;
      this.gameCount = tableItems.gameCount;
      this.movieCount = tableItems.movieCount;
    },
    getResetIcon: common.getResetIcon,
    resetInput: function (filter) {
      console.clear();
      this.filterParams = games.resetFilterParamsInput(this.filterParams, filter);
      let tableItems = games.getTableItems(this.filterParams);
      this.items = tableItems.items;
      this.gameCount = tableItems.gameCount;
      this.movieCount = tableItems.movieCount;
    },
  },
};
</script>

<style scoped>
.container {
  margin-left: auto;
  margin-right: auto;
  max-width: 1600px;
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

th.game-id {
  width: 3%;
}

th.game-name {
  width: 32%;
}

th.game-genres {
  width: 10%;
}

th.movie-id {
  width: 3%;
}

th.movie-name {
  width: 40%;
}

th.movie-date {
  width: 5%;
}

th.movie-actors {
  width: 4%;
}

th.movie-chat {
  width: 3%;
}

div.filter-box {
  position: relative;
  font-size: 13px;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: #dddddd;
  margin: 0px 10px 10px 10px;
  padding: 13px 10px 10px 10px;
}

div.filter-box-outline {
  padding: 13px 0px 0px 0px;
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
  width: calc(100% - 8px - 23px);
  margin: 0;
  padding: 2px;
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
  width: calc(100% - 8px - 23px);
  margin: 0;
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