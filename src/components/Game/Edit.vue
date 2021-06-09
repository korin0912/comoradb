<template>
  <div class="container">
    <Header />
    <h2>{{ gameId == 0 ? 'ゲーム追加' : 'ゲーム更新' }}</h2>
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
              <a v-show="index != 0" href="#" class="icon minus" style="margin-left: 4px" v-on:click="removeUrl(index)" />
            </div>
            <a href="#" class="icon plus" v-on:click="addUrl()" />
          </td>
        </tr>
        <tr>
          <th class="edit pale">ジャンル</th>
          <td>
            <div v-for="(genre, index) in inputs.genres" :key="'genre-' + index" class="checkbox">
              <input type="checkbox" class="checkbox" v-model="inputs.genres[index].checked" />
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

import resources from "../Common/Resources.js";

export default {
  name: "GameEdit",
  components: {
    Header,
  },
  data: function () {
    let gameId = this.$route.params.gameId;

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