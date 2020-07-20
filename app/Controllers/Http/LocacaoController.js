'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Locacao = use('App/Models/Locacao');

/**
 * Resourceful controller for interacting with locacaos
 */
class LocacaoController {
  /**
   * Show a list of all locacaos.
   * GET locacaos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response }) {
    const locacaos = await Locacao.query().with('garageLocacao').with('proprietarioLocacao').with('clienteLocacao').fetch();
    // const garagew = garages.enderecoGaragem().fetch()


    return locacaos;
  }

  async locacaoByProprietario ({ auth, request, response}) {
    const locacaos = await Locacao.query().where('proprietario_id', auth.user.id).with('garageLocacao').with('proprietarioLocacao').with('clienteLocacao').fetch();
    // const garagew = garages.enderecoGaragem().fetch()

    return locacaos;
  }
  async locacaoByCliente ({ auth, request, response }) {
    const locacaos = await Locacao.query().where('cliente_id', auth.user.id).with('garageLocacao').with('proprietarioLocacao').with('clienteLocacao').fetch();
    // const garagew = garages.enderecoGaragem().fetch()


    return locacaos;
  }



  /**
   * Create/save a new locacao.
   * POST locacaos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request, response }) {
    console.log("dwedfw")
    const data = request.all();


    console.log(data);

    const locacao = await Locacao.create({cliente_id: auth.user.id ,...data})

    return locacao;
  }

  /**
   * Display a single locacao.
   * GET locacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }



  /**
   * Update locacao details.
   * PUT or PATCH locacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a locacao with id.
   * DELETE locacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = LocacaoController
