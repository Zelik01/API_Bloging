const express = require('express');
const postRouter = express.Router()

const auth =  require('../middlewares/authenticate')
//const postController = require('../controller/testcontroller')
const postController = require('../controller/postcontroller')

 postRouter.post('/post/create',auth.protect, postController.createPost) //auth.protect,
 postRouter.get('/posts/', postController.getPosts)
 postRouter.get('/post/:id', postController.getOnepost)
// postRouter.delete('/post/:id',auth.protect, postController.deletepost)  
// postRouter.put('/post/:id', auth.protect, postController.updatepost)

// postRouter.post('/post/create', (req, res)=>{
//     console.log("Post route");
// })


module.exports = postRouter