const { resetPasswordController } = require('../controller')
const router = require('express').Router();

router.post('/email', resetPasswordController.checkEmail);
router.post('/', resetPasswordController.reset);

module.exports = router;