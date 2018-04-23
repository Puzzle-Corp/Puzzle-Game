const db=require("../models");

module.exports={
    findRootAll:function(req,res){
        db.Category.find({parentCatId:null}).then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
    },
    findByParentCatId:function(req,res){
       // console.log("here");
        db.Category.find({parentCatId:req.params.parentCatId})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
       // console.log(req.params.parentCatId);
    }
};