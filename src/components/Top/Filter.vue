<template>
  <div class="outline-box filter" style="border-color: var(--comora-color-dirk-purple)">
    <label class="caption">フィルター</label>
    <!-- リセットボタン -->
    <div class="filter-init">
      <button v-on:click="initFilter" class="filter-init">リセット</button>
    </div>
    <!-- テキスト -->
    <div class="outline-box">
      <label class="caption">テキスト</label>
      <input v-on:input="updateFilter" v-model="params.text" placeholder="" class="filter-text" />
      <button v-on:click="resetInput('text')" class="input-reset"><i class="icon reset" /></button>
    </div>
    <!-- 出演者 -->
    <div class="outline-box">
      <label class="caption">出演者</label>
      <div v-for="actor in params.actors" :key="'filter-actor-' + actor.id" class="filter-checkbox">
        <input type="checkbox" :id="'filter-actor-' + actor.id" v-on:change="updateFilter" v-model="actor.check" class="filter-checkbox" />
        <label :for="'filter-actor-' + actor.id" class="filter-checkbox">
          <a href="javascript:void(0)" v-on:click="goActor(actor.id)">{{ actor.name }}</a>
        </label>
      </div>
    </div>
    <!-- 公開日 -->
    <div class="outline-box">
      <label class="caption">公開日</label>
      <div>
        <input type="date" id="filter-date-from" v-on:change="updateFilter" v-model="params.releaseDates.from" class="filter-date" />
        <button v-on:click="resetInput('releaseDateFrom')" class="input-reset"><i class="icon reset" /></button>
      </div>
      <span>～</span>
      <div>
        <input type="date" id="filter-date-to" v-on:change="updateFilter" v-model="params.releaseDates.to" class="filter-date" />
        <button v-on:click="resetInput('releaseDateTo')" class="input-reset"><i class="icon reset" /></button>
      </div>
    </div>
    <!-- ジャンル -->
    <div class="outline-box">
      <label class="caption">ジャンル</label>
      <div v-for="genre in params.genres" :key="'filter-genre-' + genre.id" class="filter-checkbox">
        <input type="checkbox" :id="'filter-genre-' + genre.id" v-on:change="updateFilter" v-model="genre.check" class="filter-checkbox" />
        <label :for="'filter-genre-' + genre.id" class="filter-checkbox">{{ genre.name }}</label>
      </div>
    </div>
    <!-- 雑談 -->
    <div class="outline-box">
      <label class="caption">その他</label>
      <div class="filter-checkbox">
        <input type="checkbox" :id="'filter-chat'" v-on:change="updateFilter" v-model="params.chat" class="filter-checkbox" />
        <label :for="'filter-chat'" class="filter-checkbox">雑談のみ</label>
      </div>
    </div>
  </div>
</template>

<script>
import top from "./Top.js";

export default {
  name: "TopFilter",
  props: ["initFilterParams"],
  data: function () {
    return {
      params: this.initFilterParams,
    };
  },
  methods: {
    initFilter: function () {
      this.params = top.getInitialFilterParams();
      this.$emit("updateTable", this.params);
    },
    updateFilter: function () {
      this.params = top.updateFilterParams(this.params);
      this.$emit("updateTable", this.params);
    },
    resetInput: function (filter) {
      this.params = top.resetFilterParamsInput(this.params, filter);
      this.$emit("updateTable", this.params);
    },
    goActor: function (actorId) {
      // console.log(actorId);
      document.body.classList.remove("bm-overlay");
      this.$router.push({ name: "ActorShow", params: { actorId: actorId } });
    }
  },
};
</script>

<style scoped>
input.filter-text {
  width: calc(100% - 6px - 23px);
  margin: 0;
  padding: 2px;
  border-radius: 4px 4px 4px 4px;
  border-width: 1px;
  border-color: #aaaaaa;
  border-style: solid;
}

div.filter-checkbox {
  text-align: left;
  width: 100%;
  margin: 0;
}

input.filter-checkbox {
  margin: 0px 3px 0px 0px;
}

label.filter-checkbox {
  font-size: 0.8rem;
  font-weight: 200;
  vertical-align: top;
}

input.filter-date {
  text-align: left;
  width: calc(100% - 6px - 23px);
  margin: 0;
  border-radius: 4px 4px 4px 4px;
  border-width: 1px;
  border-color: #aaaaaa;
  border-style: solid;
}

button.input-reset {
  width: 21px;
  height: 21px;
  margin: 0 0 0 2px;
  border-color: #ffffff;
  background-color: #ffffff;
  border-style: solid;
  padding: 0;
  content: "f057";
}

div.filter-init {
  position: relative;
  border-radius: 5px;
  border-width: 0px;
  margin: 0px 10px 10px 0px;
  padding: 0 0 5px 0px;
  text-align: left;
}

button.filter-init {
  border-width: 1px;
  border-style: solid;
  border-color: #dddddd;
  border-radius: 8px;
  margin: 0;
  padding: 1px 10px 1px 10px;
}

.filter {
  margin: 10px 10px 60px 10px;
}
</style>