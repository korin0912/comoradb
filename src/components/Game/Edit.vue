﻿<template>
  <div class="container">
    <Header />
    <h2>{{ gameId == 0 ? "ゲーム追加" : "ゲーム更新" }}</h2>
    <table>
      <thead>
        <tr>
          <th class="edit pale">タイトル</th>
          <td><input placeholder="" class="text" v-model="inputs.title" /></td>
        </tr>
        <tr>
          <th class="edit pale">URL</th>
          <td>
            <div v-for="(url, index) in inputs.urls" v-bind:key="'url-' + index" style="margin-bottom: 4px">
              <input placeholder="" class="text" v-model="inputs.urls[index]" />
              <i v-show="index != 0" class="icon minus" style="margin-left: 4px" v-on:click="removeUrl(index)" />
            </div>
            <i class="icon plus" v-on:click="addUrl()" />
          </td>
        </tr>
        <tr>
          <th class="edit pale">再生リストURL</th>
          <td>
            <div style="margin-bottom: 4px">
              <input placeholder="" class="text" v-model="inputs.playListUrl" />
            </div>
          </td>
        </tr>
        <tr>
          <th class="edit pale">ジャンル</th>
          <td>
            <div v-for="(genre, index) in inputs.genres" :key="'genre-' + index" class="checkbox">
              <input type="checkbox" :name="'genre-' + index" :id="'genre-' + index" class="checkbox hoge" v-model="inputs.genres[index].checked" />
              <label :for="'genre-' + index" class="checkbox">{{ gameGenresData[genre.id] }}</label>
            </div>
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
  </div>
</template>

<script>
import Header from "../Common/Header.vue";
import { useRoute, useRouter } from "vue-router";

import resources from "../Common/Resources.js";

export default {
  name: "GameEdit",
  components: {
    Header,
  },
  data: function () {
    let route = useRoute();
    let gameId = route.params.gameId;

    let gamesData = resources.getGamesData();
    let gameGenresData = resources.getGameGenresData();

    let inputs = {};
    // console.log(gameId);
    if (gameId == 0) {
      let gameIds = [];
      gameIds.push(1);

      let genres = [];
      Object.keys(gameGenresData).forEach((genreId) => {
        genres.push({
          id: genreId,
          checked: false,
        });
      });

      inputs = {
        title: "",
        urls: [""],
        playListUrl: "",
        genres: genres,
        comment: "",
      };
    } else {
      let org = gamesData[String(gameId)];
      // console.log(org);

      let genres = [];
      Object.keys(gameGenresData).forEach((genreId) => {
        genres.push({
          id: genreId,
          checked: org.genreIds.findIndex((key) => key == genreId) != -1,
        });
      });

      inputs = {
        title: org.name,
        urls: org.urls.concat(),
        playListUrl: "playListUrl" in org ? org.playListUrl : "",
        genres: genres,
        comment: org.comment,
      };
    }
    // console.log(inputs);

    return {
      router: useRouter(),
      gameId: gameId,
      gamesData: gamesData,
      gameGenresData: gameGenresData,
      inputs: inputs,
    };
  },
  methods: {
    addUrl: addUrl,
    removeUrl: removeUrl,
    create: create,
  },
};

function addUrl() {
  this.inputs.urls.push("");
}

function removeUrl(index) {
  this.inputs.urls.splice(index, 1);
}

async function create() {
  resources.updateGame(this.gameId, {
    name: this.inputs.title,
    urls: this.inputs.urls.filter((v) => v),
    playListUrl: this.inputs.playListUrl,
    genreIds: this.inputs.genres.filter((v) => v.checked).map((v) => parseInt(v.id)),
    comment: this.inputs.comment,
  });

  this.router.back();
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
</style>
