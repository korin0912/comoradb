<template>
  <div v-if="loaded" class="container">
    <Header />
    <h2>{{ game.name }}</h2>
    <table>
      <thead>
        <tr>
          <th class="pale">URL</th>
          <td>
            <li v-for="(url, index) in game.urls" v-bind:key="'url-' + index">
              {{ url }}
            </li>
          </td>
        </tr>
        <tr>
          <th class="pale">ジャンル</th>
          <td>
            <li v-for="(genreId, index) in game.genreIds" :key="'genre-' + index">
              {{ gameGenresData[genreId] }}
            </li>
          </td>
        </tr>
        <tr>
          <th class="pale">コメント</th>
          <td>{{ game.comment }}</td>
        </tr>
      </thead>
    </table>
    <div style="height: 60px">
      <router-link v-if="isLocal" :to="{ name: 'GameEdit', params: { gameId: gameId } }"><button class="create">編集</button></router-link>
      <button v-on:click="$router.go(-1)" class="cancel">戻る</button>
    </div>
  </div>
</template>

<script>
import Header from "../Common/Header.vue";

import resources from "../Common/Resources.js";

export default {
  name: "GameShow",
  components: {
    Header,
  },
  data: function () {
    let isLocal = process.env.NODE_ENV == "development";
    let gameId = this.$route.params.gameId;
    return {
      isLocal: isLocal,
      loaded: false,
      gameId: gameId,
      game: {},
      gameGenresData: {},
    };
  },
  mounted: async function () {
    let gamesData = await resources.getGamesData();
    let gameGenresData = await resources.getGameGenresData();
    this.game = gamesData[String(this.gameId)];
    this.gameGenresData = gameGenresData;
    this.loaded = true;
  },
};
</script>

<style scoped>
.container {
  /* width: 1000px; */
  width: 100%;
  margin: 0 auto 0 auto;
}

table {
  width: 100%;
}

tr {
  width: 100%;
}

th {
  width: 50%;
}

td {
  width: 50%;
}

button.create {
  float: left;
  background-color: var(--comora-color-pale-purple);
  margin: 4px 0 0 0;
  border-width: 1px;
  border-style: solid;
  border-color: #dddddd;
  border-radius: 8px;
}

button.cancel {
  float: right;
  background-color: var(--comora-color-dirk-purple);
  margin: 4px 0 0 0;
  border-width: 1px;
  border-style: solid;
  border-color: #dddddd;
  border-radius: 8px;
}
</style>