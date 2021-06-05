<template>
  <div class="edit-container">
    <Header />
    <h2 v-if="movieId == 0">動画追加</h2>
    <h2 v-else>動画更新</h2>
    <table>
      <thead>
        <tr>
          <th class="edit pale">タイトル</th>
          <td><input placeholder="" class="edit-text" v-model="inputs.title" /></td>
        </tr>
        <tr>
          <th class="edit pale">URL</th>
          <td><input placeholder="" class="edit-text" v-model="inputs.url" /></td>
        </tr>
        <tr>
          <th class="edit pale">公開日</th>
          <td><input type="date" class="edit-date" v-model="inputs.releaseDate" /></td>
        </tr>
        <tr>
          <th class="edit pale">ゲーム</th>
          <td>
            <div v-for="(gameId, index) in inputs.gameIds" v-bind:key="'game-' + index" style="margin-bottom: 4px">
              <select v-model="inputs.gameIds[index]">
                <option v-for="(game, index) in gamesData" :key="'game-option-' + index" :value="index">{{ game.name }}</option>
              </select>
              <a v-show="index != 0" href="#" class="icon minus" style="margin-left: 4px" v-on:click="removeGame(index)" />
            </div>
            <a href="#" class="icon plus" v-on:click="addGame()" />
          </td>
        </tr>
        <tr>
          <th class="edit pale">出演者</th>
          <td>
            <div v-for="(actor, index) in inputs.actors" :key="'actor-' + index" class="edit-checkbox">
              <input type="checkbox" class="edit-checkbox" v-model="inputs.actors[index].checked" />
              <label :for="'actor-' + index" class="edit-checkbox">{{ actorsData[actor.id].name }}</label>
            </div>
          </td>
        </tr>
        <tr>
          <th class="edit pale">雑談</th>
          <td>
            <input type="checkbox" class="edit-checkbox" v-model="inputs.chat" />
          </td>
        </tr>
        <tr>
          <th class="edit pale">コメント</th>
          <td><textarea placeholder="" rows="4" class="edit-text" v-model="inputs.comment" /></td>
        </tr>
      </thead>
    </table>
    <div style="height: 60px;">
      <button v-if="movieId == 0" v-on:click="create()" class="edit-create">作成</button>
      <button v-else v-on:click="create()" class="edit-create">更新</button>
      <router-link :to="{ name: 'Games' }"><button class="edit-cancel">戻る</button></router-link>
    </div>
  </div>
</template>

<script>
import Header from "../Common/Header.vue";
import moviesData from "../../assets/resources/Movies.json";
import gamesData from "../../assets/resources/Games.json";
import actorsData from "../../assets/resources/Actors.json";

export default {
  name: "MovieEdit",
  components: {
    Header,
  },
  data: function () {
    let inputs = {};
    let movieId = this.$route.params.movieId;
    // console.log(movieId);
    if (movieId == 0) {
      let now = new Date();

      let gameIds = [];
      gameIds.push(1);

      let actors = [];
      Object.keys(actorsData).forEach((actorId) => {
        actors.push({
          id: actorId,
          checked: actorId == 1 ? true : false,
        });
      });

      inputs = {
        title: "",
        url: "",
        releaseDate: `${now.getFullYear()}-${("0" + (now.getMonth() + 1)).substring(-2)}-${("0" + now.getDate()).substring(-2)}`,
        gameIds: gameIds,
        actors: actors,
        chat: false,
        comment: "",
      };
    } else {
      var org = moviesData[String(movieId)];
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
  },
};

function addGame() {
  this.inputs.gameIds.push(1);
}

function removeGame(index) {
  this.inputs.gameIds.splice(index, 1);
}

function create() {
  let postData = {
    name: this.inputs.title,
    url: this.inputs.url,
    releaseDate: this.inputs.releaseDate.replaceAll("-", "/"),
    gameIds: this.inputs.gameIds.map((v) => parseInt(v)),
    actorIds: this.inputs.actors.filter((v) => v.checked).map((v) => parseInt(v.id)),
    chat: this.inputs.chat,
    comment: this.inputs.comment,
  };

  let request = new XMLHttpRequest();
  request.withCredentials = true;
  if (this.movieId == 0) {
    request.open("POST", "http://localhost:8081/movie/create");
  } else {
    request.open("POST", `http://localhost:8081/movie/edit/${this.movieId}`);
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