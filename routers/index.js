const express = require('express'),
    router = express.Router(),
    gambarRouter = require('./gambar')

router.use('/gambar', gambarRouter);

module.exports = router