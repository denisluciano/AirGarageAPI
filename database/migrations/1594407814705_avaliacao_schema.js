'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AvaliacaoSchema extends Schema {
  up () {
    this.create('avaliacaos', (table) => {
      table.increments()
      table.timestamps()
      table.float('nota')
      table.string('comentario', 255)

      table.integer('cliente_id').unsigned().notNullable()
      table.foreign('cliente_id').references('id').inTable('users')

      table.integer('proprietario_id').unsigned().notNullable()
      table.foreign('proprietario_id').references('id').inTable('users')

      table.integer('locacao_id').unsigned().notNullable()
      table.foreign('locacao_id').references('id').inTable('locacaos')
    })
  }

  down () {
    this.drop('avaliacaos')
  }
}

module.exports = AvaliacaoSchema
