const express = require('express');
const { getAllcategories, createCategory, deleteCategory } = require('../controllers/category');
const router  = express.Router();

router.get('/',getAllcategories);
router.post('/create',createCategory)
router.delete('/delete/:id',deleteCategory)



module.exports = router