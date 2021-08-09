<template>
  <div>
    <Header />
  </div>
</template>

<script>
import Header from "../Common/Header.vue";

import common from "../Common/Common.js";
import resources from "../Common/Resources.js";

export default {
  name: "CalendarShow",
  components: {
    Header,
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
