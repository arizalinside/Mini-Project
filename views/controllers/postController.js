const fetch = require('axios');

module.exports = {
    index: function(req,res) {
        fetch ('http://127.0.0.1:3000/api/v1/post/', {
            method: 'GET',
            headers: {
                'Accept' : 'application/json'
            }
        })
            .then(response => {
                res.render('pages/index', {
                    post: response.data.data
                })
            })
    },

    show: function(req,res) {
        fetch (`http://127.0.0.1:3000/api/v1/post/${req.params._id}`, {
            method: 'GET',
            headers: {
                'Accept' : 'application/json'
            }
        })
            .then(response => {
                res.render('pages/index', {
                    post: [response.data.data]
                })
            })
    }
}