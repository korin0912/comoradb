import gamesData from "../../assets/resources/Games.json";
import gameGenresData from "../../assets/resources/GameGenres.json";
import moviesData from "../../assets/resources/Movies.json";
import actorsData from "../../assets/resources/Actors.json";

import common from "../Common/Common.js";

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
            let icontype = common.getUrlType(url);
            return {
              keyPrefix: "url-" + gameId + "-",
              url: url,
              icon: common.getUrlIcon(icontype),
              tag: common.getUrlTagType(icontype),
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
                icon: require("../../assets/images/actor_" + actorId + ".png"),
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
 * テーブルアイテムをフィルター
 */
function filterTableItems(items, filterParams) {
  // テキスト
  // console.log(filterParams);
  let filterText = null;
  if ("text" in filterParams && filterParams.text != null && filterParams.text != "") {
    filterText = filterParams.text.toLowerCase();
  }

  // 出演者
  let filterActors = null;
  if ("actors" in filterParams) {
    filterActors = filterParams.actors.filter((actor) => actor.check).map((actor) => actor.id);
    // console.log(filterActors);
  }

  // フィルター
  return items.map((item) => {
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
  let items = getTableOriginalItems(gamesData, gameGenresData, moviesData, actorsData);
  // console.log(items);

  // フィルター
  items = filterTableItems(items, filterParams);
  // console.log(items);

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

export default {
  getTableItems,
  getTableOriginalItems,
  filterTableItems,
}
