import Vue from "vue";

const { default: axios } = require("axios");

async function getActorsData() {
  if (!Vue.prototype.$actorsData) {
    await axios.get('/resources/Actors.json')
      .then(res => {
        // console.log(res.data);
        Vue.prototype.$actorsData = res.data;
      })
      .catch(err => {
        console.log(err);
        Vue.prototype.$actorsData = {};
      });
  }
  return Vue.prototype.$actorsData;
}

async function getGameGenresData() {
  if (!Vue.prototype.$gameGenresData) {
    await axios.get('/resources/GameGenres.json')
      .then(res => {
        // console.log(res.data);
        Vue.prototype.$gameGenresData = res.data;
      })
      .catch(err => {
        console.log(err);
        Vue.prototype.$gameGenresData = {};
      });
  }
  return Vue.prototype.$gameGenresData;
}

async function getGamesData() {
  if (!Vue.prototype.$gamesData) {
    await axios.get('/resources/Games.json')
      .then(res => {
        // console.log(res.data);
        Vue.prototype.$gamesData = res.data;
      })
      .catch(err => {
        console.log(err);
        Vue.prototype.$gamesData = {};
      });
  }
  return Vue.prototype.$gamesData;
}

async function getMoviesData() {
  if (!Vue.prototype.$moviesData) {
    await axios.get('/resources/Movies.json')
      .then(res => {
        // console.log(res.data);
        Vue.prototype.$moviesData = res.data;
      })
      .catch(err => {
        console.log(err);
        Vue.prototype.$moviesData = {};
      });
  }
  return Vue.prototype.$moviesData;
}

function clearData() {
  Vue.prototype.$actorsData = null;
  Vue.prototype.$gameGenresData = null;
  Vue.prototype.$gamesData = null;
  Vue.prototype.$moviesData = null;
}

export default {
  getActorsData,
  getGameGenresData,
  getGamesData,
  getMoviesData,
  clearData,
}
