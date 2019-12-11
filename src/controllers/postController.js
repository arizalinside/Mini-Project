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
            response(res, [true, data], 201)
        })
        .catch(err => {
            response(res, [false, err], 422)
        })
},
    index: function(req, res) {
        Post.find({}).populate({
            path:'user',
            select: ["_id","email"]
        })
        .then(data => {
            response(res, [true, data], 201)
        })
        .catch(err => {
            response(res, [false, err], 422)
        })
},
    show: function(req, res) {
        Post.findById(req.params._id)
        .then(data => {
            response(res, [true, data], 201)
        })
        .catch(err => {
            response(res, [false, err], 422)
        })
    },
    update: function(req, res) {
        Post.findOneAndUpdate(req.params._id, req.body)
        .then(data => {
            response(res, [true, data], 201)
        })
        .catch(err => {
            response(res, [false, err], 422)
        })

},
    destroy: function(req, res){
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