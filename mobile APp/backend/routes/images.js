const express = require('express')
const { updateImage, getAllImages, creataImage } = require('../controllers/images')
const router = express.Router()


router.get('/getImage',getAllImages)
router.put('/:id',updateImage)
router.post('/create',creataImage)


module.exports = router