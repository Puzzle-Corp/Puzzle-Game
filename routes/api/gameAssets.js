const router = require("express").Router();
const gameAssetsController = require("../../controllers/gameAssetsController");


//router.route("/").get(gameAssetsController.findAllGameAssets);
// "/api/gamePieces/:id
router.route("/:gameId")
    .get(gameAssetsController.findPiecesByGameId);

module.exports = router;