const router = require('express').Router();
const threadController = require('../../controllers/threadController');

router.route('/get/all').get(threadController.showAllThreads);
router.route('/create').post(threadController.createThread);
router.route('/delete/:id').delete(threadController.deleteThread);
router.route('/edit/:id').put(threadController.editThread);
router.route('/get/:id').get(threadController.getThreadWithPosts);

module.exports = router;
