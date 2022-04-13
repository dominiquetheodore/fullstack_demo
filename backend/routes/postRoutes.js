var express = require('express')
var postController = require('../controllers/postController')
var router = express.Router()

// retrieve all posts
router.get('/', postController.list_posts)

// create a post
router.post('/', postController.create_post)

module.exports = router