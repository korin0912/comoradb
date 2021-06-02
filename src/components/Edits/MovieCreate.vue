<template>
  <div>
    <Header />
    <h2>動画追加</h2>
    <table>
      <tr>
        <th class="pale first">タイトル</th>
        <td class="first"><input placeholder="" class="text" v-model="inputs.title" /></td>
      </tr>
      <tr>
        <th class="pale">URL</th>
        <td>
          <div v-for="(url, index) in inputs.urls" :key="'url-' + index" style="display: flex; margin-bottom: 4px">
            <input placeholder="" class="text" v-model="inputs.urls[index]" />
            <a v-show="index != 0" href="#" class="icon-eraser" v-on:click="removeUrl(index)" />
          </div>
          <a href="#" class="icon-plus" v-on:click="addUrl()" />
        </td>
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
            <a v-show="index != 0" href="#" class="icon-eraser" v-on:click="removeGame(index)" />
          </div>
          <a href="#" class="icon-plus" v-on:click="addGame()" />
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
    <button class="create">作成</button>
    <button class="cancel">戻る</button>
  </div>
</template>

<script>
import Header from "../Common/Header.vue";
import gamesData from "../../assets/resources/Games.json";
import actorsData from "../../assets/resources/Actors.json";

export default {
  name: "GameCreate",
  components: {
    Header,
  },
  data: function () {
    let now = new Date();
    let urls = [];
    urls.push("");
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
    let inputs = {
      title: "",
      urls: urls,
      releaseDate: `${now.getFullYear()}-${("0" + (now.getMonth() + 1)).substring(-2)}-${("0" + now.getDate()).substring(-2)}`,
      gameIds: gameIds,
      actors: actors,
      chat: false,
      comment: "",
    };
    // console.log(inputs);

    return {
      gamesData: gamesData,
      actorsData: actorsData,
      inputs: inputs,
    };
  },
  methods: {
    addUrl: addUrl,
    removeUrl: removeUrl,
    addGame: addGame,
    removeGame: removeGame,
  },
};

function addUrl() {
  this.inputs.urls.push("");
}

function removeUrl(index) {
  this.inputs.urls.splice(index, 1);
}

function addGame() {
  this.inputs.gameIds.push(1);
}

function removeGame(index) {
  this.inputs.gameIds.splice(index, 1);
}
</script>

<style scoped>
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

.icon-plus {
  height: 15px;
  margin: auto 0 auto 0;
  vertical-align: middle;
}

.icon-plus::before {
  font-family: "Font Awesome 5 Free";
  content: "\f0fe";
  font-size: 15px;
  font-weight: 400;
  color: #aaaaaa;
  vertical-align: middle;
}

.icon-eraser {
  height: 15px;
  margin: auto 0 auto 4px;
  vertical-align: middle;
}

.icon-eraser::before {
  font-family: "Font Awesome 5 Free";
  content: "\f12d";
  font-size: 15px;
  font-weight: 900;
  color: #aaaaaa;
}

button.create {
  background-color: #c1abd2;
  margin: 4px 4px 0 0;
  border-width: 1px;
  border-style: solid;
  border-color: #dddddd;
  border-radius: 8px;
}

button.cancel {
  background-color: #8457a8;
  margin: 4px 4px 0 0;
  border-width: 1px;
  border-style: solid;
  border-color: #dddddd;
  border-radius: 8px;
}
</style>