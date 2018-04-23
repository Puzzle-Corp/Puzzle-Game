const router = require("express").Router();
const categoryRoutes=require("./categories");
const gameAssetRoutes=require("./gameAssets");
const gameRoutes=require("./games");

router.use("/categories",categoryRoutes);
router.use("/gameAssets",gameAssetRoutes);
router.use("/games",gameRoutes);
module.exports = router;
