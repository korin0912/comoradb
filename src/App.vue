<template>
  <div id="app">
    <h1>
      <a
        href="https://www.youtube.com/channel/UC5fwtXKwDpgboOud4DbjQTg"
        target="_blank"
      >
        <img alt="comoradb logo" src="./assets/logo.png" />
      </a>
      <span>『コモラとチャンチョのゲーム部屋』ゲーム一覧</span>
    </h1>
    <Games />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Games from "./components/Games.vue";

export default {
  name: "App",
  components: {
    Games,
  },
  head: {
    title: {
      inner: "コモラDB",
      separator: "|",
      complement: "ゲームリスト",
    },
    link: [
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.6.1/css/all.css",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Kosugi+Maru&family=Noto+Sans+JP:wght@100;300",
      },
    ],
  },
};
</script>

<style>
#app {
  font-family: 'Kosugi Maru', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.4rem;
  font-weight: 400;
  font-style: normal;
}

.urlicon {
  padding: 2px 2px 2px 2px;
  vertical-align: middle;
  margin: 0 auto;
}

.urlicon.home {
  color: #888888;
}

.urlicon.steam {
  color: #324b6c;
}

.urlicon.twitter {
  color: #80cafd;
}

.urlicon.facebook {
  color: #4267b2;
}

.urlicon.youtube {
  color: #ff0000;
}

span.genre {
  font-size: 0.6rem;
  border-radius: 5px 5px 5px 5px;
  border-style: none;
  background-color: #fbcb2d;
  color: #000000;
  margin: 1px 1px 0px 0px;
  padding: 1px 5px 0px 5px;
  display: inline-block;
}

h1 {
  font-size: 2.3rem;
  font-weight: 600;
}

h1 img {
  display: inline-block;
  vertical-align: middle;
  border-style: solid;
  border-width: 1px;
  border-color: lightgray;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

h1 span {
  display: inline-block;
  vertical-align: middle;
}

table {
  border-collapse: separate;
  border-spacing: 0px;
}

th {
  height: 20px;
  font-size: 0.8rem;
  font-weight: 200;
  padding: 2px 5px 2px 5px;
  border-width: 0px 1px 1px 0px;
  border-style: solid;
  border-color: #dddddd;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
}

th.first {
  border-top-width: 1px;
  top: 0;
}

th.second {
  /* 高さが変わるたびに調整が必要なので、良くない */
  top: 26px;
}

th.left {
  border-left-width: 1px;
}

th.pale {
  color: #ffffff;
  background-color: #c1abd2;
}

th.dark {
  color: #ffffff;
  background-color: #8457a8;
}

td {
  font-size: 0.8rem;
  font-weight: 200;
  padding: 2px 5px 2px 5px;
  border-width: 0px 1px 1px 0px;
  border-style: solid;
  border-color: #dddddd;
  text-align: left;
}

td.left {
  border-left-width: 1px;
}

td.genres {
  width: 10%;
}

td.movie {
  font-size: 0.7rem;
}

td.actors {
  font-size: 0.6rem;
  width: 10%;
}

div.checkmark {
  content: "";
  width: 10px;
  height: 5px;
  border-left: 2px solid #25af01;
  border-bottom: 2px solid #25af01;
  transform: rotate(-45deg);
  margin: 0 auto;
}

.text-upper {
  vertical-align: top;
}

.text-center {
  text-align: center;
}

.check {
  color: #25af01;
}

img.actor {
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  border-color: #dddddd;
  width: 14px;
  height: 14px;
  margin: 0px 2px 0px 0px;
}

</style>
