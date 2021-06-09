<template>
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
            <div v-for="(actor, index) in inputs.actors" :key="'actor-' + index" class="checkbox">
              <input type="checkbox" class="checkbox" v-model="inputs.actors[index].checked" />
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
  </div>
</template>

<script>
import Header from "../Common/Header.vue";

import resources from "../Common/Resources.js";

export default {
  name: "MovieEdit",
  components: {
    Header,
  },
  data: function () {
    let movieId = this.$route.params.movieId;

    let moviesData = resources.getMoviesData();
    let gamesData = resources.getGamesData();
    let actorsData = resources.getActorsData();

    let inputs = {};
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
  request.onload = async () => {
    console.log(`success: ${request.status}`);
    resources.clearAllData();
    await resources.loadAllData();
    this.$router.go(-1);
  };
  request.onerror = () => {
    console.log(`error: ${request.status}`);
  };
  request.send(JSON.stringify(postData));
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