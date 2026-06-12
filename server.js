const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/routes.js')

app.use(express.json())
app.use(express.static('public')) 
app.use('/routes', router)

app.listen(port, () => {
  console.log(`app run at http://localhost:${port}`)
})
