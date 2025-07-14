var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public'))


app.get('/', function(request, response) {
  response.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Universe Explorer</title>
      <style>
        body {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          color: #fff;
          font-family: 'Segoe UI', Arial, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          margin: 0;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5em;
          letter-spacing: 2px;
        }
        p {
          font-size: 1.2rem;
          margin-bottom: 2em;
        }
        a {
          color: #ffd700;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.2s;
        }
        a:hover {
          color: #fff;
        }
        .footer {
          position: absolute;
          bottom: 20px;
          font-size: 0.9rem;
          color: #ccc;
        }
      </style>
    </head>
    <body>
      <h1>🚀 Universe Explorer</h1>
      <p>Welcome to my stylish Node.js sample project!</p>
      <a href="https://github.com/anupsharma329/node-js-sample" target="_blank">View on GitHub</a>
      <div class="footer">Updated at ${new Date().toLocaleString()}</div>
    </body>
    </html>
  `);
});

app.listen(app.get('port'), '0.0.0.0', function() {
  console.log("Node app is running at 0.0.0.0:" + app.get('port'))
})
// console.log("🚀 Updated at " + new Date());
