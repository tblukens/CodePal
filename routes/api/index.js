const router = require('express').Router();
const userRoutes = require('./users');
const messageRoutes = require('./messages');
const threadRoutes = require('./threads');
const postRoutes = require('./posts');
const accountRoutes = require('./accounts');

router.use('/users', userRoutes);
router.use('/messages', messageRoutes);
router.use('/thread', threadRoutes);
router.use('/post', postRoutes);
router.use('/account', accountRoutes);
module.exports = router;
