// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });


const express = require("express");
const mysql = require("mysql");
const app = express();
const db = require("./models");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// const apiRoutes = require("./routes/apiRoutes");
// app.use("/api", apiRoutes);

db.sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log("server started on port 3000.");
    })
})

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "Task",
//     multipleStatements:true
// });

// connection.connect((err) => {
// if(!err) {
//     console.log("connected");
// }
// else {
//     console.log("connection failed");
// }
// });


// app.listen(3000, () => {
//     console.log("server successfully running on port 3000");
// })