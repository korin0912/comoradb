# comoradb

[コモラとチャンチョのゲーム部屋](https://www.youtube.com/channel/UC5fwtXKwDpgboOud4DbjQTg/videos) でプレイされたゲームを、リスト化したWEBアプリです。

---

## 利用ソフトウェア/リソース

Vue Cli を利用し、静的コンテンツとしてブラウザのみで動作します。

* [Vue Cli](https://cli.vuejs.org)
* [Vue.js](https://jp.vuejs.org/index.html)
* [Vue-head](https://www.npmjs.com/package/vue-head)
* [Font Awesome](https://fontawesome.com): ゲームジャンルのアイコン

---

## リストの更新

Youtube からクローリングはしていないため、手動でリソースの更新が必要です。
| ファイル | 説明 |
| - | - |
| `src/assets/Games.json` | ゲームリスト |
| `src/assets/GameGenres.json` | ゲームジャンルリスト |
| `src/assets/Movies.json` | 動画リスト |
| `src/assets/Actors.json` | 出演者リスト |

通常は、`Games.json` と `Movies.json` を更新し  
必要に応じて、`GameGenres.json` と `Actors.json` を更新します。

---

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
