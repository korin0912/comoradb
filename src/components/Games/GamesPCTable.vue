<template>
  <table>
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
              <div v-if="isLocal">
                <router-link :to="{ name: 'GameEdit', params: { gameId: item.game.id } }">{{ item.game.id }}</router-link>
              </div>
              <div v-else>
                {{ item.game.id }}
              </div>
            </td>
            <!-- タイトル -->
            <td :rowspan="item.gameRow">
              {{ item.game.name }}
            </td>
            <!-- リンク -->
            <td :rowspan="item.gameRow" class="text-center links">
              <div v-for="(url, urlIndex) in item.game.urls" :key="`url-${item.game.id}-${urlIndex}`" class="urlicon">
                <a :href="url" target="_blank" :class="'icon ' + common.getUrlIconClass(url)" />
              </div>
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
              <div v-if="isLocal">
                <router-link :to="{ name: 'MovieEdit', params: { movieId: item.movie.id } }">{{ item.movie.id }}</router-link>
              </div>
              <div v-else>
                {{ item.movie.id }}
              </div>
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
                <i :title="actor.name" :class="`icon actor-${actor.id}`" />
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
import games from "./Games.js";

export default {
  name: "GamesPCTable",
  props: ["filterParams"],
  data: function () {
    let isLocal = process.env.NODE_ENV == "development";
    // テーブルアイテム
    let tableItems = games.getTableItems(this.filterParams);
    return {
      common: common,
      isLocal: isLocal,
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

</style>