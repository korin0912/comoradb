<template>
  <div>
    <Header />
    <h3>
      <i class="icon left month-move" />
      {{ year }}年{{ month }}月
      <i class="icon right month-move" />
    </h3>
    <table>
      <thead>
        <tr>
          <th class="dark">日</th>
          <th class="pale">月</th>
          <th class="pale">火</th>
          <th class="pale">水</th>
          <th class="pale">木</th>
          <th class="pale">金</th>
          <th class="dark">土</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(week, weekIndex) in weeks" v-bind:key="`week-${weekIndex}`">
          <td v-for="(day, dayIndex) in week" v-bind:key="`day-${weekIndex}-${dayIndex}`" :class="day.date != -1 ? '' : 'hide'">
            <div v-if="day.date != -1" class="day">
              <div class="date">{{ day.date }}日</div>
              <div v-for="movie in day.movies" v-bind:key="`movie-${movie.id}`" class="movie">
                ・<a :href="movie.url">{{ movie.name }}</a>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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
    let year = this.$route.params.year;
    let month = this.$route.params.month;

    // 日次データ作成
    let days = [];

    // 日曜を開始日として、前月の日をダミーとして追加
    let firstDate = new Date(year, month - 1, 1);
    let firstDay = firstDate.getDay();
    for (let i = 0; i < firstDay; i++) {
      days.push(-1);
    }

    // 月末日までを追加
    let lastDate = new Date(year, month, 0);
    for (let i = 1; i <= lastDate.getDate(); i++) {
      days.push(i);
    }

    // 土曜日を終了日として、翌月の日をダミーとして追加
    for (let i = 0; days.length % 7 != 0; i++) {
      days.push(-1);
    }

    // 日次 ⇒ 週次データ作成
    let weeks = [];
    let moviesData = resources.getMoviesData();

    for (let i = 0; i < days.length / 7; i++) {
      let week = [];
      for (let j = 0; j < 7; j++) {
        let date = days[i * 7 + j];
        let day = {
          date: -1,
          movies: [],
        };
        if (date != -1) {
          day["date"] = date;
          let releaseDate = year + "/" + ('0' + month).slice(-2) + "/" + ('0' + date).slice(-2);
          console.log(releaseDate);
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
        }
        week.push(day);
      }
      weeks.push(week);
    }

    return {
      isMobile: common.isMobile(),
      year: year,
      month: month,
      weeks: weeks,
    };
  },
  mounted: async function () {
    await resources.execute();
  },
};
</script>

<style scoped>
th {
  width: 14%;
}

td {
  height: 100px;
  vertical-align: text-top;
}

div.day {
  width: 100%;
}

div.date {
  width: 100%;
  text-align: center;
  background-color: var(--comora-color-yellow);
  border-radius: 4px;
  margin: 1px 1px 0px 1px;
}

div.movie {
  margin: 1px 1px 0px 1px;
}

td.hide {
  background-color: #aaaaaa;
}

i.month-move {
  vertical-align: middle;
}
</style>