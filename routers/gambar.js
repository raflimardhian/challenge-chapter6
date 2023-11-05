const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/gambar'),
    multer = require('multer')();

// router.post('/upload', multer.image.single('image'), controller.upload)
router.post('/create', multer.single('image'), controller.create);
router.put('/update/:id',multer.single('image'), controller.update);
router.get('/:id', controller.get);
router.delete('/:id', controller.destroy);

module.exports= router