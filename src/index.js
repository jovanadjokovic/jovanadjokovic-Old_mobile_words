const express = require('express')
const router = require('./router')
var cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(router)


app.listen(port, () => {
    console.log('Server is up on port ',port)
})

   