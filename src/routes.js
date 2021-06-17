const express = require('express');
// Router(): Fubção do express que vai criar as rotas
const routes = express.Router()
//Importando ariquivos controller
const ProfileController = require('./controllers/ProfileController')
const JobController = require('./controllers/JobController');
const DashboardController = require('./controllers/DashboardController');


// Function get(): Quando o método get for no "/", execute uma função
// * A função só será rodada quando entrar nessa rota. 
routes.get("/", DashboardController.index)
routes.get("/job", JobController.create)
routes.post("/job", JobController.save)
routes.get("/job/:id", JobController.show)
routes.post("/job/:id", JobController.update)
routes.post("/job/delete/:id", JobController.delete)
routes.get("/profile", ProfileController.index)
routes.post("/profile", ProfileController.update)


// Pegando o objeto routes e jogando para fora
module.exports = routes;