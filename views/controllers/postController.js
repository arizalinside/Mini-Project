const fetch = require('axios');

module.exports = {
    index: function(req,res) {
        fetch (`${process.env.BASE_URL}/api/v1/post/`, {
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
        fetch (`${process.env.BASE_URL}/api/v1/post/${req.params._id}`, {
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