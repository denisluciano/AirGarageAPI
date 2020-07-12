'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnderecoGaragemSchema extends Schema {
  up () {
    this.create('endereco_garagems', (table) => {
      table.increments()
      table.string('rua', 80)
      table.string('numero', 80)
      table.string('bairro', 80)
      table.string('cidade', 80)
      table.string('estado', 80)
      table.string('complemento', 80)
      table.string('pais', 80)
      table.string('cep', 80)
      table.timestamps()

      table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('endereco_garagems')
  }
}

module.exports = EnderecoGaragemSchema
