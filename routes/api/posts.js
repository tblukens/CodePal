const router = require('express').Router();
const postController = require('../../controllers/postController');

router.route('/create/:id').post(postController.createPost);
router.route('/delete/:id').delete(postController.deletePost);
router.route('/edit/:id').put(postController.editPost);
router.route('/get/:id').get(postController.getOnePost);
module.exports = router;
