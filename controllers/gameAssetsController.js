

const db = require("../models");

module.exports = {
    // findAllGameAssets: function (req, res) {
    //     db.GameAssets.find({}).then(dbModel => res.json(dbModel))
    //         .catch(err => res.json(err));
    // },
    // findGameAssetsById: function (req, res) {
    //     db.GameAssets.findById(req.params.id)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },

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

    // findPiecesByGameName:function(req,res){
    //     console.log("I am here.... in controller");
    //     console.log(req.params.gameName);
    //     db.GameAsset.find({gameName :req.params.gameName})
    //     .then(dbModel => {console.log(req.params.gameName);
    //         console.log(dbModel);res.json(dbModel)})
    //     .catch(err => res.status(422).json(err));

    // }, 
    //   findPiecesByGameId:function(req,res){
    //         db.GameAssets.find({games: {_id:req.params.id}})
    //         .populate("games")
    //        .then(function(data){
    //            console.log("DATA DATA", data);
    //             console.log(req.params.id);
    //             res.json(data);
    //        })
    //         .catch(function(err){
    //            console.log(err);
    //             res.json(err);
    //         });
    //    //    console.log(result);
    //    },


};