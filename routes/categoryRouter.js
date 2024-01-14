const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/categoryController')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router
  .route('/category')
  .get(categoryController.getCategories)
  .post(auth, authAdmin, categoryController.createCategory)

router
  .route('/category/:id')
  .patch(auth, authAdmin, categoryController.updateCategory)

router
  .route('/category/:name')
  .delete(auth, authAdmin, categoryController.deleteCategory)

module.exports = router
