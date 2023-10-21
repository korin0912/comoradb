import { createApp } from "vue";

const Vue = createApp({});

import axios from "axios";

function getPath(jsonName) {
  let ret = "";
  if (import.meta.env.DEV) {
    ret += import.meta.env.BASE_URL;
    ret += (ret.charAt(ret.length-1) != "/") ? "/" : "";
  }
  ret += `resources/${jsonName}.json`;
  ret = ret.replaceAll('//', '/');
  // console.log(ret);
  return ret;
}

function isLoadedAllData() {
  return Vue.config.globalProperties.$actorsData &&
    Vue.config.globalProperties.$gameGenresData &&
    Vue.config.globalProperties.$gamesData &&
    Vue.config.globalProperties.$moviesData;
}

async function loadAllData() {
  let responses = await Promise.all([
    axios.get(getPath('Actors')),
    axios.get(getPath('GameGenres')),
    axios.get(getPath('Games')),
    axios.get(getPath('Movies')),
  ]);

  Vue.config.globalProperties.$actorsData = responses[0].data;
  Vue.config.globalProperties.$gameGenresData = responses[1].data;
  Vue.config.globalProperties.$gamesData = responses[2].data;
  Vue.config.globalProperties.$moviesData = responses[3].data;
}

function getActorsData() {
  return Vue.config.globalProperties.$actorsData;
}

function getGameGenresData() {
  return Vue.config.globalProperties.$gameGenresData;
}

function getGamesData() {
  return Vue.config.globalProperties.$gamesData;
}

function getMoviesData() {
  return Vue.config.globalProperties.$moviesData;
}

function updateMovie(movieId, postData) {
  let url;
  if (this.movieId == 0) {
    url = "http://localhost:8081/movie/create";
  } else {
    url = `http://localhost:8081/movie/edit/${movieId}`;
  }

  if (!Vue.config.globalProperties.$editRequests) {
    Vue.config.globalProperties.$editRequests = [];
  }

  Vue.config.globalProperties.$editRequests.push({
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

  if (!Vue.config.globalProperties.$editRequests) {
    Vue.config.globalProperties.$editRequests = [];
  }

  Vue.config.globalProperties.$editRequests.push({
    url: url,
    postData: postData,
  });
}

async function execute() {
  if (!Vue.config.globalProperties.$editRequests) {
    return;
  }

  let update = false;
  while (Vue.config.globalProperties.$editRequests.length > 0) {
    let req = Vue.config.globalProperties.$editRequests.shift();
    console.log(`edit request: ${req.url}`);
    console.log(req.postData);
    console.log(JSON.stringify(req.postData));
    await axios.post(req.url, JSON.stringify(req.postData), { headers: { "Content-Type": "text/plain" } }).then((res) => {
      console.log(res.status);
      location.reload();
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
