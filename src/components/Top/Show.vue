<template>
  <div>
    <div v-if="showUp" class="up">
      <div v-on:click="upCallback()" class="icon up" />
    </div>
    <div v-if="showDown" class="down">
      <div v-on:click="downCallback()" class="icon down" />
    </div>
    <Header />
    <ShowPC v-if="isMobile == false" />
    <ShowMobile v-else />
  </div>
</template>

<script>
import Header from "../Common/Header.vue";
import ShowPC from "./ShowPC.vue";
import ShowMobile from "./ShowMobile.vue";

import common from "../Common/Common.js";
import resources from "../Common/Resources.js";

export default {
  name: "TopShow",
  components: {
    Header,
    ShowPC,
    ShowMobile,
  },
  data: function () {
    // console.clear();
    return {
      showUp: true,
      showDown: true,
      isMobile: common.isMobile(),
    };
  },
  mounted: async function () {
    this.scrollCallback();
    window.addEventListener("scroll", this.scrollCallback);
    await resources.execute();
  },
  methods: {
    scrollCallback: function () {
      if (window.scrollY > 60) {
        this.showUp = true;
      } else {
        this.showUp = false;
      }
      if (window.scrollY <= document.body.scrollHeight - window.innerHeight) {
        this.showDown = true;
      } else {
        this.showDown = false;
      }
    },
    upCallback: function () {
      window.scrollTo(0, 0);
    },
    downCallback: function () {
      window.scrollTo(0, document.body.scrollHeight);
    },
  },
};
</script>

<style scoped>
div.up {
  height: 34px;
  position: fixed;
  top: 0px;
  left: 10px;
  z-index: 2;
}

.icon.up {
  display: table-cell;
  width: 34px;
  height: 34px;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-color: #dddddd;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
}

.icon.up::before {
  font-size: 32px;
  vertical-align: middle;
}

div.down {
  height: 34px;
  position: fixed;
  bottom: 0px;
  left: 10px;
  z-index: 2;
}

.icon.down {
  display: table-cell;
  width: 34px;
  height: 34px;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-color: #dddddd;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
}

.icon.down::before {
  font-size: 32px;
  vertical-align: middle;
}
</style>