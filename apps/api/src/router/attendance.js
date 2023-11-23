const { attendancesController } = require('../controller')
const router = require('express').Router();

router.get('/', attendancesController.getAttendance);
router.post('/clockin', attendancesController.clockIn);
router.post('/clockout', attendancesController.clockOut);
router.post('/add', attendancesController.create);

module.exports = router;