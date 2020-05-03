const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('.'));
app.use(bodyParser.json());

const books = [];

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./server.sqlite3')

db.each("SELECT * FROM server", function(err, row){
    if (!err){
        console.log(JSON.stringify(row));//ektipni
        books.push(row);//vali ta sto books
    }
});

app.get('/getUsers',function(req, res){
    res.send(users);
});

app.post('/addUser', function(req, res){
    console.log(JSON.stringify(req.body));
    users.push(req.body);
    res.send();
});

app.get('/getUser/:id', function(req,res){
    let result = {message:'not found'};
    for(let i=0;i<users.length;i++){
        if (users[i].id == req.params.id){
            result = users[i];
            break;
        }
    }
    res.send(result);
});

app.listen(3000);