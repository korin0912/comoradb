<template>
  <div class="container">
    <div class="main bottom-blank">
      <!-- カレンダー -->
      <div class="outline-box calendar">
        <label class="caption">カレンダー</label>
        <input type="month" v-model="calendarMonth" class="calendar" />
        <router-link :to="{ name: 'CalendarShow', params: { year: 2021, month: 8 } }">
          <i class="icon forward calendar" />
        </router-link>
      </div>
      <MobileTable :key="resetKey" :filterParams="filterParams" />
    </div>
    <Slide right @openMenu="handleOpenMenu">
      <TopFilter v-on:updateTable="updateTable" :initFilterParams="filterParams" />
    </Slide>
  </div>
</template>

<script>
import top from "./Top.js";
import MobileTable from "./MobileTable.vue";
import TopFilter from "./Filter.vue";
import { Slide } from "vue-burger-menu";

export default {
  name: "TopShowMobile",
  components: {
    MobileTable,
    TopFilter,
    Slide,
  },
  data: function () {
    let filterParams = top.getInitialFilterParams();

    let calendarMonth = "";
    let now = new Date();
    let year = now.getFullYear();
    let month = "0" + (now.getMonth() + 1);
    month = month.substring(month.length - 2);

    calendarMonth = `${year}-${month}`;

    return {
      calendarMonth: calendarMonth,
      resetKey: 0,
      filterParams: filterParams,
    };
  },
  methods: {
    updateTable: function (newFilterParams) {
      this.filterParams = newFilterParams;
      this.resetKey++;
    },
    handleOpenMenu: function () {
      let bm_menu_style = document.querySelector(".bm-menu").style;
      bm_menu_style.backgroundColor = "#ffffff";
      bm_menu_style.paddingTop = "40px";
      let bm_item_list_style = document.querySelector(".bm-item-list").style;
      bm_item_list_style.marginLeft = "0";
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 100%;
  grid-template-areas: "box1";
}

.main {
  grid-area: box1;
}

div.calendar {
  position: relative;
  margin: 10px 10px 10px 10px;
  border-color: var(--comora-color-dirk-purple);
}

.icon.calendar::before {
  border-width: 1px;
  border-color: #888888;
  border-radius: 4px;
  border-style: solid;
  padding: 1px 2px 1px 2px;
}

input.calendar {
  width: calc(100% - 37px - 4px);
  margin: 0;
  margin-right: 4px;
  padding: 2px;
  border-radius: 4px 4px 4px 4px;
  border-width: 1px;
  border-color: #aaaaaa;
  border-style: solid;
  vertical-align: middle;
}

button.calendar {
  text-align: center;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: #dddddd;
  border-radius: 8px;
  padding: 0;
  margin: 2px 0 2px 0;
}
</style>