<template>
  <div>
    <GamesPC v-if="isMobile == false" :data="data" />
    <GamesMobile v-else :data="data" />
  </div>
</template>

<script>
import actorsData from "../../assets/Actors.json";

import common from "../Common/Common.js";
import games from "./Games.js";

import GamesPC from "./GamesPC.vue";
import GamesMobile from "./GamesMobile.vue";

export default {
  name: "Games",
  components: {
    GamesPC,
    GamesMobile,
  },
  data: function () {
    console.clear();
    // モバイルモード
    var isMobile = common.isMobile();

    // 初期フィルターパラメータ取得
    let actors = [];
    Object.keys(actorsData).forEach((index) => {
      actors.push({
        id: index,
        name: actorsData[index].name,
        check: true,
      });
    });
    let filterParams = {
      text: "",
      actors: actors,
    };

    // テーブルアイテム
    let tableItems = games.getTableItems(filterParams);

    return {
      isMobile: isMobile,
      data: {
        items: tableItems.items,
        gameCount: tableItems.gameCount,
        movieCount: tableItems.movieCount,
        filterParams: filterParams,
      },
    };
  },
};
</script>

<style>
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

td.links {
  width: 5%;
}

td.movie {
  font-size: 0.7rem;
}

td.actors {
  font-size: 0.6rem;
  width: 10%;
}

i.checkmark {
  padding: 2px 2px 2px 2px;
  margin: 0 auto;
  color: #25af01;
}

a {
  text-decoration: none;
}

a.icon {
  width: 23px;
  height: 23px;
}

div.filter-box {
  margin: 10px 10px 0px 10px;
}

input.filter-text {
  width: 100%;
  margin: 0;
}

div.filter-checkbox {
  text-align: left;
  width: 100%;
  margin: 0;
}

input.filter-checkbox {
  margin: 3px 3px 3px 0px;
}

label.filter-checkbox {
  font-size: 0.8rem;
  font-weight: 200;
  vertical-align: middle;
}

.text-upper {
  vertical-align: top;
}

.text-center {
  text-align: center;
}

.text-bottom {
  vertical-align: bottom;
}
</style>
