const express = require('express');
const router = express.Router();
const postController = require('./controllers/postController.js');
const usersController = require ('./controllers/usersController.js');
const authenticate = require('./middlewares/authenticate.js');

router.post('/post/',authenticate, postController.create);
router.get('/post/',postController.index);
router.get('/post/:_id', postController.show);
router.put('/post/:_id',postController.update);
router.delete('/post/:_id',postController.delete);

router.post('/user/register',usersController.register);
router.post('/user/login',usersController.login);
router.get('/user/search',authenticate, usersController.search);

module.exports = router;