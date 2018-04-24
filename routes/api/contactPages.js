const router=require("express").Router();
const contactController=require("../../controllers/contactusController.js");

// /api/contactus client api
router.route("/")
.post(contactController.create);

module.exports = router;