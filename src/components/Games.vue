<template>
  <div class="container">
    <div class="main">
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
            <tr v-if="item.game != null || item.movie != null" :key="item.key">
              <!-- ゲーム -->
              <template v-if="item.game != null">
                <td :rowspan="item.gameRow" class="text-upper text-center left">
                  {{ item.game.id }}
                </td>
                <td :rowspan="item.gameRow" class="text-upper">
                  {{ item.game.name }}
                </td>
                <td :rowspan="item.gameRow" class="text-upper text-center links">
                  <a v-for="(url, urlIndex) in item.game.urls" :key="url.keyPrefix + urlIndex" :href="url.url" target="_blank">
                    <template v-if="url.tag == 1">
                      <i :class="url.icon" />
                    </template>
                    <template v-else-if="url.tag == 2">
                      <img class="urlicon" :src="url.icon" />
                    </template>
                  </a>
                </td>
                <td :rowspan="item.gameRow" class="text-upper genres">
                  <span v-for="genre in item.game.genres" :key="genre.key" class="genre">
                    {{ genre.name }}
                  </span>
                </td>
              </template>
              <!-- 動画 -->
              <template v-if="item.movie != null">
                <td :rowspan="item.movieRow" class="text-upper text-center">
                  {{ item.movie.id }}
                </td>
                <td :rowspan="item.movieRow" class="text-upper movie">
                  <a :href="item.movie.url" target="_blank">{{ item.movie.name }}</a>
                </td>
                <td :rowspan="item.movieRow" class="text-upper text-center">
                  {{ item.movie.releaseDate }}
                </td>
                <td :rowspan="item.movieRow" class="text-upper text-center">
                  <img v-for="actor in item.movie.actors" :key="actor.key" :src="actor.icon" :title="actor.name" class="actor" />
                </td>
                <td :rowspan="item.movieRow">
                  <div class="text-upper text-center">
                    <i v-if="item.movie.chat" class="fas fa-check fa-lg check" />
                  </div>
                </td>
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div class="sidebar">
      <div class="filter-box">
        <input v-on:input="filterTable" v-model="filterParams.text" placeholder="テキストフィルター" class="filter-text" />
      </div>
      <div class="filter-box">
        <div v-for="actor in filterParams.actors" :key="'filter-actor-' + actor.id" class="filter-checkbox">
          <input type="checkbox" :id="'filter-actor-' + actor.id" v-on:change="filterTable" v-model="actor.check" class="filter-checkbox" />
          <label :for="'filter-actor-' + actor.id" class="filter-checkbox">{{ actor.name }}</label>
        </div>
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
    console.clear();
    let tableItems = getTableItems({});
    let filterParams = getInitialFilterParams();
    return {
      items: tableItems.items,
      gameCount: tableItems.gameCount,
      movieCount: tableItems.movieCount,
      filterParams: filterParams,
    };
  },
  methods: {
    filterTable: function () {
      console.clear();
      let tableItems = getTableItems(this.filterParams);
      this.items = tableItems.items;
      this.gameCount = tableItems.gameCount;
      this.movieCount = tableItems.movieCount;
    },
  },
};

/**
 * テーブルのオリジナルデータアイテム
 */
let tableOriginalItems = null;

/**
 * テーブルのオリジナルアイテム取得
 */
