const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/create').post(userController.createUser)
router.route('/usermeta').get(userController.getMetaData)
router.route('/update').post(userController.updateMetaData)
module.exports = router;
