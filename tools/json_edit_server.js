const http = require('http');
const fs = require('fs');
const { url } = require('inspector');

const hostname = '127.0.0.1';
const port = 8081;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'text/plain');

  if (req.method == 'OPTIONS') {
    // 疎通確認
    console.log('options');
    res.end('success');
  }
  else if (req.method == 'POST' && req.url == '/movie/create') {
    // 動画: 作成
    console.log('movie create');
    updateMovie(0, req, res);
  }
  else if (req.method == 'POST' && req.url.indexOf('/movie/edit/') == 0) {
    // 動画: 編集
    var id = parseInt(req.url.substring('/movie/edit/'.length));
    console.log(`movie edit: ${id}`);
    updateMovie(id, req, res);
  }
  else if (req.method == 'POST' && req.url == '/game/create') {
    // ゲーム: 作成
    console.log('game create');
  }
  else if (req.method == 'POST' && req.url.indexOf('/game/edit/') == 0) {
    // ゲーム: 編集
    var id = parseInt(req.url.substring('/game/edit/'.length));
    console.log(`game edit: ${id}`);
  }
  else {
    // 不明
    res.statusCode = 404;
    let msg = 'unknown api';
    console.log(`method=${req.method}`);
    console.log(`url=${req.url}`);
    console.log(msg);
    res.end(msg);
  }

});

function updateMovie(id, req, res) {
  // 動画データ読み込み
  var postData = {};
  req.on('data', function (data) {
    postData = JSON.parse(data);
  }).on('end', function () {
    let moviesData = JSON.parse(fs.readFileSync("src/assets/resources/Movies.json"));

    // id 未指定の場合は、採番
    if (id == 0) {
      // ID 取得
      Object.keys(moviesData).forEach(key => {
        if (id < parseInt(key)) {
          id = parseInt(key);
        }
      });
      id++;
    }

    // データ追加
    // console.log(JSON.stringify(postData));
    moviesData[String(id)] = postData;

    // 動画データ保存
    fs.writeFileSync("src/assets/resources/Movies.json", JSON.stringify(moviesData, null, 2));

    console.log('success');
    res.end('success');
  });
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
