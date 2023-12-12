//Express
const Express = require("express");
const app = Express();

//Body_parser
const BodyP = require("body-parser");

//Sequelize + Database
const Sequelize = require("sequelize");
const database = Sequelize('datalog', 'datalog_user', 'ceVUaEgdQPW7G2QLvGVpJRiLA2eITlsn', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
});

//Conexão com o banco de dados (Teste)
var test = database.authenticate()
    .then(function () {
        console.log("CONNECTED! ");
    })
    .catch(function (err) {
        console.log("SOMETHING DONE GOOFED");
    })
    .done();
console.log(test);
//============Finaização do teste==============

//Config
    //Body_parser
    app.use(BodyP.json());
    app.use(BodyP.urlencoded({extended:false}));

//Routes
app.get('', (req,res) => {

    app.use(Express.static('contracts'));
    res.sendFile('login.html', {
        root: (__dirname + "/Public/Login")
    });

});

app.post('login', (req,res) => {

    res.sendFile('Game.html', {
        root: (__dirname + "/Public/Game")
    })

});

app.listen(5000, () => {console.log("Server side: Online")})