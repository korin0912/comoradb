<template>
  <div id="app">
    <h1>
      <a href="https://www.youtube.com/channel/UC5fwtXKwDpgboOud4DbjQTg" target="_blank">
        <img alt="comoradb logo" src="./assets/images/logo.png" />
      </a>
      <span>『コモラとチャンチョのゲーム部屋』ゲーム一覧</span>
    </h1>
    <Games />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Games from "./components/Games/Games.vue";

export default {
  name: "App",
  components: {
    Games,
  },
  head: {
    title: {
      inner: "コモラDB",
      separator: "|",
      complement: "ゲーム一覧",
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
      {
        rel: "stylesheet",
        href: require("./components/Common/Common.css"),
      },
    ],
  },
};
</script>

<style>
#app {
  font-family: "Kosugi Maru", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.4rem;
  font-weight: 400;
  font-style: normal;
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
</style>
