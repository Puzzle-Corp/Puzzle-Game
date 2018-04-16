const router = require("express").Router();
const categoriesController = require("../../controllers/categoriesController");

// router "/api/categories
router.route("/").get(categoriesController.findRootAll);

// "/api/categories/:parentCatName
router.route("/:parentCatName")
    .get(categoriesController.findByParentCatName);

module.exports = router;