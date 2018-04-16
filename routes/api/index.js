const router = require("express").Router();
const categoryRoutes=require("./categories");

router.use("/categories",categoryRoutes);
module.exports = router;
