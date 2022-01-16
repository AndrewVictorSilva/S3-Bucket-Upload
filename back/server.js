import express from 'express'
import { generateUploadURL } from './s3.js'

const app = express()
const port = 8080

app.use(express.static('../front'))


app.get('/s3Url', async (req, res) => {
  const url = await generateUploadURL()
  res.send({url})
})

app.listen(port, () => console.log(`listening on http://localhost:${port}`))