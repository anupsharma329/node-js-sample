var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('This is my sample project - Hello World!')
})

app.listen(app.get('port'), '0.0.0.0', function() {
  console.log("Node app is running at 0.0.0.0:" + app.get('port'))
})
console.log("🚀 Updated at " + new Date());
