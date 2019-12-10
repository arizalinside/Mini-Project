const Post = require('../models/post.js');

module.exports = {

    create: function(req, res) {
        req.body.user = req.user._id
        Post.create({
            title: req.body.title,
            body: req.body.body,
            user: req.body.user
        })
        .then(data => {
            res.status(200).json({
                success: true,
                message: "Post successfully created!",
                data: data
            })
        })
        .catch(err => {
            res.status(400).json({
                success: false,
                message: "Failed to create post.",
                errors: err
            })
        })
},
    index: function(req, res) {
        Post.find({}).populate({
            path:'user',
            select: ["_id","email"]
        })
        .then(data => {
            res.status(201).json({
                success: true,
                message: "I found it!",
                data: data
            })
        })
        .catch(err => {
            res.status(422).json({
                success: false,
                message: "I can't found the post.",
                errors: err
            })
        })
},
    show: function(req, res) {
        Post.findById(req.params._id)
        .then(data => {
            res.status(201).json({
                success: true,
                message: "I found it!",
                data: data
            })
        })
        .catch(err => {
            res.status(422).json({
                success: false,
                message: "I can't found the post.",
                errors: err
            })
        })
    },
    update: function(req, res) {
        Post.findOneAndUpdate(req.params._id, req.body)
        .then(data => {
            res.status(200).json({
                success: true,
                message: "Post updated!",
                data: data
            })
        })
        .catch(err => {
            res.status(400).json({
                success: false,
                message: "Cannot update post.",
                errors: err
            })
        })

},
    delete: function(req, res){
        Post.findByIdAndDelete(req.params._id)
        .then(data => {
            res.status(200).json({
                success: true,
                message: "Post has been deleted.",
                data: data
            })
        })
        .catch(err => {
            res.status(422).json({
                success: false,
                message: "Cannot delete this post.",
                errors: err
            })
        })
    }
}