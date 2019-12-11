module.exports = {
 
    register: function(req, res) {
      // if (req.cookies.token) return res.redirect('/');
      res.render('pages/register'); 
    },
  
    login: function(req, res) {
      // if (req.cookies.token) return res.redirect('/');
      res.render('pages/login'); 
    }
  
  }