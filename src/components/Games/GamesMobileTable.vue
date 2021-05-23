<template>
  <table class="table">
    <thead>
      <tr>
        <th colspan="2" class="pale first left">
          {{ "ゲーム (" + gameCount + ")" }}
        </th>
        <th colspan="2" class="dark first">
          {{ "動画 (" + movieCount + ")" }}
        </th>
      </tr>
      <tr>
        <th class="pale second left game-id">#</th>
        <th class="pale second game-name">タイトル</th>
        <th class="dark second movie-id">#</th>
        <th class="dark second movie-name">タイトル</th>
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
              <div>
                <a v-for="(url, urlIndex) in item.game.urls" :key="url.keyPrefix + urlIndex" :href="url.url" target="_blank" class="urlicon">
                  <template v-if="url.tag == 1">
                    <i :class="url.icon" />
                  </template>
                  <template v-else-if="url.tag == 2">
                    <img class="urlicon" :src="url.icon" />
                  </template>
                </a>
              </div>
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
          </template>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
import games from "./Games.js";

export default {
  name: "GamesMobileTable",
  props: [
    "filterParams"
  ],
  data: function () {
    // テーブルアイテム
    let tableItems = games.getTableItems(this.filterParams);
    return {
      items: tableItems.items,
      gameCount: tableItems.gameCount,
      movieCount: tableItems.movieCount,
    };
  },
};
</script>

<style scoped>
@import "./Games.css";

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
</style>