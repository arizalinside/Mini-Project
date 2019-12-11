const router = require('express').Router();
const {
  create,
  index,
  show,
  update,
  destroy
} = require('../controllers/postController.js');
const authenticate = require('../middlewares/authenticate.js');

router.post('/', authenticate, create);
router.get('/', index);
router.get('/:_id', show);
router.put('/', authenticate, update);
router.delete('/:_id', authenticate, destroy);

module.exports = router;