const http = require('http');
const { exec } = require('child_process');

const hostname = '127.0.0.1';
const port = 8082;

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
  else if (req.method == 'POST' && req.url == '/daily-update') {
    // 日次更新
    let postData = {};
    req.on("data", function (data) {
      postData = JSON.parse(data);
      console.log(postData.commitMessage);
    }).on("end", function () {
      console.log('daily update');
      // copy public/resources/*.json => docs/resources/
      let cmd = 'copy public\\resources\\*.json docs\\resources\\';
      exec(cmd, (err, stdout, stderr) => {
        if (err) {
          console.log(`copy json stderr: ${stderr}`)
          res.statusCode = 501;
          res.end('更新に失敗しました');
          return;
        }
        console.log(`copy json stdout: ${stdout}`)

        // git add + commit + push
        let cmd = `git add . && git commit -m \"${postData.commitMessage}\" && git push`;
        exec(cmd, (err, stdout, stderr) => {
          if (err) {
            console.log(`git push stderr: ${stderr}`)
            res.statusCode = 501;
            res.end('更新に失敗しました');
            return;
          }
          console.log(`git push stdout: ${stdout}`)
          res.end('更新しました');
        });
      });
    });
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

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
