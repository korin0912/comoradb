<template>
  <div v-if="loaded">
    <table>
      <thead>
        <tr>
          <th class="dark id">#</th>
          <th class="dark name">タイトル</th>
          <th class="dark releaseDate">公開日</th>
          <th class="dark actors">出演者</th>
          <th class="dark chat">雑談</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(movie, index) in movies" :key="'movie-' + index">
          <td class="text-center"><router-link :to="{ name: 'MovieShow', params: { movieId: movie.id } }">{{ movie.id }}</router-link></td>
          <td><a :href="movie.data.url" target="_blank">{{ movie.data.name }}</a></td>
          <td class="text-center">{{ movie.data.releaseDate }}</td>
          <td class="text-center">
            <div v-for="actorId in movie.data.actorIds" :key="`actor-${actorId}`" class="actoricon">
              <router-link :to="{ name: 'ActorShow', params: { actorId: actorId}}"><i :title="actorsData[actorId].name" :class="`icon actor-${actorId}`" /></router-link>
            </div>
          </td>
          <td class="text-center"><i v-if="movie.data.chat" class="icon check" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import resources from "../Common/Resources.js";

export default {
  name: "MovieTable",
  props: ["movieIds"],
  data: function () {
    return {
      loaded: false,
      movies: {},
      gamesData: {},
      actorsDat: {},
    };
  },
  mounted: async function () {
    let moviesData = await resources.getMoviesData();
    let actorsData = await resources.getActorsData();
    this.movies = this.movieIds.map(movieId => {
      return {
        id: movieId,
        data: moviesData[String(movieId)],
      };
    });
    this.actorsData = actorsData;
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

th.releaseDate {
  width: 10%;
}

th.actors {
  width: 5%;
}

th.chat {
  width: 5%;
}

button.edit {
  float: right;
  margin-top: 4px;
}

div.actoricon {
  width: 17px;
  height: 17px;
  display: block;
  float: left;
  margin: 0 2px 2px 0;
}
</style>