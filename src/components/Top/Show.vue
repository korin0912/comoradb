<template>
  <div>
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
      isMobile: common.isMobile(),
    };
  },
  mounted: async function () {
    await resources.execute();
  },
};
</script>
