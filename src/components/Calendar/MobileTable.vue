<template>
  <table>
    <tbody>
      <tr v-for="(day, dayIndex) in days" v-bind:key="`day-${dayIndex}`">
        <th v-if="day['dayOfWeek'] == 0 || day['dayOfWeek'] == 6" class="date holydays">{{ day.date }}日</th>
        <th v-else class="date">{{ day.date }}日</th>
        <th :class="(day['dayOfWeek'] == 0 || day['dayOfWeek'] == 6 ? 'dark' : 'pale') + ' day-of-week'">{{ dayOfWeeks[day["dayOfWeek"]] }}</th>
        <td>
          <div class="day">
            <div v-for="movie in day.movies" v-bind:key="`movie-${movie.id}`" class="movie">
              ・<a :href="movie.url">{{ movie.name }}</a>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "CalendarPCTable",
  props: ["days"],
  data: function () {
    let dayOfWeeks = ["日", "月", "火", "水", "木", "金", "土"];
    return {
      dayOfWeeks: dayOfWeeks,
    };
  },
};
</script>


<style scoped>
tr {
  height: 40px;
}

th.date {
  width: 12%;
  background-color: var(--comora-color-yellow);
}

th.holydays {
  color: white;
  background-color: var(--comora-color-dirk-yellow);
}

th.day-of-week {
  width: 8%;
}

td {
  vertical-align: middle;
}

tbody tr:nth-child(1) th {
  border-top-width: 1px;
}
tbody tr:nth-child(1) td {
  border-top-width: 1px;
}

div.day {
  width: 100%;
}

div.movie {
  margin: 1px 1px 0px 1px;
}

td.hide {
  background-color: #aaaaaa;
}
</style>