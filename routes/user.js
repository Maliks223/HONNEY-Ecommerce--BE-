const express = require( 'express');
const router = express.Router();
const {registerUser, loginUser, getMe } = require("../controllers/userController.js");
const {protect} = require("../middlewares/authMiddleware.js")

router.post("/", registerUser);
router.post("/login", loginUser);
router.route("/me").get(protect,getMe);

module.exports = router;