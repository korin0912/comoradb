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
            <div v-if="dayIndex == 0 || dayIndex == 6" class="date holydays">
              {{ day.date }}日
            </div>
            <div v-else class="date">
              {{ day.date }}日
            </div>
            <div v-for="movie in day.movies" v-bind:key="`movie-${movie.id}`" class="movie">
              <div v-if="movie.thumbnail" class="thumbnail">
                <i v-if="movie.chat" class="icon check" />
                <a :href="movie.url" target="_blank">
                  <img :src="movie.thumbnail" :alt="movie.name" :title="`${(movie.gameTitle ? movie.gameTitle + '\n' : '')}${movie.name}`">
                </a>
              </div>
              <div v-else>
                ・<a :href="movie.url" target="_blank">{{ movie.name }}</a>
              </div>
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

div.holydays {
  color: white;
  background-color: var(--comora-color-dirk-yellow);
}

div.movie {
  margin: 1px 1px 0px 1px;
}

td.hide {
  background-color: #aaaaaa;
}

.thumbnail {
  width: 100%;
  position: relative;
}

.thumbnail i {
  position: absolute;
  bottom: 5px;
  right: 5px;
  border-radius: 8px;
  border-color: #dddddda0;
  border-width: 2px;
  border-style: solid;
  background-color: #000000a0;
  padding: 2px 3px 2px 2px;
}

.thumbnail img {
  width: 100%;
  border-radius: 4px;
  border-color: #222222;
  border-width: 1px;
  border-style: solid;
}

</style>