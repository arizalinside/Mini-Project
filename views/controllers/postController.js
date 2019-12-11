const fetch = require('axios');
process.env.BASE_URL = process.env.BASE_URL || '127.0.0.1:3000'
// const baseUrl = process.env.BASE_URL;

module.exports = {
    index: function(req,res) {
        fetch (`${process.env.BASE_URL}/api/v1/post`, {
            method: 'GET',
            headers: {
                'Accept' : 'application/json'
            }
        })
            .then(response => {
                res.render('pages/index', {
                    user: req.user,
                    showButton: false,
                    post: response.data.data
                })
            })
    },

    show: function(req,res) {
        fetch (`${process.env.BASE_URL}/api/v1/posts/${req.params._id}`, {
            method: 'GET',
            headers: {
                'Accept' : 'application/json'
            }
        })
            .then(response => {
                res.render('pages/index', {
                    user: req.user,
                    showButton: true,
                    post: [response.data.data]
                })
            })
    },
    destroy: function(req, res) {
        fetch(`${process.env.BASE_URL}/api/v1/posts/${req.params._id}`, {
          method: 'DELETE',
          headers: {
            'Accept':'application/json',
            'Authorization': req.cookies.token
          }
        })
          .then(response => {
            res.redirect('/')
          })  
      },
    
      create: function(req, res) {
        res.render('pages/create', {
          user: req.user
        })
      }
}