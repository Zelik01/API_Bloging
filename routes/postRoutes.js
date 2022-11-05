const express = require('express');
const postRouter = express.Router()

const auth =  require('../middlewares/authenticate')
const postController = require('../controller/postcontroller')

postRouter.post('/create', auth.protect,postController.createpost)
postRouter.get('/', postController.getposts)
postRouter.get('/:id', postController.getOnepost)
postRouter.delete('/:id',auth.protect, postController.deletepost)
postRouter.put('/:id', auth.protect, postController.updatepost)


module.exports = postRouter