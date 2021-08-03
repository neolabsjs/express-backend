const express = require('express')
const routes = require('./src/routes/index')

const app = express()
const PORT = 5000
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use('/api', routes)

function bootstrap() {
    app.listen(PORT, () =>
        console.log(`Server has been started on port ${PORT}`))
}
bootstrap()
