<template>
  <table v-if="loaded" class="sticky-table">
    <thead>
      <tr>
        <th colspan="2" class="pale">
          {{ "ゲーム (" + gameCount + ")" }}
        </th>
        <th colspan="2" class="dark">
          {{ "動画 (" + movieCount + ")" }}
        </th>
      </tr>
      <tr>
        <th class="pale game-id">#</th>
        <th class="pale game-name">タイトル</th>
        <th class="dark movie-id">#</th>
        <th class="dark movie-name">タイトル</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="item in items">
        <tr v-if="item.game != null || item.movie != null" :key="item.key" class="text-upper">
          <!-- ゲーム -->
          <template v-if="item.game != null">
            <!-- ID -->
            <td :rowspan="item.gameRow" class="text-center">
              {{ item.game.id }}
            </td>
            <!-- タイトル -->
            <td :rowspan="item.gameRow">
              {{ item.game.name }}
              <div>
                <div v-for="(url, urlIndex) in item.game.urls" :key="`url-${item.game.id}-${urlIndex}`" class="urlicon">
                  <a :href="url" target="_blank" :class="'icon ' + common.getUrlIconClass(url)" />
                </div>
              </div>
            </td>
          </template>
          <!-- 動画 -->
          <template v-if="item.movie != null">
            <!-- ID -->
            <td :rowspan="item.movieRow" :class="`text-center ${item.game == null ? 'border-left-none' : ''}`">
              {{ item.movie.id }}
            </td>
            <!-- タイトル -->
            <td :rowspan="item.movieRow" class="movie">
              <a :href="item.movie.url" target="_blank">{{ item.movie.name }}</a>
            </td>
          </template>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
import common from "../Common/Common.js";
import top from "./Top.js";

export default {
  name: "TopMobileTable",
  props: ["filterParams"],
  data: function () {
    return {
      loaded: false,
      common: common,
      items: {},
      gameCount: 0,
      movieCount: 0,
    };
  },
  mounted: async function () {
    // テーブルアイテム
    let tableItems = await top.getTableItems(this.filterParams);
    this.items = tableItems.items;
    this.gameCount = tableItems.gameCount;
    this.movieCount = tableItems.movieCount;

    this.loaded = true;
  },
};
</script>

<style scoped>
th.game-id {
  width: 3%;
}

th.game-name {
  width: 47%;
}

th.movie-id {
  width: 3%;
}

th.movie-name {
  width: 47%;
}

td.movie {
  font-size: 0.7rem;
}

div.urlicon {
  width: 17px;
  height: 17px;
  display: block;
  float: left;
  margin: 0 3px 3px 0;
}
</style>