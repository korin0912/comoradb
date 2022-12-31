<template>
  <div class="bottom-blank">
    <Header />
    <div class="container">
      <!-- 出演者 -->
      <div :class="isMobile == false ? 'pc' : 'mobile'">
        <img :src="actorImages[route.params.actorId - 1]" class="actor" />
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
                <ul>
                  <li v-for="(url, urlIndex) in actor.urls" :key="'actor-' + actor.name + '-url-' + urlIndex">
                    <a :href="url" target="_blank" class="url">
                      {{ url }}
                    </a>
                  </li>
                </ul>
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
        <PCTable v-if="isMobile == false" :filterParams="filterParams" />
        <MobileTable v-else :filterParams="filterParams" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../Common/Header.vue";
import PCTable from "../Top/PCTable.vue";
import MobileTable from "../Top/MobileTable.vue";
import { useRoute } from "vue-router";

import common from "../Common/Common.js";
import resources from "../Common/Resources.js";
import top from "../Top/Top.js";

import actorImage1 from "../../assets/images/actor_1.png";
import actorImage2 from "../../assets/images/actor_2.png";
import actorImage3 from "../../assets/images/actor_3.png";
import actorImage4 from "../../assets/images/actor_4.png";
import actorImage5 from "../../assets/images/actor_5.png";
import actorImage6 from "../../assets/images/actor_6.png";
import actorImage7 from "../../assets/images/actor_7.png";
import actorImage8 from "../../assets/images/actor_8.png";
import actorImage9 from "../../assets/images/actor_9.png";

export default {
  name: "ActorShow",
  components: {
    Header,
    PCTable,
    MobileTable,
  },
  data: function () {
    let route = useRoute();
    let actorsData = resources.getActorsData();
    let actorIdx = Object.keys(actorsData).find((key) => {
      return key == route.params.actorId;
    });

    let filterParams = top.getInitialFilterParams();
    filterParams.actors.forEach((elem) => {
      if (elem.id == route.params.actorId) {
        elem.check = true;
      }
    });

    return {
      route: route,
      actorImages: [actorImage1, actorImage2, actorImage3, actorImage4, actorImage5, actorImage6, actorImage7, actorImage8, actorImage9],
      actor: actorsData[actorIdx],
      isMobile: common.isMobile(),
      filterParams: filterParams,
    };
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 15% 70% 15%;
}

.pc {
  grid-column: 2 / 3;
}

.mobile {
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
</style>
