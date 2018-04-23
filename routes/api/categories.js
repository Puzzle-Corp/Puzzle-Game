const router = require("express").Router();
const categoriesController = require("../../controllers/categoriesController.js");

// router "/api/categories
router.route("/").get(categoriesController.findRootAll);

// "/api/categories/:parentCatName
router.route("/:parentCatId")
    .get(categoriesController.findByParentCatId);

module.exports = router;