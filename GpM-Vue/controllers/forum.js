const mysql = require('mysql');
const connectdb = require('../queries/connectdb');

exports.postOne = (req,res,next)=>{

    console.log("Connecté mySQL on Xampp !!");
    if(req.file){
        let titre = req.body.titre;
        let auteur= "lautre";
        let message = req.body.message;
        let urlimg = "/api/images/dl/"+req.file.filename;

        var sql = "INSERT INTO forum (titre,auteur,message,urlimg,quand) VALUES(?,?,?,?,NOW())";
        var inserts = [titre,auteur,message,urlimg];
        sql = mysql.format(sql,inserts);
        connectdb.query(sql, function(err,result){
            if (err) throw err ;
            console.log("Message posté");
            res.redirect("/api/forumVue.html");
        });
    } else {
        let titre = req.body.titre;
        let auteur= "lautre";
        let message = req.body.message;

        var sql = "INSERT INTO forum (titre,auteur,message,quand) VALUES(?,?,?,NOW())";
        var inserts = [titre,auteur,message];
        sql = mysql.format(sql,inserts);
        connectdb.query(sql, function(err,result){
            if (err) throw err ;
            console.log("Message posté");
            res.redirect("/api/forumVue.html");
        });
    }
  
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

exports.resForum = (req,res,next)=>{

    console.log("Connecté mySQL on Xampp !!");
    if(req.file){
        let salon = req.body.salon;
        let auteur= "lautre";
        let message = req.body.message;
        let urlimg = "/api/images/dl/"+req.file.filename;
        let idquestion = req.body.idquestion;
    
        var sql = "INSERT INTO reponse VALUES(NULL,?,?,?,?,?,NOW())";
        //var sql = "INSERT INTO forum (auteur,message,urlimgkidquestion,salon,quand) VALUES(?,?,?,?,NOW()))";
        var inserts = [auteur,message,urlimg,idquestion,salon];
        sql = mysql.format(sql,inserts);
        connectdb.query(sql, function(err,result){
            if (err) throw err ;
            console.log("Reponse posté");
        });
    }else{
        let salon = req.body.salon;
        let auteur= "lautre";
        let message = req.body.message;
        let idquestion = req.body.idquestion;
    
        var sql = "INSERT INTO reponse VALUES(NULL,?,?,?,?,NOW())";
        //var sql = "INSERT INTO forum (auteur,message,urlimgkidquestion,salon,quand) VALUES(?,?,?,?,NOW()))";
        var inserts = [auteur,message,idquestion,salon];
        sql = mysql.format(sql,inserts);
        connectdb.query(sql, function(err,result){
            if (err) throw err ;
            console.log("Reponse posté");
        });
    }



}
