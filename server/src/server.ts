import express from 'express'

const app = express()

app.get('/ads', (req, res) => {
  res.json([
    {
      id: 1, name: 'Flamengo'
    }
  ])
})

app.listen(3333)