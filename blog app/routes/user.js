const express = require('express');
const { createUser, updateUser, deleteUser, loginUser } = require('../controllers/user');
const router = express.Router();

router.post('/',createUser);
router.put('/update/:_id',updateUser)
router.delete('/delete/:id',deleteUser)
router.post('/login',loginUser)


module.exports = router