const express = require('express')
const app = express()
const port = 3000

app.get('/trang-chu-home', (req, res) => {
  res.send('Tôi là Bùi Quang Trưởng v2sss')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})