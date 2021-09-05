import Vue from "vue";

const { default: axios } = require("axios");

function getPath(jsonName) {
  let ret = "";
  if (process.env.NODE_ENV != 'development') {
    ret += process.env.BASE_URL;
  }
  ret += `/resources/${jsonName}.json`;
  ret = ret.replaceAll('//', '/');
  // console.log(ret);
  return ret;
}

function isLoadedAllData() {
  return Vue.prototype.$actorsData &&
    Vue.prototype.$gameGenresData &&
    Vue.prototype.$gamesData &&
    Vue.prototype.$moviesData;
}

async function loadAllData() {
  let responses = await Promise.all([
    axios.get(getPath('Actors')),
    axios.get(getPath('GameGenres')),
    axios.get(getPath('Games')),
    axios.get(getPath('Movies')),
  ]);

  Vue.prototype.$actorsData = responses[0].data;
  Vue.prototype.$gameGenresData = responses[1].data;
  Vue.prototype.$gamesData = responses[2].data;
  Vue.prototype.$moviesData = responses[3].data;
}

function getActorsData() {
  return Vue.prototype.$actorsData;
}

function getGameGenresData() {
  return Vue.prototype.$gameGenresData;
}

function getGamesData() {
  return Vue.prototype.$gamesData;
}

function getMoviesData() {
  return Vue.prototype.$moviesData;
}

function updateMovie(movieId, postData) {
  let url;
  if (this.movieId == 0) {
    url = "http://localhost:8081/movie/create";
  } else {
    url = `http://localhost:8081/movie/edit/${movieId}`;
  }

  if (!Vue.prototype.$editRequests) {
    Vue.prototype.$editRequests = [];
  }

  Vue.prototype.$editRequests.push({
    url: url,
    postData: postData,
  });
}


function updateGame(gameId, postData) {
  let url;
  if (this.gameId == 0) {
    url = "http://localhost:8081/game/create";
  } else {
    url = `http://localhost:8081/game/edit/${gameId}`;
  }

  if (!Vue.prototype.$editRequests) {
    Vue.prototype.$editRequests = [];
  }

  Vue.prototype.$editRequests.push({
    url: url,
    postData: postData,
  });
}

async function execute() {
  if (!Vue.prototype.$editRequests) {
    return;
  }

  let update = false;
  while (Vue.prototype.$editRequests.length > 0) {
    let req = Vue.prototype.$editRequests.shift();
    console.log(`edit request: ${req.url}`);
    console.log(req.postData);
    console.log(JSON.stringify(req.postData));
    await axios.post(req.url, JSON.stringify(req.postData), { headers: { "Content-Type": "text/plain" } }).then((res) => {
      console.log(res.status);
      update = true;
    });
  }

  if (update) {
    await loadAllData();
  }
}

export default {
  isLoadedAllData,
  loadAllData,
  getActorsData,
  getGameGenresData,
  getGamesData,
  getMoviesData,
  updateMovie,
  updateGame,
  execute,
}
