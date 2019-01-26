const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/create').post(userController.createUser)
router.route('/usermeta/:user_id').get(userController.getMetaData)
router.route('/update').post(userController.updateMetaData)

router.route('/allusers').get(userController.getUsers)
router.route('/add').post(userController.postUser)


module.exports = router;
