<template>
  <table class="sticky-table">
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
              <router-link :to="{ name: 'GameShow', params: { gameId: item.game.id } }">{{ item.game.id }}</router-link>
            </td>
            <!-- タイトル -->
            <td :rowspan="item.gameRow">
              {{ item.game.name }}
              <a v-if="('playListUrl' in item.game) && item.game.playListUrl" :href="item.game.playListUrl" target="_blank" class="icon playlist" />
              <div>
                <div v-for="(url, urlIndex) in item.game.urls" :key="`url-${item.game.id}-${urlIndex}`" class="urlicon">
                  <a :href="url" target="_blank" :class="'icon ' + common.getUrlIconClass(url)" />
                </div>
              </div>
            </td>
          </template>
          <template v-else-if="item.nogame">
            <!-- ID -->
            <td :rowspan="item.gameRow" class="text-center nogame">
            </td>
            <!-- タイトル -->
            <td :rowspan="item.gameRow" class="nogame">
            </td>
          </template>
          <!-- 動画 -->
          <template v-if="item.movie != null">
            <!-- ID -->
            <td :rowspan="item.movieRow" :class="`text-center ${item.game == null ? 'border-left-none' : ''}`">
              <router-link v-if="item.movie.id" :to="{ name: 'MovieShow', params: { movieId: item.movie.id } }">{{ item.movie.id }}</router-link>
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
    let tableItems = top.getTableItems(this.filterParams);

    return {
      common: common,
      items: tableItems.items,
      gameCount: tableItems.gameCount,
      movieCount: tableItems.movieCount,
    };
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

td.nogame {
  background-color: #dddddd;
}

div.urlicon {
  width: 17px;
  height: 17px;
  display: block;
  float: left;
  margin: 0 3px 3px 0;
}
</style>