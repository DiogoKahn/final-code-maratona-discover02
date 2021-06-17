// Pegando a função express (biblioteca para criar o servidor) e colocando em uma variável
const express = require("express")
// criando server
const server = express()
const routes = require("./routes")
const path = require("path")

// Utilizando template engine
server.set('view engine', 'ejs')

// MUdar a localização da pasta views
server.set('views', path.join(__dirname, 'views'))

// Habilitar arquivos statics
//* .use(): usado para settar, iniciar, chaviar configurações no servidor
server.use(express.static("public"))

//Usar o req.body
// liberando o corpo da requisição
server.use(express.urlencoded({ extended: true }))

//routes
server.use(routes)

// a function listen() inicializa o servidor, tomado como args a porta(que a função ouvirá) e caso a porta esteja aberta, rode a função x (segundo arg)
server.listen(3000, () => console.log("rodando"))