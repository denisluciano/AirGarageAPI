'use strict'

// const EnderecoGaragem = use('App/Models/EnderecoGaragem');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Garage extends Model {

  enderecoGaragem(){
    return this.belongsTo('App/Models/EnderecoGaragem');
  }
}

module.exports = Garage
