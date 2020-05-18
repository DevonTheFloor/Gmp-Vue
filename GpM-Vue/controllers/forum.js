const mysql = require('mysql');
const connectdb = require('../queries/connectdb');

exports.postOne = (req,res,next)=>{

    let titre = req.body.titre;
    let auteur= "lautre";
    let message = req.body.message;
    let urlimg = "/api/images/dl/"+req.file.filename;

    console.log("Connecté mySQL on Xampp !!");
    var sql = "INSERT INTO forum VALUES(NULL,?,?,?,?,NOW())";
    //var sql = "INSERT INTO forum (titre,auteur,message,urlimg) VALUES(?,?,?,?,NOW()))";
    var inserts = [titre,auteur,message,urlimg];
    sql = mysql.format(sql,inserts);
    connectdb.query(sql, function(err,result){
        if (err) throw err ;
        console.log("Message posté");
        res.redirect("/api/forum.html");
    });
}

exports.getAll = (req,res,next)=>{

    console.log("Connecté mySQL on Xampp !!");
    var qy1 = "SELECT * FROM forum";
    connectdb.query(qy1, function(err,result){
        if (err) throw err ;
        console.log(result);
        res.status(200).json(result);
        });
}

exports.getOne = (req,res,next)=>{

    let _id = req.params.id;
    console.log("id = ",_id);
 
    console.log("Connecté mySQL on Xampp !!");
    var sql = "SELECT * FROM forum WHERE _id=?";

    var inserts = [_id];
    sql = mysql.format(sql,inserts);
    connectdb.query(sql, function(err,result){
        if (err) throw err ;
        console.log("Connexion ok");
        res.status(200).json(result);
        console.log("result = ",result);
    });
}

