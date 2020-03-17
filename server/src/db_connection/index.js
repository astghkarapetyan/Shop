const mysql = require('mysql');
const connection  = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'shop'
});
connection.connect((err)=>{
    if(err) return console.log('errrr');
    console.log('connected')
});

module.exports = connection;