let mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hackathon"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  let sql_user = "INSERT INTO users (ID, nom, prenom, mail, admin) VALUES (null, 'test', 'test', 'test', '0')";
  con.query(sql_user, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});