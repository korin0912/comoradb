<template>
  <h1>
    <a href="https://www.youtube.com/channel/UC5fwtXKwDpgboOud4DbjQTg" target="_blank">
      <img alt="comoradb logo" src="../../assets/images/logo.png" />
    </a>
    <span>『コモラとチャンチョのゲーム部屋』ゲーム一覧</span>
  </h1>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
h1 {
  font-size: 2.3rem;
  font-weight: 600;
}

h1 img {
  display: inline-block;
  vertical-align: middle;
  border-style: solid;
  border-width: 1px;
  border-color: lightgray;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

h1 span {
  display: inline-block;
  vertical-align: middle;
}
</style>
