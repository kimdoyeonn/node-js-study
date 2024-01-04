const url = require('url')
const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.json('HOME')
})

app.get('/user', user)
app.get('/feed', feed)

app.listen(port, () => {
  console.log(`START SERVER : use ${port}`)
})

function user(req, res) {
  const userInfo = url.parse(req.url, true).query
  res.json(`[user] name: ${userInfo.user}, age: ${userInfo.age}`)
}

function feed(req, res) {
  res.json(`<ul>
    <li>picture1</li>
    <li>picture2</li>
    <li>picture3</li>
  </ul>`)
}