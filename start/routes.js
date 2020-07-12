'use strict'

const GarageController = require('../app/Controllers/Http/GarageController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')
/*
obs1: Basicamente vou criar um grupo de rotas e nele vou usar um middleware de autentificação.
Isso quer dizer que todas essas rotas que a gente definir dentro desse midleware vão
precisar de autentificação
obs2: Quando usamos o adonisjs temos algumas rotas que é quando estamos usando o adonis em modo
não somente api. Essas rotas são para lidar com formulario. Para a gente remover essas rotas
passamos parametro apiOnly.
obs 3: Para excluir alguma rota basta usarmos except('nome da rota')
*/
Route.group(() => {
  /* Ao inves de criar uma rota criar, listar, deletar, atualizar... Vamos fazer isso
  Tudo de uma vez, usando Resource */
  Route.resource('garages', "GarageController").apiOnly()
  Route.resource('endereco', "EnderecoGaragemController").apiOnly()
  Route.resource('disponibilidade', "DisponibilidadeController").apiOnly()
}).middleware('auth')
