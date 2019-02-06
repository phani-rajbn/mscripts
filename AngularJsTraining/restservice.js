//npm init
//npm install express
//npm install body-parser
//npm install mysql

var app = require('express')();
var parser = require('body-parser');

app.use(parser.urlencoded({extended:true}));
app.use(parser.json());

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT, POST, DELETE');
    next();
})
function getConnection() {
    var sql = require('mysql');
    var config={
        server : 'localhost',
        database:'mscriptsDB',
        user:'root',
        password:''
    }
    var con = sql.createConnection(config);
    return con;
}

app.get('/', (req, res)=>{
    var con = getConnection();
    var query ="select * from emptable";
    con.query(query,(err, results, fields)=>{
        res.send(JSON.stringify(results));
    })
})

app.get('/:id', (req, res)=>{
    var empid = req.params.id;
    var con = getConnection();
    var query = "select * from emptable where empid= " + empid;
    con.query(query, (err, results, fields)=>{
        if(err) res.send("OOPs, something happened");
        else 
            res.send(JSON.stringify(results));
    })
})

app.post('/', (req, res)=>{
    var emp = req.body;//this is got only if u have body parser...
    var con = getConnection();
    var query = "insert into emptable(empname, empcity) values('" + emp.EmpName + "','" + emp.EmpCity + "')";
    con.query(query, (e, r, f)=>{
        if(e) res.send("insertion failed");
        else
        res.send("Inserted successfully");
    })
})

app.listen(1234, function(){
    console.log("server is available at 1234");
})