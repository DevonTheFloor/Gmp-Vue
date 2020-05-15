const mysql = require('mysql');
const connectdb = require('../queries/connectdb');
const multer = require('multer');
const fs = require('fs');
const path = require('path');


exports.getAll = (req,res,next)=>{
    console.log("Connecté mySQL on Xampp !!");
      var qy1 = "SELECT * FROM market";
      connectdb.query(qy1, function(err,result){
          if (err) throw err ;
          console.log(result);
          res.status(200).json(result);
          });
  }

exports.postOne = (req,res,next)=>{
  
    let urlimg = "/api/images/dl/"+req.file.filename;
    let categorie = req.body.categorie;
    let annonce = req.body.annonce;
    let titre = req.body.titre;
    console.log("req.body = ",req.body);
    console.log("Connecté mySQL on Xampp !!");
    var inserts = [titre,categorie,annonce,urlimg];
      var sql = "INSERT INTO market (titre,categorie,annonce,urlimg,quand) VALUES(?,?,?,?,NOW())";
     
      sql = mysql.format(sql,inserts);
      connectdb.query(sql, function(err,result){
          if (err) throw err ;
          console.log("Article mit en vente");
          res.redirect("/api/market.html");
      });
  }