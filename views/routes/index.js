const router = require('express').Router();
const authRouter = require('./authRouter.js');
const postRouter = require('./postRouter.js');

router.use('/', authRouter);
router.use('/', postRouter);

module.exports = router;