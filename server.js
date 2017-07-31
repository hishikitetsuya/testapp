var express = require("express");
var bodyParser = require('body-parser');

var app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.json({
  extended: true
}));

app.listen(process.env.PORT || 8080);
app.use("/public", express.static("public"));

app.get('/', function(req,res) {
  res.render("./server.ejs");
})

app.post('/submit', function(req,res) {
  console.log(req.body);
  res.send(req.body);
});

var coap = require('coap'),
  server = coap.createServer()

server.on('request', function(req, res) {
  res.end('Hello ' + req.url.split('/')[1] + '\n')
});

server.listen(function() {
  console.log('server started')
});
