'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GarageSchema extends Schema {
  up () {
    this.create('garages', (table) => {
      table.increments()
      table.string('titulo', 80).notNullable()
      table.string('descricao', 300).notNullable()
      table.string('dimx', 80)
      table.string('dimy', 80)
      table.string('dimz', 80)
      table.string('tipo', 80)
      table.boolean('cameras')
      table.boolean('acesso_controlado')
      table.boolean('vaga_presa')
      table.boolean('coberto')
      table.boolean('objetos')
      table.timestamps()

      //chave estrangeira
      table.integer('user_id').unsigned().notNullable()
      table.foreign('user_id').references('id').inTable('users')

      table.integer('endereco_garagem_id').unsigned().notNullable()
      table.foreign('endereco_garagem_id').references('id').inTable('endereco_garagems')

    })
  }

  down () {
    this.drop('garages')
  }
}

module.exports = GarageSchema
