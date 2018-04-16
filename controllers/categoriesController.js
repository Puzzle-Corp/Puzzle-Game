const db=require("../models");

module.exports={
    findRootAll:function(req,res){
        db.Category.find({parentCatName:"Root"}).then(dbModel => res.json(dbModel))
        .catch(err => res.json(err));
    },
    findByParentCatName:function(req,res){
        db.Category.find({parentCatName:req.params.parentCatName})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};