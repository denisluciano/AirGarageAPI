'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LocacaoSchema extends Schema {
  up () {
    this.create('locacaos', (table) => {
      table.increments()
      table.timestamps()
      table.boolean('aprovado_proprietario')
      table.float('valor_total')
      table.date('data_inicial')
      table.date('data_final')

      table
      .integer('cliente_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

      table
      .integer('proprietario_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

      table
      .integer('garage_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('garages')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('locacaos')
  }
}

module.exports = LocacaoSchema
