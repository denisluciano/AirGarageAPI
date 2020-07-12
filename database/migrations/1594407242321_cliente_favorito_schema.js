'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClienteFavoritoSchema extends Schema {
  up () {
    this.create('cliente_favoritos', (table) => {
      table.increments()
      table.timestamps()

      table.integer('cliente_id').unsigned().notNullable()
      table.foreign('cliente_id').references('id').inTable('users')
      table.integer('proprietario_id').unsigned().notNullable()
      table.foreign('proprietario_id').references('id').inTable('users')
    })
  }

  down () {
    this.drop('cliente_favoritos')
  }
}

module.exports = ClienteFavoritoSchema
