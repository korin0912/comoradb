<template>
  <table class="sticky-table">
    <thead>
      <tr>
        <th colspan="4" class="pale">{{ "ゲーム (" + gameCount + ")" }}</th>
        <th colspan="5" class="dark">{{ "動画 (" + movieCount + ")" }}</th>
      </tr>
      <tr>
        <th class="pale game-id">#</th>
        <th class="pale game-name" colspan="2">タイトル</th>
        <th class="pale game-genres">ジャンル</th>
        <th class="dark movie-id">#</th>
        <th class="dark movie-name">タイトル</th>
        <th class="dark movie-date">公開日</th>
        <th class="dark movie-actors">出演</th>
        <th class="dark movie-chat">雑談</th>
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
            </td>
            <!-- リンク -->
            <td :rowspan="item.gameRow" class="text-center links">
              <div v-for="(url, urlIndex) in item.game.urls" :key="`url-${item.game.id}-${urlIndex}`" class="urlicon">
                <a :href="url" target="_blank" :class="'icon ' + common.getUrlIconClass(url)" />
              </div>
            </td>
            <!-- ジャンル -->
            <td :rowspan="item.gameRow">
              <span v-for="genre in item.game.genres" :key="genre.key" class="genre">
                {{ genre.name }}
              </span>
            </td>
          </template>
          <template v-else-if="item.nogame">
            <!-- ID -->
            <td :rowspan="item.gameRow" class="text-center nogame">
            </td>
            <!-- タイトル -->
            <td :rowspan="item.gameRow" class="nogame">
            </td>
            <!-- リンク -->
            <td :rowspan="item.gameRow" class="text-center links nogame">
            </td>
            <!-- ジャンル -->
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
            <!-- 公開日 -->
            <td :rowspan="item.movieRow" class="text-center">
              {{ item.movie.releaseDate }}
            </td>
            <!-- 出演者 -->
            <td :rowspan="item.movieRow" class="text-center">
              <div v-for="actor in item.movie.actors" :key="`actor-${actor.id}`" class="actoricon">
                <router-link :to="{ name: 'ActorShow', params: { actorId: actor.id } }"><i :title="actor.name" :class="`icon actor-${actor.id}`" /></router-link>
              </div>
            </td>
            <!-- 雑談 -->
            <td :rowspan="item.movieRow" class="text-center">
              <i v-if="item.movie.chat" class="icon check" />
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
  name: "TopPCTable",
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

td.links {
  width: 5%;
  padding: 2px 2px 2px 2px;
}

td.movie {
  font-size: 0.7rem;
}

td.actors {
  font-size: 0.6rem;
  width: 10%;
}

td.nogame {
  background-color: #dddddd;
}

div.urlicon {
  width: 17px;
  height: 17px;
  display: block;
  float: left;
  margin: 0 2px 2px 0;
}

div.actoricon {
  width: 17px;
  height: 17px;
  display: block;
  float: left;
  margin: 0 2px 2px 0;
}

span.genre {
  font-size: 0.6rem;
  border-radius: 5px 5px 5px 5px;
  border-style: none;
  background-color: var(--comora-color-yellow);
  color: #000000;
  margin: 1px 1px 0px 0px;
  padding: 1px 5px 0px 5px;
  display: inline-block;
}
</style>