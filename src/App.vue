<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
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
      {
        rel: "stylesheet",
        href: require("./components/Common/Icon.css"),
      },
    ],
  },
};
</script>

<style>
#app {
  margin-left: auto;
  margin-right: auto;
  max-width: 1600px;
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
</style>
