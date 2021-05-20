<template>
  <div class="container">
    <div class="main">
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
            <th class="pale second left game-id">##</th>
            <th class="pale second game-name">タイトル</th>
            <th class="dark second movie-id">##</th>
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
                    <a v-for="(url, urlIndex) in item.game.urls" :key="url.keyPrefix + urlIndex" :href="url.url" target="_blank" class="icon">
                      <template v-if="url.tag == 1">
                        <i :class="url.icon" />
                      </template>
                      <template v-else-if="url.tag == 2">
                        <img class="urlicon" :src="url.icon" />
                      </template>
                    </a>
                  </div>
                </td>
                <!-- リンク -->
                <!-- <td :rowspan="item.gameRow" class="text-center links">
                  <a v-for="(url, urlIndex) in item.game.urls" :key="url.keyPrefix + urlIndex" :href="url.url" target="_blank">
                    <template v-if="url.tag == 1">
                      <i :class="url.icon" />
                    </template>
                    <template v-else-if="url.tag == 2">
                      <img class="urlicon" :src="url.icon" />
                    </template>
                  </a>
                </td> -->
                <!-- ジャンル -->
                <!-- <td :rowspan="item.gameRow" class="genres">
                  <span v-for="genre in item.game.genres" :key="genre.key" class="genre">
                    {{ genre.name }}
                  </span>
                </td> -->
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
                <!-- <td :rowspan="item.movieRow" class="text-center">
                  {{ item.movie.releaseDate }}
                </td> -->
                <!-- 出演者 -->
                <!-- <td :rowspan="item.movieRow" class="text-center">
                  <img v-for="actor in item.movie.actors" :key="actor.key" :src="actor.icon" :title="actor.name" class="actor" />
                </td> -->
                <!-- 雑談 -->
                <!-- <td :rowspan="item.movieRow" class="text-center">
                  <i v-if="item.movie.chat" class="fas fa-check fa-lg checkmark" />
                </td> -->
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import games from "./Games.js";

export default {
  name: "GamesMobile",
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
  max-width: 1600px;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 100%;
  grid-template-areas: "box1";
}

.main {
  grid-area: box1;
}

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