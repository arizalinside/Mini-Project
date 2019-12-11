const router = require('express').Router();
const {
  register,
  login,
  search,
  findall
} = require('../controllers/usersController.js');
const authenticate = require('../middlewares/authenticate.js');

router.post('/register', register);
router.post('/login', login);
router.get('/search', authenticate, search);
router.get('/findall', findall);

module.exports = router;