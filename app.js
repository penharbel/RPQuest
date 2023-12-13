//Express
const Express = require("express");
const app = Express();

//Body_parser
const BodyP = require("body-parser");

//uuid
const uuid = require("uuid")

//Sequelize + Database
const Sequelize = require("sequelize");
const database = new Sequelize('datalog', 'datalog_user', 'ceVUaEgdQPW7G2QLvGVpJRiLA2eITlsn', {
    host: 'dpg-clq7dhqe9h4c73aj95hg-a',
    dialect: 'postgres',
    port: 5432
});

    //Conexão com o banco de dados (Teste)
        database.authenticate()
        .then(function () {
            console.log("CONNECTED!");
        })
        .catch(function (err) {
            console.log("SOMETHING DONE GOOFED");
            console.log(err);
        })
    //============Finaização do teste==============

    //criando tabelas
    const Login = database.define('logins', {
        login: {
            type: Sequelize.STRING,
            allowNull: false
        },
        senha: {
            type: Sequelize.STRING,
            allowNull: false
        },
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        }
    })

//Config
    //Body_parser
    app.use(BodyP.json());
    app.use(BodyP.urlencoded({extended:false}));

//Routes
app.get('', (req,res) => {

    app.use(Express.static(__dirname + '/Public/Login'));
    res.sendFile('login.html', {
        root: (__dirname + "/Public/Login")
    });

});

app.post('/login', (req,res) => {

    let Ids = uuid.v4()
    (async () =>{
        await database.sync();

        Login.create({
            login: req.body.login,
            senha: req.body.senha,
            id: Ids
        })
    });
    

    app.use(Express.static(__dirname + '/Public/Game'));
    res.sendFile('Game.html', {
        root: (__dirname + "/Public/Game")
    });

});

app.listen(5000, () => {console.log("Server side: Online")})