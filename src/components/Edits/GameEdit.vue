<template>
  <div class="edit-container">
    <Header />
    <h2 v-if="gameId == 0">ゲーム追加</h2>
    <h2 v-else>ゲーム更新</h2>
    <table>
      <tr>
        <th class="edit pale first">タイトル</th>
        <td class="first"><input placeholder="" class="edit-text" v-model="inputs.title" /></td>
      </tr>
      <tr>
        <th class="edit pale">URL</th>
        <td>
          <div v-for="(url, index) in inputs.urls" v-bind:key="'url-' + index" style="margin-bottom: 4px">
            <input placeholder="" class="edit-text" v-model="inputs.urls[index]" />
            <a v-show="index != 0" href="#" class="edit-icon eraser" style="margin-left: 4px" v-on:click="removeUrl(index)" />
          </div>
          <a href="#" class="edit-icon plus" v-on:click="addUrl()" />
        </td>
      </tr>
      <tr>
        <th class="edit pale">ジャンル</th>
        <td>
          <div v-for="(genre, index) in inputs.genres" :key="'genre-' + index" class="edit-checkbox">
            <input type="checkbox" class="edit-checkbox" v-model="inputs.genres[index].checked" />
            <label :for="'genre-' + index" class="edit-checkbox">{{ gameGenresData[genre.id] }}</label>
          </div>
        </td>
      </tr>
      <tr>
        <th class="edit pale">コメント</th>
        <td class="first"><textarea placeholder="" rows="4" class="edit-text" v-model="inputs.comment" /></td>
      </tr>
    </table>
    <button v-if="gameId == 0" v-on:click="create()" class="edit-create">作成</button>
    <button v-else v-on:click="create()" class="edit-create">更新</button>
    <router-link :to="{ name: 'Games' }"><button class="edit-cancel">戻る</button></router-link>
  </div>
</template>

<script>
import Header from "../Common/Header.vue";
import gamesData from "../../assets/resources/Games.json";
import gameGenresData from "../../assets/resources/GameGenres.json";

export default {
  name: "GameEdit",
  components: {
    Header,
  },
  data: function () {
    let inputs = {};
    let gameId = this.$route.params.gameId;
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
        genres: genres,
        comment: "",
      };
    } else {
      var org = gamesData[String(gameId)];
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
        urls: org.urls,
        genres: genres,
        comment: org.comment,
      };
    }
    // console.log(inputs);

    return {
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

function create() {
  let postData = {
    name: this.inputs.title,
    urls: this.inputs.urls,
    genreIds: this.inputs.genres.filter((v) => v.checked).map((v) => parseInt(v.id)),
    comment: this.inputs.comment,
  };

  let request = new XMLHttpRequest();
  request.withCredentials = true;
  if (this.gameId == 0) {
    request.open("POST", "http://localhost:8081/game/create");
  } else {
    request.open("POST", `http://localhost:8081/game/edit/${this.gameId}`);
  }
  request.setRequestHeader("Content-Type", "application/json");
  request.onload = () => {
    console.log(`success: ${request.status}`);
    this.$router.push({ name: "Games" });
  };
  request.onerror = () => {
    console.log(`error: ${request.status}`);
  };
  request.send(JSON.stringify(postData));
}
</script>

<style scoped>
@import "./Edit.css";
</style>