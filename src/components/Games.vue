<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <table class="table">
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
              <th class="pale second left">#</th>
              <th class="pale second">タイトル</th>
              <th class="pale second">リンク</th>
              <th class="pale second">ジャンル</th>
              <th class="dark second">#</th>
              <th class="dark second">公開日</th>
              <th class="dark second">タイトル</th>
              <th class="dark second">出演</th>
              <th class="dark second">雑談</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, itemIndex) in items">
              <template v-for="(movie, movieIndex) in item.movies">
                <tr :key="itemIndex + '_' + movieIndex">
                  <template v-if="movieIndex == 0">
                    <td
                      :rowspan="item.movies.length"
                      class="text-upper text-center left"
                    >
                      {{ item.game.id }}
                    </td>
                    <td :rowspan="item.movies.length" class="text-upper">
                      {{ item.game.name }}
                    </td>
                    <td
                      :rowspan="item.movies.length"
                      class="text-upper text-center"
                    >
                      <a
                        v-for="(url, urlIndex) in item.game.urls"
                        :key="urlIndex"
                        :href="url.url"
                        target="_blank"
                      >
                        <i :class="url.icon + ' fa-lg urlicon'" />
                      </a>
                    </td>
                    <td :rowspan="item.movies.length" class="text-upper genres">
                      <span
                        v-for="(genre, genreIndex) in item.game.genres"
                        :key="'genre-' + genreIndex"
                        class="genre"
                      >
                        {{ genre }}
                      </span>
                    </td>
                  </template>
                  <td class="text-upper text-center">{{ movie.id }}</td>
                  <td class="text-upper text-center">
                    {{ movie.releaseDate }}
                  </td>
                  <td class="text-upper movie">
                    <a :href="movie.url" target="_blank">{{ movie.name }}</a>
                  </td>
                  <td class="text-upper text-center">
                    <img
                      v-for="(actor, actorIndex) in movie.actors"
                      :key="'actor_' + actorIndex"
                      :src="require('../assets/actor_' + actor.id + '.png')"
                      :title="actor.name"
                      class="actor"
                    />
                  </td>
                  <td>
                    <div class="text-upper text-center">
                      <i v-if="movie.chat" class="fas fa-check fa-lg check" />
                    </div>
                  </td>
                </tr>
              </template>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import gamesData from "../assets/Games.json";
import gameGenresData from "../assets/GameGenres.json";
import moviesData from "../assets/Movies.json";
import actorsData from "../assets/Actors.json";

export default {
  name: "Games",
  data: function () {
    // テーブル要素リスト作成
    let items = [];
    Object.keys(gamesData)
      .sort(function (a, b) {
        return Number(a) - Number(b);
      })
      .forEach((key) => {
        var game = gamesData[key];
        let item = {};

        // ゲーム
        item.game = {};
        item.game.id = key;
        item.game.name = game.name;
        item.game.urls = [];
        game.urls.forEach((url) => {
          let type = get_url_type(url);
          item.game.urls.push({
            url: url,
            icon: get_url_icon_class(type),
          });
        });
        item.game.genres = game.genreIds.map(
          (genreId) => gameGenresData[genreId]
        );

        // 動画
        item.movies = [];
        Object.keys(moviesData).forEach((movieId) => {
          var movie = moviesData[movieId];
          if (movie.gameIds.find((gameId) => key == gameId) == null) {
            return;
          }

          let date = movie.releaseDate.split("/");
          item.movies.push({
            id: movieId,
            releaseDate:
              date[0] +
              "/" +
              ("0" + date[1]).slice(-2) +
              "/" +
              ("0" + date[2]).slice(-2),
            name: movie.name,
            url: movie.url,
            actors: movie.actorIds.map((actorId) => {
              return {
                id: actorId,
                name: actorsData[actorId].name,
              };
            }),
            chat: movie.chat,
          });
        });
        if (item.movies.length <= 0) {
          // 動画が空はおそらく無いはずだけど、ガードとして
          item.movies.push({
            id: "",
            releaseDate: "",
            name: "",
            url: "",
            actors: "",
            chat: false,
          });
        }

        // 追加
        items.push(item);
      });

    // console.log(items);

    return {
      items: items,
      gameCount: Object.keys(gamesData).length,
      movieCount: Object.keys(moviesData).length,
    };
  },
};

function get_url_type(url) {
  if (url.indexOf("store.steampowered.com") != -1) {
    return 2;
  } else if (url.indexOf("twitter.com") != -1) {
    return 3;
  } else if (url.indexOf("www.facebook.com") != -1) {
    return 4;
  } else {
    return 1;
  }
}

function get_url_icon_class(type) {
  switch (type) {
    case 1:
      return "fas fa-home fa-lg urlicon home";
    case 2:
      return "fab fa-steam fa-lg urlicon steam";
    case 3:
      return "fab fa-twitter-square fa-lg urlicon twitter";
    case 4:
      return "fab fa-facebook-square fa-lg urlicon facebook";
  }
}
</script>

<style scoped>
</style>