function getTableOriginalItems() {
  if (tableOriginalItems == null) {
    tableOriginalItems = [];
    Object.keys(gamesData)
      .sort(function (a, b) {
        return Number(a) - Number(b);
      })
      .forEach((gameId) => {
        // ゲーム作成
        let gameData = gamesData[gameId];
        let game = {
          id: gameId,
          name: gameData.name,
          urls: gameData.urls.map((url) => {
            let icontype = getUrlType(url);
            return {
              keyPrefix: "url-" + gameId + "-",
              url: url,
              icon: getUrlIcon(icontype),
              tag: getUrlTagType(icontype),
            };
          }),
          genres: gameData.genreIds.map((genreId) => {
            return {
              key: "genre-" + genreId,
              name: gameGenresData[genreId],
            };
          }),
        };

        // ゲームに対応しての動画のリスト作成
        let isPushItems = false;
        Object.keys(moviesData).forEach((movieId) => {
          let movieData = moviesData[movieId];
          if (movieData.gameIds.find((id) => gameId == id) == null) {
            return;
          }

          let date = movieData.releaseDate.split("/");
          let movie = {
            id: movieId,
            releaseDate: date[0] + "/" + ("0" + date[1]).slice(-2) + "/" + ("0" + date[2]).slice(-2),
            name: movieData.name,
            url: movieData.url,
            actors: movieData.actorIds.map((actorId) => {
              return {
                id: actorId,
                key: "actor-" + actorId,
                icon: require("../assets/actor_" + actorId + ".png"),
                name: actorsData[actorId].name,
              };
            }),
            chat: movieData.chat,
          };

          tableOriginalItems.push({
            key: "games-" + tableOriginalItems.length,
            gameRow: 1,
            game: game,
            movieRow: 1,
            movie: movie,
          });

          isPushItems = true;
        });

        // 動画がないことはおそらく無いはずだけど、ガードとして
        if (!isPushItems) {
          tableOriginalItems.push({
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
  }

  // 呼び出し元で加工されるので、ディープコピーを返す
  return JSON.parse(JSON.stringify(tableOriginalItems));
}

/**
 * テーブルアイテム取得
 */
function getTableItems(filterParams) {
  // テーブル要素リスト作成
  // まず、1行で1ゲーム1動画のリストを作成
  // そのあとで、連続して重複するゲーム/動画を潰す
  // console.log("get table data");

  // 1行で1ゲーム1動画のリスト作成
  let items = getTableOriginalItems();
  // console.log(items);

  // フィルター
  // console.log(filterParams);
  let filterText = null;
  if ("text" in filterParams && filterParams.text != null && filterParams.text != "") {
    filterText = filterParams.text.toLowerCase();
  }

  let filterActors = null;
  if ("actors" in filterParams) {
    filterActors = filterParams.actors.filter((actor) => actor.check).map((actor) => actor.id);
    // console.log(filterActors);
  }

  items = items.map((item) => {
    let del = false;
    // テキスト
    if (filterText != null) {
      if (item.game.name.toLowerCase().indexOf(filterText) <= -1 && item.movie.name.toLowerCase().indexOf(filterText) <= -1) {
        del = true;
      }
    }

    // 出演者
    if (filterActors != null) {
      if (item.movie.actors.filter((actor) => filterActors.some((id) => id == actor.id)).length <= 0) {
        del = true;
      }
    }

    // フィルターされた要素を無効化
    if (del) {
      item.game = null;
      item.movie = null;
    }

    return item;
  });

  let gameCount = 0;
  let movieCount = 0;

  // 連続して重複するゲームを潰す
  let prevItem = null;
  let prevId = -1;
  items.forEach((item) => {
    if (item.game == null) {
      return;
    }
    if (item.game.id != prevId) {
      prevItem = item;
      prevId = item.game.id;
      gameCount++;
    } else {
      prevItem.gameRow++;
      item.game = null;
    }
  });

  // 連続して重複する動画を潰す
  prevItem = null;
  prevId = -1;
  items.forEach((item) => {
    if (item.movie == null) {
      return;
    }
    if (item.movie.id != prevId) {
      prevItem = item;
      prevId = item.movie.id;
      movieCount++;
    } else {
      prevItem.movieRow++;
      item.movie = null;
    }
  });

  // console.log(items);

  return {
    items: items,
    gameCount: gameCount,
    movieCount: movieCount,
  };
}

/**
 * URL種別取得
 */
function getUrlType(url) {
  if (url.indexOf("store.steampowered.com") != -1) {
    return 2;
  } else if (url.indexOf("twitter.com") != -1) {
    return 3;
  } else if (url.indexOf("www.facebook.com") != -1) {
    return 4;
  } else if (url.indexOf("www.youtube.com") != -1) {
    return 5;
  } else if (url.indexOf("www.nintendo.co.jp") != -1) {
    return 6;
  } else if (url.indexOf("www.ea.com") != -1) {
    return 7;
  } else if (url.indexOf("www.capcom.co.jp") != -1) {
    return 8;
  } else {
    return 1;
  }
}

/**
 * URLアイコン取得
 */
function getUrlIcon(type) {
  switch (type) {
    case 1:
      return "fas fa-home fa-lg urlicon home";
    case 2:
      return "fab fa-steam fa-lg urlicon steam";
    case 3:
      return "fab fa-twitter-square fa-lg urlicon twitter";
    case 4:
      return "fab fa-facebook-square fa-lg urlicon facebook";
    case 5:
      return "fab fa-youtube fa-lg urlicon youtube";
    case 6:
      return require("../assets/urlicon_nintendo.png");
    case 7:
      return require("../assets/urlicon_EA.jpg");
    case 8:
      return require("../assets/urlicon_CAPCOM.png");
  }
}

/**
 * URLタグ種別取得
 */
function getUrlTagType(type) {
  switch (type) {
    case 6:
    case 7:
    case 8:
      return 2;
  }

  return 1;
}

/**
 * 初期フィルターパラメータ取得
 */
function getInitialFilterParams() {
  let actors = [];
  Object.keys(actorsData).forEach((index) => {
    actors.push({
      id: index,
      name: actorsData[index].name,
      check: true,
    });
  });
  return {
    text: "",
    actors: actors,
  };
}
</script>

<style scoped>
</style>
