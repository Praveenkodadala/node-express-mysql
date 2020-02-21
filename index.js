let express = require('express');
let app = express();
const port = process.env.PORT || 3000;
let mysql = require('mysql');
let connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password'
    // database : 'onedb' 
});

connection.connect(function(err){
    if(err) throw err;
    console.log('connected');
    connection.query("CREATE DATABASE onedb", function(err, result){
        if(err) throw err;
        console.log('Database created');
    })

});




app.get('/', (req, res) => res.send('Hello World!'));


app.listen(port, ()=>{
    console.log(`server on ${port}`);
})