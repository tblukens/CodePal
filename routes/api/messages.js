const router = require('express').Router();
const messageController = require('../../controllers/messageController');

router.route('/get/:user1/:user2').get(messageController.getMessage);
router.route('/post').post(messageController.postMessage);
router.route('/delete/:id').delete(messageController.deleteMessage);
router.route('/edit/:id').put(messageController.editMessage);
module.exports = router;
