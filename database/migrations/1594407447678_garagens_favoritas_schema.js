'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GaragensFavoritasSchema extends Schema {
  up () {
    this.create('garagens_favoritas', (table) => {
      table.increments()
      table.timestamps()

      table.integer('user_id').unsigned().notNullable()
      table.foreign('user_id').references('id').inTable('users')
      table.integer('garage_id').unsigned().notNullable()
      table.foreign('garage_id').references('id').inTable('garages')
    })
  }

  down () {
    this.drop('garagens_favoritas')
  }
}

module.exports = GaragensFavoritasSchema
