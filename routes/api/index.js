const router = require("express").Router();
const categoryRoutes=require("./categories.js");
const gameAssetRoutes=require("./gameAssets.js");
const gameRoutes=require("./games.js");
const contactPageRoutes=require("./contactPages.js");

router.use("/categories",categoryRoutes);
router.use("/gameAssets",gameAssetRoutes);
router.use("/games",gameRoutes);
router.use("/contactus",contactPageRoutes);
module.exports = router;
