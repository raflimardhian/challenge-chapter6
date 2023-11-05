const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    cors = require('cors'),
    router = require('./routers'),
    errorHandling = require('./middleware/errorHandling')

require('dotenv').config()

app.use(express.json({ strict : false}))
app.use(cors())
app.use('/images', express.static('public/images'))

// ini router utama
app.use('/api/v1', router);
// ini error handling
app.use(errorHandling)
// Handle 404 route
app.get('*', (req, res) => {
    return res.status(404).json({
        error: 'End point is not registered'
    })
})

app.listen(port, () => {
    console.log(`Server is running at PORT ${port}`)
})