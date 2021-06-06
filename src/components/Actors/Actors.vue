<template>
  <div v-if="loaded" class="bottom-blank">
    <Header />
    <div class="container">
      <!-- 出演者 -->
      <div :class="isMobile == false ? 'actor_pc' : 'actor_mobile'">
        <img :src="require('../../assets/images/actor_' + this.$route.params.actorId + '.png')" class="actor" />
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th class="pale">名前</th>
              <td>{{ actor.name }}</td>
            </tr>
            <tr>
              <th class="pale">リンク</th>
              <td>
                <li v-for="(url, urlIndex) in actor.urls" :key="'actor-' + actor.name + '-url-' + urlIndex">
                  <a :href="url" target="_blank" class="url">
                    {{ url }}
                  </a>
                </li>
              </td>
            </tr>
            <tr>
              <th class="pale">コメント</th>
              <td>{{ actor.comment }}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <br />
    <div class="container">
      <div class="games">
        <GamesPCTable v-if="isMobile == false" :filterParams="filterParams" />
        <GamesMobileTable v-else :filterParams="filterParams" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../Common/Header.vue";
import GamesPCTable from "../Games/GamesPCTable.vue";
import GamesMobileTable from "../Games/GamesMobileTable.vue";

import common from "../Common/Common.js";
import resources from "../Common/Resources.js";
import games from "../Games/Games.js";

export default {
  name: "Actors",
  components: {
    Header,
    GamesPCTable,
    GamesMobileTable,
  },
  data: function () {
    return {
      loaded: false,
      actor: {},
      isMobile: common.isMobile(),
      filterParams: {},
    };
  },
  mounted: async function () {
    let actorsData = await resources.getActorsData();
    let actorIdx = Object.keys(actorsData).find((key) => {
      return key == this.$route.params.actorId;
    });
    this.actor = actorsData[actorIdx];

    let filterParams = await games.getInitialFilterParams();
    filterParams.actors.forEach((elem) => {
      if (elem.id == this.$route.params.actorId) {
        elem.check = true;
      }
    });
    this.filterParams = filterParams;

    this.loaded = true;
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 15% 70% 15%;
}

.actor_pc {
  grid-column: 2 / 3;
}

.actor_mobile {
  grid-column: 1 / 4;
}

.games {
  grid-column: 1 / 4;
}

img.actor {
  border-color: var(--comora-color-pale-purple);
  border-style: solid;
  border-width: 1px;
  border-radius: 16px;
}

th {
  width: 20%;
  text-align: left;
}

a.url {
  word-break: break-all;
}
</style>