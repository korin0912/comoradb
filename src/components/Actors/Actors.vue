<template>
  <div>
    <Header />
    <div class="container">
      <!-- 出演者 -->
      <div class="actor">
        <table>
          <tbody>
            <tr>
              <th class="left first pale">名前</th>
              <td class="first">{{ actor.name }}</td>
            </tr>
            <tr>
              <th class="left pale">リンク</th>
              <td>
                <div v-for="(url, urlIndex) in urls" :key="url.keyPrefix + urlIndex" class="url">
                  <a :href="url.url" target="_blank" class="urlicon">
                    <template v-if="url.tag == 1">
                      <i :class="url.icon" />
                    </template>
                    <template v-else-if="url.tag == 2">
                      <img class="urlicon" :src="url.icon" />
                    </template>
                  </a>
                  <a :href="url.url" target="_blank" class="urlicon">
                    <span class="url">{{ url.url }}</span>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <th class="left pale">コメント</th>
              <td>{{ actor.comment }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br>
    <div class="container">
      <div class="games">
        <GamesPCTable v-if="isMobile == false" :filterParams="filterParams" />
        <GamesMobileTable v-else :filterParams="filterParams" />
      </div>
    </div>
  </div>
</template>

<script>
import actorsData from "../../assets/resources/Actors.json";

import Header from "../Common/Header.vue";
import GamesPCTable from "../Games/GamesPCTable.vue";
import GamesMobileTable from "../Games/GamesMobileTable.vue";

import common from "../Common/Common.js";
import games from "../Games/Games.js";

export default {
  name: "Actors",
  components: {
    Header,
    GamesPCTable,
    GamesMobileTable,
  },
  data: function () {
    let actorIdx = Object.keys(actorsData).find(key => {
      return key == this.$route.query.actorId;
    });
    let actor = actorsData[actorIdx];
    let urls = actor.urls.map(url => {
      return games.getUrlInfo(url, "actor-url-");
    });
    let filterParams = games.getInitialFilterParams();
    // console.log(this.$route.query);
    filterParams.actors.forEach(elem => {
      if (elem.id == this.$route.query.actorId)
      {
        elem.check = true;
      }
    });
    return {
      actor: actor,
      urls: urls,
      isMobile: common.isMobile(),
      filterParams: filterParams,
    };
  }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 15% 70% 15%;
  grid-template-areas: "box1 box2 box3";
}

.actor {
  grid-area: box2;
}

.games {
  grid-column: 1 / 4;
}

th {
  width: 40%;
  text-align: left;
}

div.url {
  height: 25px;
}

span.url {
  text-align: left;
  vertical-align: middle;
  margin: 0 0 0 4px;
}
</style>