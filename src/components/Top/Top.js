import common from "../Common/Common.js";
import resources from "../Common/Resources.js";

/**
 * テーブルのオリジナルデータアイテム
 */
let originalTableItems = null;

/**
 * テーブルのオリジナルアイテム取得
 */
function getOriginalTableItems() {
  if (originalTableItems == null) {
    // console.log("create original table items");
    let gamesData = resources.getGamesData();
    let gameGenresData = resources.getGameGenresData();
    let moviesData = resources.getMoviesData();
    let actorsData = resources.getActorsData();

    originalTableItems = [];
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
          urls: gameData.urls,
          genres: gameData.genreIds.map((genreId) => {
            return {
              id: genreId,
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
                name: actorsData[actorId].name,
              };
            }),
            chat: movieData.chat,
          };

          originalTableItems.push({
            key: "games-" + originalTableItems.length,
            gameRow: 1,
            game: game,
            movieRow: 1,
            movie: movie,
          });

          isPushItems = true;
        });

        // 動画がないことはおそらく無いはずだけど、ガードとして
        if (!isPushItems) {
          originalTableItems.push({
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
  return common.copyDeep(originalTableItems);
}

/**
 * テーブルアイテムをフィルター
 */
function filterTableItems(items, filterParams) {
  // テキスト
  // console.log(filterParams);
  let filterText = null;
  if (filterParams.text != null && filterParams.text != "") {
    filterText = filterParams.text.toLowerCase();
  }

  // 公開日
  let filterReleaseDateFrom = null;
  if (filterParams.releaseDates.from) {
    filterReleaseDateFrom = filterParams.releaseDates.from.replaceAll('-', '/');
    // console.log(`filter: from: ${filterReleaseDateFrom}`);
  }
  let filterReleaseDateTo = null;
  if (filterParams.releaseDates.to) {
    filterReleaseDateTo = filterParams.releaseDates.to.replaceAll('-', '/');
    // console.log(`filter: to: ${filterReleaseDateTo}`);
  }

  // 出演者
  let filterActors = filterParams.actors.filter((actor) => actor.check).map((actor) => actor.id);
  // console.log(filterActors);

  // ゲームジャンル
  let filterGenres = filterParams.genres.filter((genre) => genre.check).map((genre) => genre.id);
  // console.log(filterGenres);

  // 雑談
  let filterChat = filterParams.chat;

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
    if (filterActors != null && filterActors.length > 0) {
      if (item.movie.actors.filter((actor) => filterActors.some((id) => id == actor.id)).length <= 0) {
        del = true;
      }
    }

    // 公開日 (から)
    if (filterReleaseDateFrom) {
      if (item.movie.releaseDate < filterReleaseDateFrom) {
        del = true;
      }
    }

    // 公開日 (まで)
    if (filterReleaseDateTo) {
      if (item.movie.releaseDate > filterReleaseDateTo) {
        del = true;
      }
    }

    // ゲームジャンル
    if (filterGenres != null && filterGenres.length > 0) {
      if (item.game.genres.filter((genre) => filterGenres.some((id) => id == genre.id)).length <= 0) {
        del = true;
      }
    }

    // 雑談
    if (filterChat) {
      if (!item.movie.chat) {
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
  let gamesData = resources.getGamesData();
  let gameGenresData = resources.getGameGenresData();
  let moviesData = resources.getMoviesData();
  let actorsData = resources.getActorsData();
  let items = getOriginalTableItems(gamesData, gameGenresData, moviesData, actorsData);
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

let originalFilterParams = null;

/**
 * 初期フィルターパラメータ取得
 */
function getInitialFilterParams() {
  // テキスト
  let text = "";

  // 出演者
  let actors = [];
  let actorsData = resources.getActorsData();
  Object.keys(actorsData).forEach((index) => {
    actors.push({
      id: index,
      name: actorsData[index].name,
      check: false,
    });
  });

  // 公開日
  let releaseDates = {
    from: "",
    to: "",
  };

  // ジャンル
  let genres = [];
  let gameGenresData = resources.getGameGenresData();
  Object.keys(gameGenresData).forEach((index) => {
    genres.push({
      id: index,
      name: gameGenresData[index],
      check: false,
    });
  });

  // 雑談
  let chat = false;

  originalFilterParams = {
    text: text,
    actors: actors,
    releaseDates: releaseDates,
    genres: genres,
    chat: chat,
  }

  return common.copyDeep(originalFilterParams);
}

/**
 * フィルターパラメータ更新
 */
function updateFilterParams(filterParams) {
  // テキスト
  originalFilterParams.text = filterParams.text;
  // 出演者
  originalFilterParams.actors = updateFilterParamsByCheckboxGroup(originalFilterParams.actors, filterParams.actors);
  // 公開日
  originalFilterParams.releaseDates.from = filterParams.releaseDates.from;
  originalFilterParams.releaseDates.to = filterParams.releaseDates.to;
  // ジャンル
  originalFilterParams.genres = updateFilterParamsByCheckboxGroup(originalFilterParams.genres, filterParams.genres);
  // 雑談
  originalFilterParams.chat = filterParams.chat;

  // console.log(originalFilterParams);

  return common.copyDeep(originalFilterParams);
}

function updateFilterParamsByCheckboxGroup(orgParams, newParams) {
  // パラメータ更新
  for (let i = 0; i < orgParams.length; i++) {
    orgParams[i].check = newParams[i].check;
  }
  return orgParams;
}

/**
 * フィルターパラメータリセット
 */
function resetFilterParamsInput(filterParams, filter) {
  if (filter == "text") {
    filterParams.text = "";
  }

  if (filter == "releaseDateFrom") {
    filterParams.releaseDates.from = "";
  }

  if (filter == "releaseDateTo") {
    filterParams.releaseDates.to = "";
  }

  return updateFilterParams(filterParams);
}

export default {
  getTableItems,
  getInitialFilterParams,
  updateFilterParams,
  resetFilterParamsInput,
}
