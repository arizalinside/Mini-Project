const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken')

module.exports = {
register: function(req, res) {
    let password = bcrypt.hashSync(req.body.password, salt)

    User.create({
        email: req.body.email,
        encryptedPassword: password
    })
    .then(data => {
        res.status(201).json({
            success: true,
            data: data
        })
    })
    .catch(err => {
        res.status(422).json({
            success: false,
            errors: err
        })
    })
},
login: function(req, res) {
    User.findOne({
        email: req.body.email
    })
            .then(user => {
                if(!user) return res.status(404).json({
                success: true,
                errors: "Oops, email isn't registered"
            })

            let isPasswordCorrect = bcrypt.compareSync(req.body.password, user.encryptedPassword);
            if (!isPasswordCorrect) return res.status(401).json({
                success: false,
                errors: "Wrong password!"
            })

            let token = jwt.sign({
                _id: user._id}, 'RAHASIA NEGARA')

            res.status(200).json({
                success: true,
                data: token
            })
        })
        .catch(err => {
            res.status(400).json ({
                success: false,
                errors: err
            })
        })
},

search: function(req, res) {
    User.findById(req.user._id)
        .then(data => {
            res.status(200).json ({
                success: true,
                data: data
            })
        })
}

}