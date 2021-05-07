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
              <th class="pale second" colspan="2">タイトル</th>
              <th class="pale second">ジャンル</th>
              <th class="dark second">#</th>
              <th class="dark second">タイトル</th>
              <th class="dark second">公開日</th>
              <th class="dark second">出演</th>
              <th class="dark second">雑談</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, itemIndex) in items" :key="itemIndex">
              <!-- ゲーム -->
              <template v-if="item.game != null">
                <td :rowspan="item.gameRow" class="text-upper text-center left">
                  {{ item.game.id }}
                </td>
                <td :rowspan="item.gameRow" class="text-upper">
                  {{ item.game.name }}
                </td>
                <td :rowspan="item.gameRow" class="text-upper text-center">
                  <a
                    v-for="(url, urlIndex) in item.game.urls"
                    :key="urlIndex"
                    :href="url.url"
                    target="_blank"
                  >
                    <i :class="url.icon + ' fa-lg urlicon'" />
                  </a>
                </td>
                <td :rowspan="item.gameRow" class="text-upper genres">
                  <span
                    v-for="(genre, genreIndex) in item.game.genres"
                    :key="'genre-' + genreIndex"
                    class="genre"
                  >
                    {{ genre }}
                  </span>
                </td>
              </template>
              <!-- 動画 -->
              <template v-if="item.movie != null">
                <td :rowspan="item.movieRow" class="text-upper text-center">
                  {{ item.movie.id }}
                </td>
                <td :rowspan="item.movieRow" class="text-upper movie">
                  <a :href="item.movie.url" target="_blank">{{
                    item.movie.name
                  }}</a>
                </td>
                <td :rowspan="item.movieRow" class="text-upper text-center">
                  {{ item.movie.releaseDate }}
                </td>
                <td :rowspan="item.movieRow" class="text-upper text-center">
                  <img
                    v-for="(actor, actorIndex) in item.movie.actors"
                    :key="'actor_' + actorIndex"
                    :src="require('../assets/actor_' + actor.id + '.png')"
                    :title="actor.name"
                    class="actor"
                  />
                </td>
                <td :rowspan="item.movieRow">
                  <div class="text-upper text-center">
                    <i
                      v-if="item.movie.chat"
                      class="fas fa-check fa-lg check"
                    />
                  </div>
                </td>
              </template>
            </tr>
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
    // まず、1行で1ゲーム1動画のリストを作成
    // そのあとで、連続して重複するゲーム/動画を潰す

    // 1行で1ゲーム1動画のリスト作成
    let items = [];
    Object.keys(gamesData)
      .sort(function (a, b) {
        return Number(a) - Number(b);
      })
      .forEach((gameId) => {
        // ゲーム作成
        var gameData = gamesData[gameId];
        let game = {
          id: gameId,
          name: gameData.name,
          urls: gameData.urls.map((url) => {
            return {
              url: url,
              icon: get_url_icon_class(get_url_type(url)),
            };
          }),
          genres: gameData.genreIds.map((genreId) => gameGenresData[genreId]),
        };

        // ゲームに対応しての動画のリスト作成
        let isPushItems = false;
        Object.keys(moviesData).forEach((movieId) => {
          var movieData = moviesData[movieId];
          if (movieData.gameIds.find((id) => gameId == id) == null) {
            return;
          }

          let date = movieData.releaseDate.split("/");
          let movie = {
            id: movieId,
            releaseDate:
              date[0] +
              "/" +
              ("0" + date[1]).slice(-2) +
              "/" +
              ("0" + date[2]).slice(-2),
            name: movieData.name,
            url: movieData.url,
            actors: movieData.actorIds.map((actorId) => {
              return {
                id: actorId,
                name: actorsData[actorId].name,
              };
            }),
            chat: movieData.chat,
          };

          items.push({
            gameRow: 1,
            game: game,
            movieRow: 1,
            movie: movie,
          });

          isPushItems = true;
        });

        // 動画がないことはおそらく無いはずだけど、ガードとして
        if (!isPushItems) {
          items.push({
            gameRow: 1,
            game: game,
            movieRow: 1,
            movie: {
              id: "",
              releaseDate: "",
              name: "",
              url: "",
              actors: [],
              chat: false,
            },
          });
        }
      });

    // 連続して重複するゲームを潰す
    let prevItem = null;
    let prevId = -1;
    items.forEach((item) => {
      if (item.game.id != prevId) {
        prevItem = item;
        prevId = item.game.id;
      } else {
        prevItem.gameRow++;
        item.game = null;
      }
    });

    // 連続して重複する動画を潰す
    prevItem = null;
    prevId = -1;
    items.forEach((item) => {
      if (item.movie.id != prevId) {
        prevItem = item;
        prevId = item.movie.id;
      } else {
        prevItem.movieRow++;
        item.movie = null;
      }
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
