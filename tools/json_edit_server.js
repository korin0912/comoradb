const http = require('http');
const fs = require('fs');

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
    updateJson(0, 'Movies', req, res);
  }
  else if (req.method == 'POST' && req.url.indexOf('/movie/edit/') == 0) {
    // 動画: 編集
    let id = parseInt(req.url.substring('/movie/edit/'.length));
    console.log(`movie edit: ${id}`);
    updateJson(id, 'Movies', req, res);
  }
  else if (req.method == 'POST' && req.url == '/game/create') {
    // ゲーム: 作成
    console.log('game create');
    updateJson(0, 'Games', req, res);
  }
  else if (req.method == 'POST' && req.url.indexOf('/game/edit/') == 0) {
    // ゲーム: 編集
    let id = parseInt(req.url.substring('/game/edit/'.length));
    console.log(`game edit: ${id}`);
    updateJson(id, 'Games', req, res);
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

function updateJson(id, file, req, res) {
  // データ読み込み
  let postData = {};
  req.on('data', function (data) {
    console.log("---------------");
    console.log(data);
    console.log("---------------");
    postData = JSON.parse(data);
  }).on('end', function () {
    let data = JSON.parse(fs.readFileSync(`public/resources/${file}.json`));

    // id 未指定の場合は、採番
    if (id == 0) {
      // ID 取得
      Object.keys(data).forEach(key => {
        if (id < parseInt(key)) {
          id = parseInt(key);
        }
      });
      id++;
    }

    // console.log("---------------");
    // console.log(id);
    // console.log(postData);
    // console.log(postData['name']);
    // console.log(postData['urls'][0]);
    // console.log(postData['gameIds'][0]);
    // console.log(postData['comment']);
    console.log(JSON.stringify(postData));
    // console.log("---------------");

    // データ追加
    data[String(id)] = postData;

    // データ保存
    // let saveString = "";
    // saveString += "{\n";
    // let ids = Object.keys(data);
    // let lastId = ids.slice(-1)[0];
    // ids.forEach(id => {
    //   saveString += `  \"${id}\": `;
    //   saveString += JSON.stringify(data[id], null, null);
    //   saveString += `${lastId != id ? "," : ""}\n`;
    // });
    // saveString += "}";
    // console.log(saveString);
    // fs.writeFileSync(`public/resources/${file}.json`, saveString);
    fs.writeFileSync(`public/resources/${file}.json`, JSON.stringify(data, null, 2));

    console.log('success');
    res.end('success');
  });
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
