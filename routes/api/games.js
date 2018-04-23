const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");



router.route("/:categoryId")
    .get(gamesController.findGamesByCatId);

module.exports = router;