<template>
  <div v-if="loaded">
    <div class="back">
      <div v-if="$router.currentRoute.name != 'TopShow'" v-on:click="$router.back()" class="icon back" />
    </div>
    <div id="app">
      <router-view />
    </div>
  </div>
</template>

<script>
import resource from "./components/Common/Resources.js";

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
      {
        rel: "stylesheet",
        href: require("./components/Common/Table.css"),
      },
      {
        rel: "stylesheet",
        href: require("./components/Common/Box.css"),
      },
    ],
  },
  data: function () {
    let loaded = resource.isLoadedAllData();
    return {
      loaded: loaded,
    };
  },
  mounted: async function () {
    await resource.loadAllData();
    this.loaded = true;
  }
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
  margin-top: 20px;
  font-size: 1.4rem;
  font-weight: 400;
  font-style: normal;
}

div.back {
  height: 32px;
  position: -webkit-sticky;
  position: sticky;
  top: 10px;
  left: 10px;
  z-index: 2;
}

div.back-sticky {
  padding: 4px 4px 4px 4px;
}

.icon.back {
  display: table-cell;
  width: 40px;
  height: 40px;
  border-width: 1px;
  border-style: solid;
  border-color: #dddddd;
  border-radius: 25%;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
}

.icon.back::before {
  font-size: 32px;
  vertical-align: middle;
}
</style>
