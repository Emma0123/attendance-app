const { shiftController } = require('../controller')
const router = require('express').Router();

router.get('/', shiftController.getShifts);

module.exports = router;