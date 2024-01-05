const url = require('url')
const express = require('express')
const app = express()

const port = 3000

let posts = []

app.use(express.json()) // body를 사용하기 위해 활성화
app.use(express.urlencoded({ extended: true })) // POST 요청 시 컨텐트 타입이 application/x-www-urlendcoded인 경우 파싱

app.get('/', (req, res) => {
  res.json(posts)
})

app.post('/posts', (req, res) => {
  const { title, name, text } = req.body
  const newPost = {
    id: posts.length + 1,
    title,
    text,
    name,
    createdAt: Date(),
  }

  posts.push(newPost)

  res.json(newPost)
})

app.delete('/posts/:id', (req, res) => {
  const id = req.params.id

  const filteredPosts = posts.filter((post) => post.id !== +id) // +숫자로 변환
  const isLengthChanged = filteredPosts.length !== posts.length
  posts = filteredPosts

  if (isLengthChanged) {
    res.json("OK")
    return
  }
  res.json("NOT CHANGED")
})

app.listen(port, () => {
  console.log(`START POST SERVER : use ${port}`)
})
