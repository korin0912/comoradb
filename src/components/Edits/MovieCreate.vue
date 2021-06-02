<template>
  <div>
    <Header />
    <h2>動画追加</h2>
    <table>
      <tr>
        <th class="pale first">タイトル</th>
        <td class="first"><input placeholder="" class="text" /></td>
      </tr>
      <tr>
        <th class="pale">URL</th>
        <td class="first">
          <div style="display: flex">
            <input placeholder="" class="text" />
            <a href="#" class="icon-eraser"/>
          </div>
          <br>
          <a href="#" class="icon-plus" />
        </td>
      </tr>
      <tr>
        <th class="pale">公開日</th>
        <td><input type="date" class="date" /></td>
      </tr>
      <tr>
        <th class="pale">ゲーム</th>
        <td>
          <select name="game_1">
            <option v-for="(game, index) in gamesData" :key="'game-' + index" :value="index">{{ game.name }}</option>
          </select>
          <a href="#" class="icon-eraser" />
          <br />
          <a href="#" class="icon-plus" />
        </td>
      </tr>
      <tr>
        <th class="pale">出演者</th>
        <td>
          <div v-for="(actor, index) in actorsData" :key="'actor-' + index" class="checkbox">
            <input type="checkbox" :id="'actor-' + index" class="checkbox" />
            <label :for="'actor-' + index" class="checkbox">{{ actor.name }}</label>
          </div>
        </td>
      </tr>
      <tr>
        <th class="pale">雑談</th>
        <td>
          <input type="checkbox" id="chat" class="checkbox" />
        </td>
      </tr>
      <tr>
        <th class="pale">コメント</th>
        <td class="first"><textarea placeholder="" rows="4" class="text" /></td>
      </tr>
    </table>
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
    return {
      gamesData: gamesData,
      actorsData: actorsData,
    };
  },
};
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
  margin-top: 5px;
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
</style>