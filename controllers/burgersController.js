var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req,res){
    burger.all(function(burger_data){
        console.log(burger_data);
        res.render("index", {burger_data});
    })
})
//CREATE BURGER
router.post("/burgers/create", function(req,res){
    burger.create(req.body.burger_name, function(result){
        res.redirect("/");
    })
    
})

// DEVOUR BURGER 
router.post("/burgers/update/:id", function(req, res) {
    burger.update(req.body.burger_id, function(result){
            console.log(result);
            console.log(burger_data);
            res.redirect("/");
    })
    res.redirect("/");
})

module.exports = router;