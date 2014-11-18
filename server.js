var express = require('express'),
    http = require('http'),
    path = require('path');
    
var app = express();

// all environments
app.set('port', process.env.PORT || 4000);
app.use(express.favicon());
app.use(express.urlencoded());
app.use(express.logger('dev'));
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.post('/comments', function(req, res) {
  res.send({text: req.body.text});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
