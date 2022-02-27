<template>
  <div>
    <Header />
    <div class="container">
      <div :class="isMobile == false ? 'pc' : 'mobile'">
        <h2>{{ game.name }}</h2>
        <table>
          <thead>
            <tr>
              <th class="pale">URL</th>
              <td>
                <ul>
                  <li v-for="(url, index) in game.urls" v-bind:key="'url-' + index">
                    <a :href="url" target="_blank" class="url">{{ url }}</a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th class="pale">再生リストURL</th>
              <td>
                <ul>
                  <li v-if="('playListUrl' in game) && game.playListUrl">
                    <a :href="game.playListUrl" target="_blank" class="url">{{ game.playListUrl }}</a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th class="pale">ジャンル</th>
              <td>
                <ul>
                  <li v-for="(genreId, index) in game.genreIds" :key="'genre-' + index">
                    {{ gameGenresData[genreId] }}
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th class="pale">コメント</th>
              <td>{{ game.comment }}</td>
            </tr>
          </thead>
        </table>
        <div v-if="isLocal && !isMobile" style="height: 21px; margin: 10px 0 10px 0">
          <button v-on:click="$router.push({ name: 'GameEdit', params: { gameId: gameId } })" class="edit" style="float: right" />
        </div>
        <div style="margin: 10px 0 60px 0">
          <MovieTable :movieIds="movieIds" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../Common/Header.vue";
import MovieTable from "../Movie/Table.vue";

import common from "../Common/Common.js";
import resources from "../Common/Resources.js";

export default {
  name: "GameShow",
  components: {
    Header,
    MovieTable,
  },
  data: function () {
    let isLocal = process.env.NODE_ENV == "development";
    let isMobile = common.isMobile();
    let gameId = this.$route.params.gameId;

    let gamesData = resources.getGamesData();
    let gameGenresData = resources.getGameGenresData();

    let movieIds = [];
    let moviesData = resources.getMoviesData();
    Object.keys(moviesData).forEach((movieId) => {
      if (moviesData[movieId].gameIds.findIndex((id) => id == gameId) != -1) {
        movieIds.push(movieId);
      }
    });

    return {
      isLocal: isLocal,
      isMobile: isMobile,
      gameId: gameId,
      game: gamesData[String(gameId)],
      gameGenresData: gameGenresData,
      movieIds: movieIds,
    };
  },
  mounted: async function () {
    await resources.execute();
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
</style>