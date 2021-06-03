<template>
  <div class="container">
    <Header />
    <h2>動画追加</h2>
    <table>
      <tr>
        <th class="pale first">タイトル</th>
        <td class="first"><input placeholder="" class="text" v-model="inputs.title" /></td>
      </tr>
      <tr>
        <th class="pale">URL</th>
        <td><input placeholder="" class="text" v-model="inputs.url" /></td>
      </tr>
      <tr>
        <th class="pale">公開日</th>
        <td><input type="date" class="date" v-model="inputs.releaseDate" /></td>
      </tr>
      <tr>
        <th class="pale">ゲーム</th>
        <td>
          <div v-for="(gameId, index) in inputs.gameIds" v-bind:key="'game-' + index" style="margin-bottom: 4px">
            <select v-model="inputs.gameIds[index]">
              <option v-for="(game, index) in gamesData" :key="'game-option-' + index" :value="index">{{ game.name }}</option>
            </select>
            <a v-show="index != 0" href="#" class="icon eraser" style="margin-left: 4px" v-on:click="removeGame(index)" />
          </div>
          <a href="#" class="icon plus" v-on:click="addGame()" />
        </td>
      </tr>
      <tr>
        <th class="pale">出演者</th>
        <td>
          <div v-for="(actor, index) in inputs.actors" :key="'actor-' + index" class="checkbox">
            <input type="checkbox" class="checkbox" v-model="inputs.actors[index].checked" />
            <label :for="'actor-' + index" class="checkbox">{{ actorsData[actor.id].name }}</label>
          </div>
        </td>
      </tr>
      <tr>
        <th class="pale">雑談</th>
        <td>
          <input type="checkbox" class="checkbox" v-model="inputs.chat" />
        </td>
      </tr>
      <tr>
        <th class="pale">コメント</th>
        <td class="first"><textarea placeholder="" rows="4" class="text" v-model="inputs.comment" /></td>
      </tr>
    </table>
    <button v-if="movieId == 0" v-on:click="create()" class="create">作成</button>
    <button v-else v-on:click="create()" class="create">更新</button>
    <router-link :to="{ name: 'Games' }"><button class="cancel">戻る</button></router-link>
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
    console.log(movieId);
    if (movieId == 0) {
      let now = new Date();

      let gameIds = [];
      gameIds.push(1);

      let actors = [];
      Object.keys(actorsData).forEach((actorId) => {
        actors.push({
          id: actorId,
          name: actorsData[actorId].name,
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
      console.log(org);

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
  let payload = JSON.stringify(postData);
  console.log(payload);
  request.send(payload);
}
</script>

<style scoped>
.container {
  width: 1000px;
  margin: 0 auto 0 auto;
}

th {
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

button.create {
  float: left;
  background-color: #c1abd2;
  margin: 4px 4px 0 0;
  border-width: 1px;
  border-style: solid;
  border-color: #dddddd;
  border-radius: 8px;
}

button.cancel {
  float: right;
  background-color: #8457a8;
  margin: 4px 4px 0 0;
  border-width: 1px;
  border-style: solid;
  border-color: #dddddd;
  border-radius: 8px;
}

.icon {
  height: 15px;
  margin: auto 0 auto 0;
  vertical-align: middle;
}

.icon.plus::before {
  font-family: "Font Awesome 5 Free";
  content: "\f0fe";
  font-size: 15px;
  font-weight: 400;
  color: #aaaaaa;
  vertical-align: middle;
}

.icon.eraser::before {
  font-family: "Font Awesome 5 Free";
  content: "\f12d";
  font-size: 15px;
  font-weight: 900;
  color: #aaaaaa;
}
</style>