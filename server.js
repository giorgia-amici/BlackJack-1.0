var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path')
// app.use(bodyParser.urlencoded());


app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response){
  response.render('index')
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;