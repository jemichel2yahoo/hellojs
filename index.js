// hello world
const express = require('express'),
  app = express()

app.get('/', (req, res) => {
  res.send('Hello World!\n')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
