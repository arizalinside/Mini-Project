const axios = require('axios')

module.exports = function (req, res, next) {
    let token = req.cookies.token ? req.cookies.token : null;
    if (!token) return res.redirect('/login')

    axios(`${process.env.BASE_URL}/api/v1/auth/search`, {
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
            console.log(err)
            res.redirect('/login')
        })
}