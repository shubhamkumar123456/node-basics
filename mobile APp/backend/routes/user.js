const express = require('express')
const { createMessage, getAllUserMeggages, getSingleUserMessgae, deleteMessage } = require('../controllers/user')
const router = express.Router()


router.post('/create',createMessage);
router.get('/',getAllUserMeggages)
router.post('/singleUserMessage',getSingleUserMessgae)
router.delete('/delete',deleteMessage)


module.exports = router