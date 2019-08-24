const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log("This was requested on ", new Date())
  res.send(new Date())
})

app.listen(process.env.PORT || 8081, function () {
  console.log("Listening on 8081")
})
