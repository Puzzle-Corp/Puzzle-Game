const db = require("../models");

module.exports = {
    // first find games id from category model then search for list of games in that category
    findGamesByCatId: function (req, res) {
        db.Category.find({ _id: req.params.categoryId })
            .then(dbModel => {//console.log(dbModel[0].games);
                db.Game.find({ "_id": dbModel[0].games })
                    .then(gameModel => { res.json(gameModel); console.log(gameModel); })
                    .catch(err => res.status(422).json(err));
            })
            .catch(err => console.log(err));
    }
};