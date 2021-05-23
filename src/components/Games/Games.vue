<template>
  <div>
    <Header />
    <GamesPC v-if="isMobile == false" />
    <GamesMobile v-else />
  </div>
</template>

<script>
import Header from "../Common/Header.vue";
import GamesPC from "./GamesPC.vue";
import GamesMobile from "./GamesMobile.vue";

import common from "../Common/Common.js";

export default {
  name: "Games",
  components: {
    Header,
    GamesPC,
    GamesMobile,
  },
  data: function () {
    console.clear();
    return {
      isMobile: common.isMobile(),
    };
  },
};
</script>
