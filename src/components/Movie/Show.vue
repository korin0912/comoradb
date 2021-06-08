<template>
  <div v-if="loaded">
    <Header />
    <div class="container">
      <div :class="isMobile == false ? 'pc' : 'mobile'">
        <h2>{{ movie.name }}</h2>
        <table>
          <thead>
            <tr>
              <th class="pale">URL</th>
              <td>
                <a :href="movie.url" target="_blank" class="url">{{ movie.url }}</a>
              </td>
            </tr>
            <tr>
              <th class="pale">公開日</th>
              <td>{{ movie.releaseDate }}</td>
            </tr>
            <tr>
              <th class="pale">出演者</th>
              <td>
                <ul>
                  <li v-for="(actorId, index) in movie.actorIds" :key="'actor-' + index">
                    <router-link :to="{ name: 'ActorShow', params: { actorId: actorId } }">{{ actorsData[actorId].name }}</router-link>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th class="pale">雑談</th>
              <td><i v-if="movie.chat" class="icon check" /></td>
            </tr>
            <tr>
              <th class="pale">コメント</th>
              <td>{{ movie.comment }}</td>
            </tr>
          </thead>
        </table>
        <div v-if="isLocal && !isMobile" style="height: 21px; margin: 10px 0 10px 0">
          <button v-on:click="$router.push({ name: 'MovieEdit', params: { movieId: movieId } })" class="edit" />
        </div>
        <div style="margin: 10px 0 60px 0">
          <GameTable :gameIds="gameIds" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../Common/Header.vue";
import GameTable from "../Game/Table.vue";

import common from "../Common/Common.js";
import resources from "../Common/Resources.js";

export default {
  name: "MovieShow",
  components: {
    Header,
    GameTable,
  },
  data: function () {
    let isLocal = process.env.NODE_ENV == "development";
    let isMobile = common.isMobile();
    let movieId = this.$route.params.movieId;
    return {
      isLocal: isLocal,
      isMobile: isMobile,
      loaded: false,
      movieId: movieId,
      movie: {},
      gamesData: {},
      actorsDat: {},
      gameIds: [],
    };
  },
  mounted: async function () {
    let moviesData = await resources.getMoviesData();
    let gamesData = await resources.getGamesData();
    let actorsData = await resources.getActorsData();
    this.movie = moviesData[String(this.movieId)];
    this.gamesData = gamesData;
    this.actorsData = actorsData;

    this.movie.gameIds.forEach((gameId) => {
      this.gameIds.push(gameId);
    });

    this.loaded = true;
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 15% 70% 15%;
}

.pc {
  grid-column: 2 / 3;
}

.mobile {
  grid-column: 1 / 4;
}

table {
  width: 100%;
}

tr {
  width: 100%;
}

th {
  width: 20%;
}

td {
  width: 80%;
}

button.edit {
  float: right;
  margin-top: 4px;
}
</style>