﻿<template>
  <div class="container">
    <Header />
    <h2>{{ movieId == 0 ? "動画追加" : "動画更新" }}</h2>
    <table>
      <thead>
        <tr>
          <th class="edit pale">タイトル</th>
          <td><input placeholder="" class="text" v-model="inputs.title" /></td>
        </tr>
        <tr>
          <th class="edit pale">URL</th>
          <td><input placeholder="" class="text" v-model="inputs.url" /></td>
        </tr>
        <tr>
          <th class="edit pale">公開日</th>
          <td><input type="date" class="date" v-model="inputs.releaseDate" /></td>
        </tr>
        <tr>
          <th class="edit pale">ゲーム</th>
          <td>
            <div v-for="(gameId, index) in inputs.gameIds" v-bind:key="'game-' + index" style="margin-bottom: 4px">
              <select v-model="inputs.gameIds[index]">
                <option v-for="(game, index) in gamesData" :key="'game-option-' + index" :value="game.gameId">{{ game.name }}</option>
              </select>
              <a v-show="index != 0" href="#" class="icon minus" style="margin-left: 4px" v-on:click="removeGame(index)" />
            </div>
            <i class="icon plus" v-on:click="addGame()" />
          </td>
        </tr>
        <tr>
          <th class="edit pale">出演者</th>
          <td>
            <div v-for="(actor, index) in inputs.actors" :key="'actor-' + index" class="checkbox">
              <input type="checkbox" :name="'actor-' + index" :id="'actor-' + index" class="checkbox" v-model="inputs.actors[index].checked" />
              <label :for="'actor-' + index" class="checkbox">{{ actorsData[actor.id].name }}</label>
            </div>
          </td>
        </tr>
        <tr>
          <th class="edit pale">雑談</th>
          <td>
            <input type="checkbox" class="checkbox" v-model="inputs.chat" />
          </td>
        </tr>
        <tr>
          <th class="edit pale">コメント</th>
          <td><textarea placeholder="" rows="4" class="text" v-model="inputs.comment" /></td>
        </tr>
      </thead>
    </table>
    <div style="height: 60px">
      <button v-on:click="create()" class="submit" />
    </div>
    <!-- <div v-if="movieId != 0" style="height: 60px">
      <button v-on:click="remove()" class="remove" />
    </div> -->
  </div>
</template>

<script>
import Header from "../Common/Header.vue";
import { useRoute, useRouter } from "vue-router";

import resources from "../Common/Resources.js";

export default {
  name: "MovieEdit",
  components: {
    Header,
  },
  data: function () {
    let route = useRoute();
    let movieId = route.params.movieId;

    let moviesData = resources.getMoviesData();
    let gamesData = resources.getGamesData();
    let actorsData = resources.getActorsData();

    let tmp = [];
    Object.keys(gamesData)
      .reverse()
      .forEach((gameId) => {
        tmp.push({
          gameId: gameId,
          name: gamesData[gameId].name,
        });
      });
    tmp.push({
      gameId: 99999,
      name: "指定なし",
    });
    gamesData = tmp;

    let inputs = {};
    // console.log(movieId);
    if (movieId == 0) {
      let now = new Date();

      let gameIds = [];
      gameIds.push(gamesData[0].gameId);

      let actors = [];
      Object.keys(actorsData).forEach((actorId) => {
        actors.push({
          id: actorId,
          checked: actorId == 1 ? true : false,
        });
      });

      let month = "0" + (now.getMonth() + 1);
      let day = "0" + now.getDate();
      inputs = {
        title: "",
        url: "",
        releaseDate: `${now.getFullYear()}-${month.substring(month.length - 2)}-${day.substring(day.length - 2)}`,
        gameIds: gameIds,
        actors: actors,
        chat: false,
        comment: "",
      };
      // console.log(inputs);
    } else {
      let org = moviesData[String(movieId)];
      // console.log(org);

      let actors = [];
      Object.keys(actorsData).forEach((actorId) => {
        actors.push({
          id: actorId,
          name: actorsData[actorId].name,
          checked: org.actorIds.findIndex((key) => key == actorId) != -1,
        });
      });

      inputs = {
        title: org.name,
        url: org.url,
        releaseDate: org.releaseDate.replaceAll("/", "-"),
        gameIds: org.gameIds,
        actors: actors,
        chat: org.chat,
        comment: org.comment,
      };
    }
    // console.log(inputs);

    return {
      router: useRouter(),
      movieId: movieId,
      gamesData: gamesData,
      actorsData: actorsData,
      inputs: inputs,
    };
  },
  methods: {
    addGame: addGame,
    removeGame: removeGame,
    create: create,
    remove: remove,
  },
};

function addGame() {
  this.inputs.gameIds.push(1);
}

function removeGame(index) {
  this.inputs.gameIds.splice(index, 1);
}

async function create() {
  resources.updateMovie(this.movieId, {
    name: this.inputs.title,
    url: this.inputs.url,
    releaseDate: this.inputs.releaseDate.replaceAll("-", "/"),
    gameIds: this.inputs.gameIds.map((v) => parseInt(v)),
    actorIds: this.inputs.actors.filter((v) => v.checked).map((v) => parseInt(v.id)),
    chat: this.inputs.chat,
    comment: this.inputs.comment,
  });

  this.router.back();
}

async function remove() {
  resources.removeMovie(this.movieId);

  this.router.push({ path: '/' });
}
</script>

<style scoped>
.container {
  width: 1000px;
  margin: 0 auto 0 auto;
}

th.edit {
  width: 100px;
}

input.text {
  width: calc(100% - 6px - 23px);
  margin: 0;
  padding: 2px;
  border-radius: 4px 4px 4px 4px;
  border-width: 1px;
  border-color: #aaaaaa;
  border-style: solid;
}

input.date {
  text-align: left;
  width: 200px;
  margin: 0;
  border-radius: 4px 4px 4px 4px;
  border-width: 1px;
  border-color: #aaaaaa;
  border-style: solid;
}

textarea.text {
  width: calc(100% - 6px);
  margin: 0;
  padding: 2px;
  border-radius: 4px 4px 4px 4px;
  border-width: 1px;
  border-color: #aaaaaa;
  border-style: solid;
}

div.checkbox {
  text-align: left;
  width: 100%;
  margin: 0;
}

input.checkbox {
  margin: 0px 3px 0px 0px;
}

label.checkbox {
  font-size: 0.8rem;
  font-weight: 200;
  vertical-align: top;
}

button.submit {
  float: right;
  margin: 4px 0 0 0;
}

button.remove {
  float: right;
  margin: 4px 0 0 0;
}
</style>
