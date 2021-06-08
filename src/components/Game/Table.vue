<template>
  <div v-if="loaded">
    <table>
      <thead>
        <tr>
          <th class="dark id">#</th>
          <th class="dark name">タイトル</th>
          <th class="dark urls">URL</th>
          <th class="dark genres">ジャンル</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(game, index) in games" :key="'game-' + index">
          <td class="text-center"><router-link :to="{ name: 'GameShow', params: { gameId: game.id } }">{{ game.id }}</router-link></td>
          <td>{{ game.data.name }}</td>
          <td>
            <div v-for="(url, index) in game.data.urls" :key="`url-` + index" class="urlicon">
              <a :href="url" target="_blank" :class="'icon ' + common.getUrlIconClass(url)" />
            </div>
          </td>
          <td><span v-for="(genreId) in game.data.genreIds" :key="'genre-' + genreId" class="genre">{{ gameGenresData[genreId] }}</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import common from "../Common/Common.js";
import resources from "../Common/Resources.js";

export default {
  name: "GameTable",
  props: ["gameIds"],
  data: function () {
    return {
      loaded: false,
      games: {},
      gameGenresData: {},
      common: common,
    };
  },
  mounted: async function () {
    let gamesData = await resources.getGamesData();
    let gameGenresData = await resources.getGameGenresData();
    this.games = this.gameIds.map(gameId => {
      return {
        id: gameId,
        data: gamesData[String(gameId)],
      };
    });
    this.gameGenresData = gameGenresData;
    this.loaded = true;
  },
};
</script>

<style scoped>
table {
  width: 100%;
}

tr {
  width: 100%;
}

th {
  width: 100%;
}

th.id {
  width: 5%;
}

th.name {
  width: 75%;
}

th.urls {
  width: 5%;
}

th.genres {
  width: 15%;
}

div.urlicon {
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