<template>
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
</template>

<script>
export default {
  name: "CalendarPCTable",
  props: ["weeks"],
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
</style>