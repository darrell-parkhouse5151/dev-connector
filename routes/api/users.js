const express = require('express');
const router = express.Router();

//-----------------------------------------------
// @route   GET api/users/test
// @desc    Test users route
// @access  Public
//-----------------------------------------------
router.get('/test', (req, res) =>
	res.json({
		msg: 'Users works'
	})
);

//-----------------------------------------------
// @route   GET api/users/all
// @desc    Get all the users route
// @access  Public
//-----------------------------------------------
router.get('/all', (req, res) => {});
module.exports = router;
