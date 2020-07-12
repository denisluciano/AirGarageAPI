'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

// tipo: 1 cliente, 2 proprietario e 3 os dois

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('nome', 80).notNullable()
      table.string('fotoPerfil', 80)
      table.string('fotoDocumento', 80)
      table.string('cpf', 80)
      table.string('rg', 80)
      table.string('telefone', 80)
      table.boolean('aprovado')
      table.integer('tipo')
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
