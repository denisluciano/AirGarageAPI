'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FotoGarageSchema extends Schema {
  up () {
    this.create('foto_garages', (table) => {
      table.increments()
      table.string('endereco_imagem', 255).notNullable()
      table.timestamps()

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
    this.drop('foto_garages')
  }
}

module.exports = FotoGarageSchema
