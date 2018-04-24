const db = require("../models");

module.exports = {

    findPiecesByGameId: function (req, res) {
        db.Game.find({ _id: req.params.gameId })
            .populate("assets")
            .then(function (dbGame) {
                res.json(dbGame);
            })
            .catch(function (err) {
                res.json(err);
            });
    }
};