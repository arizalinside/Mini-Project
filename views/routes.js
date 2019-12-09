const express = require ('express');
const router = express.Router();
const axios = require('axios')
const postController = require('./controllers/postController')

function checkToken(req, res, next) {
    let token = req.cookies.token;
    if (!token) return res.redirect('/login')

    axios(`${process.env.BASE_URL}/api/v1/user/search`, {
        method: 'GET',
        headers: {
            'Authorization' : req.cookies.token,
            'Accept' : 'application/json'
        }    
    })
        .then(response => {
            let body = response.data;
            req.user = body.data;
            next()
        })
        .catch(err => {
            res.redirect('/login')
        })
}

router.get('/', postController.index)
router.get('/post/:_id', postController.show)   



// router.get('/', checkToken, function(req, res) {
//     res.render('pages/index')
//     console.log(req.cookies)
// })
router.get('/login', function(req,res) {
    res.render('pages/login')
})
router.get('/register', function(req,res) {
    res.render('pages/register')
})

module.exports = router;