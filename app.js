const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT||3000, function() {
    console.log("Server started on port 3000");
  });