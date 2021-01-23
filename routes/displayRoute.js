const express = require('express');
const displayController = require('../controllers/displayController');

const router = express.Router();


/**home page  */

router.get('/',displayController.show_home);
router.get('/list',displayController.show_list);
router.get('/details/:name',displayController.show_details);
router.all  ('/cutoff/:name',displayController.cutoff_show);
router.post('/cutoff2/:name',displayController.cutoff_show2);





/*****college details  */

module.exports = router;