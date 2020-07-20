'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Locacao extends Model {
  garageLocacao(){
    return this.belongsTo('App/Models/Garage');
  }
  proprietarioLocacao(){
    return this.belongsTo('App/Models/User', 'proprietario_id');
  }
  clienteLocacao(){
    return this.belongsTo('App/Models/User', 'cliente_id');
  }
}

module.exports = Locacao
