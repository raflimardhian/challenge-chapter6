
// module.exports ={
//     upload: async (req, res) =>{
//         try {
//             const fileToString = req.file.buffer.toString('base64');
//             const uploadFile = await imagekit.upload({
//                 fileName: req.file.originalName,
//                 file: fileToString
//             })

//             return res.status(200).json({
//                 date: {
//                     name: uploadFile.name,
//                     url: uploadFile.url,
//                     type: uploadFile.type
//                 }
//             })
//         } catch (error) {
//             return res.status(500).json({
//                 error
//             })
//         }
//     }
// }

const { gambar } = require('../models');
const utils = require('../utils');
// const imageKit = require('imagekit')

module.exports = {
    create: async (req, res, next) => {
        try {

            const fileTostring = req.file.buffer.toString('base64');

            const uploadFile = await utils.imageKit.upload({
                fileName: req.file.originalname,
                file: fileTostring
            });

            const data = await gambar.create({
                data: {
                    judul: req.body.judul,
                    deskripsi: req.body.deskripsi,
                    image: uploadFile.url
                }
            })

            return res.status(201).json({
                data
            })

        } catch (error) {
            next(error)
        }
    },
    update: async (req, res, next) => {
        try {
            const fileTostring = req.file.buffer.toString('base64');

            const uploadFile = await utils.imageKit.upload({
                fileName: req.file.originalname,
                file: fileTostring
            });

            const data = await gambar.update({
                where: {
                    id: parseInt(req.params.id)
                },
                data: {
                    judul: req.body.judul,
                    deskripsi: req.body.deskripsi,
                    image: uploadFile.url
                }
            })

            return res.status(200).json({
                data
            })

        } catch (error) {
            next(error)
        }
    },
    get: async (req, res, next) => {
        try {

            const data = await gambar.findUnique({
                where: {
                    id: parseInt(req.params.id)
                }
            })

            return res.status(200).json({
                data
            })
            
        } catch (error) {
            next(error)
        }
    },
    destroy: async (req, res, next) => {
        try {

            const data = await gambar.delete({
                where: {
                    id: parseInt(req.params.id)
                }
            })

            return res.status(204).json()
            
        } catch (error) {
            next(error)
        }
    }
}