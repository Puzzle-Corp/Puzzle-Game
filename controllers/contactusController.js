const db=require("../models");


module.exports={
    create:function(req,res){
       // console.log(req.body);
        db.ContactUs.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => console.log(err));
    }
};