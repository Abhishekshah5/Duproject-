const express = require('express');
const collegeController = require('../controllers/collegedataContoller');

const router = express.Router();

/**home page  */







/*****college details  */

router.get('/college/form', collegeController.baisc_get);

router.get('/cut-off/:name',collegeController.cut_off_create);
router.get('/fees/:name',collegeController.fees_create);

/****show */
router.get('/list', collegeController.show_list);

/****post request */
router.post('/college/create', collegeController.basic_post);
router.post('/cut-off/create', collegeController.cut_off_form);
router.post('/fees/create', collegeController.fees_form);

module.exports = router;