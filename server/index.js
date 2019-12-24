const express = require('express');
let app = express();
var $ = require("jquery");

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  axios({
    url: 'https://api.github.com/users/octocat/orgs',
    method: 'post'
  })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  axios({
    url: 'https://api.github.com/users/octocat/orgs',
    method: 'get'
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

