const passport = require('passport');
const jwt = require('jsonwebtoken');
const moment = require('moment');
require('dotenv').config();

const postModel  = require('../models/postModel')
const Utils =  require('../utils/utils')



exports.createPost = async (req, res) => {
    const content = req.body;

    const post = await postModel.create({ 
        created_at: moment().toDate(),

        title: content.title,
        description: content.description,
        body: content.body,
        tags: content.tags ,
        author: req.user._id,
        reading_time: Utils.readingTime(content.body)
    })
    try{
        const savedPost = await post.save()
        req.user.posts = req.user.posts.concat(savedPost._id)
        await req.user.save()
        res.status(201).json({
            message: "Post saved successfully",
            savedPost
        })
    }catch{
        res.status(400).json({
            "state": "false",
            "error": "Post Titles must be unique"
        })
    }
    
}


exports.getOnepost = async (req, res) => {
   
            const { Id } = req.params;
            const post = await postModel.findById(Id)
        
            if (!post) {
                return res.status(404).json({ status: false, post: null })
            }
        
            return res.json({ status: true, post })
       // }
        ////

}

exports.getPosts  = async (req, res) => {
    const { query } = req;
 
    const { 
         created_at, 
         state, 
         post = 'asc', 
         order_by = 'created_at', 
        // page = 1, 
        per_page = 10 ,

        limit = 20 || 100,
        //old lines above
        page = +req.query.page || 1,
        skip = limit * (page - 1),
    } = query;

    const findQuery = {};

    if (created_at) {
        findQuery.created_at = {
            $gt: moment(created_at).startOf('day').toDate(), 
            $lt: moment(created_at).endOf('day').toDate(),
        }
    } 

    // if (state) {
    //     findQuery.state = state;
    // }

    const sortQuery = {};

    const sortAttributes = order_by.split(',')

    for (const attribute of sortAttributes) {
        if (post === 'asc' && order_by) {
            sortQuery[attribute] = 1
        }
    
        if (post === 'desc' && order_by) {
            sortQuery[attribute] = -1
        }
    }
    const posts = await postModel.find({state: 'published'}).sort(sortQuery)
    .skip(page)
    .limit(per_page)

    return res.json({ status: true, posts })
}

