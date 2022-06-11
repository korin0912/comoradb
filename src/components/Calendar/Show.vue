<template>
  <div>
    <Header />
    <h3>
      <div class="subject">
        <button v-on:click="moveMonth(-1)" class="move-month"><i class="icon left" /></button>
        {{ year }}年{{ ("0" + month).slice(-2) }}月
        <button v-on:click="moveMonth(1)" class="move-month"><i class="icon right" /></button>
      </div>
    </h3>
    <PCTable v-if="isMobile == false" :weeks="weeks" />
    <MobileTable v-else :days="days" />
  </div>
</template>

<script>
import Header from "../Common/Header.vue";
import PCTable from "./PCTable.vue";
import MobileTable from "./MobileTable.vue";
import { useRoute } from 'vue-router'

import common from "../Common/Common.js";
import resources from "../Common/Resources.js";

export default {
  name: "CalendarShow",
  components: {
    Header,
    PCTable,
    MobileTable,
  },
  data: function () {
    // console.clear();
    let route = useRoute();
    let calendarMonth = route.params.calendarMonth;
    let year = parseInt(calendarMonth.split("-")[0]);
    let month = parseInt(calendarMonth.split("-")[1]);
    let days = makeDays(year, month);
    let weeks = makeWeeks(days);

    return {
      isMobile: common.isMobile(),
      year: year,
      month: month,
      days: days,
      weeks: weeks,
    };
  },
  methods: {
    moveMonth: function (move) {
      this.month = parseInt(this.month) + parseInt(move);
      if (this.month <= 0) {
        this.year = parseInt(this.year) - 1;
        this.month = 12;
      }
      if (this.month > 12) {
        this.year = parseInt(this.year) + 1;
        this.month = 1;
      }
      this.days = makeDays(this.year, this.month);
      this.weeks = makeWeeks(this.days);
    },
  },
  mounted: async function () {
    await resources.execute();
  },
};

// 日次データ作成
function makeDays(year, month) {
  let ret = [];
  let moviesData = resources.getMoviesData();

  // 月末日までを追加
  let firstDate = new Date(year, month - 1, 1);
  let lastDate = new Date(year, month, 0);
  for (let i = 1; i <= lastDate.getDate(); i++) {
    let day = {
      date: i,
      dayOfWeek: (firstDate.getDay() + i - 1) % 7,
      movies: [],
    };
    let releaseDate = year + "/" + ("0" + month).slice(-2) + "/" + ("0" + i).slice(-2);
    // console.log(releaseDate);
    Object.keys(moviesData).forEach((movieId) => {
      let movieData = moviesData[movieId];
      if (movieData.releaseDate == releaseDate) {
        day["movies"].push({
          id: movieId,
          name: movieData.name,
          url: movieData.url,
        });
      }
    });
    ret.push(day);
  }

  return ret;
}

// 週次データ作成
function makeWeeks(days) {
  days = common.copyDeep(days);

  // 日曜を開始日として、前月の日をダミーとして追加
  let firstDayOfWeek = days[0]["dayOfWeek"];
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.unshift({
      date: -1,
      dayOfWeek: i,
      movies: [],
    });
  }

  // 土曜日を終了日として、翌月の日をダミーとして追加
  let lastDayOfWeek = days[days.length - 1]["dayOfWeek"];
  for (let i = lastDayOfWeek + 1; i < 7; i++) {
    days.push({
      date: -1,
      dayOfWeek: i,
      movies: [],
    });
  }

  // 日次 ⇒ 週次データ作成
  let ret = [];

  for (let i = 0; i < days.length / 7; i++) {
    let week = [];
    for (let j = 0; j < 7; j++) {
      week.push(days[i * 7 + j]);
    }
    ret.push(week);
  }

  return ret;
}
</script>

<style scoped>
div.subject {
  display: flex;
  justify-content: center;
  align-items: center;
}

h3 {
  margin-bottom: 10px;
  vertical-align: middle;
}

button.move-month {
  border-width: 1px;
  border-style: solid;
  border-color: var(--comora-color-dirk-purple);
  border-radius: 8px;
  padding: 2px 8px 2px 8px;
  background-color: white;
  margin: 0 6px 0 4px;
}
</style>