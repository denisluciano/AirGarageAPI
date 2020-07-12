'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClienteFavoritoSchema extends Schema {
  up () {
    this.create('cliente_favoritos', (table) => {
      table.increments()
      table.timestamps()

      table
      .integer('cliente_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      table.integer('proprietario_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('cliente_favoritos')
  }
}

module.exports = ClienteFavoritoSchema
