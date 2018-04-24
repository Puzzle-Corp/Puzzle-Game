const router = require("express").Router();
const gameAssetsController = require("../../controllers/gameAssetsController.js");


router.route("/:gameId")
    .get(gameAssetsController.findPiecesByGameId);

module.exports = router;