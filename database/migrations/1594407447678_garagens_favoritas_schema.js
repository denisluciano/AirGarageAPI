'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GaragensFavoritasSchema extends Schema {
  up () {
    this.create('garagens_favoritas', (table) => {
      table.increments()
      table.timestamps()

      table
      integer('user_id')
      unsigned()
      notNullable()
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
    this.drop('garagens_favoritas')
  }
}

module.exports = GaragensFavoritasSchema
