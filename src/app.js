require('dotenv').config()
const express = require('express')
const { skipPartiallyEmittedExpressions } = require('typescript')
const apis = require('./routes/api/index')

const app = express()

app.use(express.json())
app.use('/api', apis)

app.listen(process.env.PORT, () => {
  console.log(`Server Running on Port ${process.env.PORT}`)
})