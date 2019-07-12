// hackathonController.js

const mysql = require('mysql');
const path = require('path');

exports.hello = (req, res) =>{
    console.log("hello world");
} ;

exports.add_in_bdd = (req, res) => {
    let con = mysql.createConnection({ //creation of variables host, user, password and database for the future connection
    host: "localhost",
    user: "root",
    password: "",
    database: "hackathon"
    });

    con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    console.log(req.body);
    // let sql_user = "INSERT INTO users (ID, nom, prenom, mail, admin) VALUES (null, 'test', 'test', 'test', '0')";
    // con.query(sql_user, function (err, result) {
    //     if (err) throw err;
    //     console.log("1 record inserted");
    // });
    });
} ;

exports.admin = (req, res) => {
  res.sendFile("admin.html", {
    root: path.join(__dirname, "../views")
  });
}
