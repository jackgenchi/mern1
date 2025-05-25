import express from 'express'

const app = express()
const router = express.Router()

app.use(express.static('public'))

router.get('/', (req, res) => {
    res.sendFile('index.html')
  })

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

