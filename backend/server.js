
const express = require('express')
const app = express()

app.use(express.json())
app.use(function (req, res, next) {
  const allowedOrigins = [
    'http://localhost:5174',
    'https://login-nostra-9sce.vercel.app'
  ]

  const origin = req.headers.origin

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204)
  }

  next()
})
const users = [
  {
    name: 'Nostra User',
    email: 'user@nostra.com',
    password: '123456'
  }
]

app.get('/', function (req, res) {
  res.send('Nostra Backend is Running!')
})

app.post('/signup', function (req, res) {
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password

  const existingUser = users.find(function (user) {
    return user.email === email
  })

  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: 'Email already registered'
    })
  }

  users.push({
    name: name,
    email: email,
    password: password
  })

  res.status(201).json({
    success: true,
    message: 'Account created successfully!'
  })
})

app.post('/login', function (req, res) {
  const email = req.body.email
  const password = req.body.password
  const user = users.find(function (user) {
    return user.email === email && user.password === password
  })

  if (user) {
    res.status(200).json({
      success: true,
      message: 'Login successful!'
    })
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid email or password'
    })
  }
})
const PORT = process.env.PORT || 5000
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`)
})
