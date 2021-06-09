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
  if (!Vue.prototype.$actorsData) {
    await axios.get(getPath('Actors'))
      .then(res => {
        // console.log(res.data);
        Vue.prototype.$actorsData = res.data;
      })
      .catch(err => {
        console.log(err);
        Vue.prototype.$actorsData = {};
      });
  }

  if (!Vue.prototype.$gameGenresData) {
    await axios.get(getPath('GameGenres'))
      .then(res => {
        // console.log(res.data);
        Vue.prototype.$gameGenresData = res.data;
      })
      .catch(err => {
        console.log(err);
        Vue.prototype.$gameGenresData = {};
      });
  }

  if (!Vue.prototype.$gamesData) {
    await axios.get(getPath('Games'))
      .then(res => {
        // console.log(res.data);
        Vue.prototype.$gamesData = res.data;
      })
      .catch(err => {
        console.log(err);
        Vue.prototype.$gamesData = {};
      });
  }

  if (!Vue.prototype.$moviesData) {
    await axios.get(getPath('Movies'))
      .then(res => {
        // console.log(res.data);
        Vue.prototype.$moviesData = res.data;
      })
      .catch(err => {
        console.log(err);
        Vue.prototype.$moviesData = {};
      });
  }
}

function clearAllData() {
  Vue.prototype.$actorsData = null;
  Vue.prototype.$gameGenresData = null;
  Vue.prototype.$gamesData = null;
  Vue.prototype.$moviesData = null;
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

export default {
  isLoadedAllData,
  loadAllData,
  clearAllData,
  getActorsData,
  getGameGenresData,
  getGamesData,
  getMoviesData,
}
