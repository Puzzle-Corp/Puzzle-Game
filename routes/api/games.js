const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");



router.route("/:id")
    .get(gamesController.findGamesByCatName);

module.exports = router;