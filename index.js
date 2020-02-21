let express = require('express');
let app = express();
const port = process.env.PORT || 3000;
let mysql = require('mysql');
let connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
     database : 'onedb' 
});



//creating a database;
connection.connect(function(err){
    if(err) {
        console.error('error connecting: '+ err.stack )
        return;
    }

    console.log('connected as id : '+ connection. threadId);
    /*
    connection.query("CREATE DATABASE onedb", function(err, result){
        if(err) throw err;
        console.log('Database created');
    })

    */
});



//creating a tables;     The simplest form of .query() is .query(sqlString, callback), where a SQL string is the first argument and the second is a callback:

/*
app.get('/createtable', (req, res)=>{

    let sqlTable="create table table1 (id INT, first_name VARCHAR(50), last_name VARCHAR(50), email VARCHAR(50), gender VARCHAR(50), ip_address VARCHAR(20))" 
connection.query( sqlTable, function(err){
    if(err) throw err;
    console.log('table created')
    res.send('table created');
    
});
}); 
*/



/*
//inserting values into table;
//The second form .query(sqlString, values, callback) comes when using placeholder values (see escaping query values):
app.get('/insert', (req, res)=>{
    let sqlinsert = "insert into table1 (id, first_name, last_name, email, gender, ip_address) values (1, 'Vaclav', 'Heberden', 'vheberden0@bloglines.com', 'Male', '237.245.58.18'), (2, 'Grace', 'Wisam', 'gwisam1@github.com', 'Female', '77.174.253.220')";

connection.query(sqlinsert, function(err){
if(err) throw err;
console.log('values are inserted');
res.send('values are inserted');
})
})

*/


/*
//get table data
app.get('/getposts', (req, res) => {
    let sqlResults = 'SELECT * FROM table1';
    let query = connection.query(sqlResults, (err, results) => {
        if(err)throw err;
  
        // console.log(results);
         res.json(results);
    });
  });
*/


/*
//Update posts
app.get('/updatepost/:id', (req, res) => {
    let newName = 'praveen';
    let sqlupdate = `UPDATE table1 SET first_name = '${newName}' WHERE id = ${2}`;
     connection.query(sqlupdate, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post updated...');
    });
});
*/


//Delete post
app.get('/deletepost/:id', (req, res) => {
    
    let sqldelete = `DELETE FROM table1 WHERE id = ${1}`;
     connection.query(sqldelete, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post deleted...');
    });
});





app.get('/', (req, res) => res.send('Hello World!'));


app.listen(port, ()=>{
    console.log(`server on ${port}`);
});