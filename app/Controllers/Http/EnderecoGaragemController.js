'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const EnderecoGaragem = use('App/Models/EnderecoGaragem')

/**
 * Resourceful controller for interacting with enderecogaragems
 */
class EnderecoGaragemController {
  /**
   * Show a list of all enderecogaragems.
   * GET enderecogaragems
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response }) {
    const enderecoGaragems = EnderecoGaragem.all()

    return enderecoGaragems;
  }


  /**
   * Create/save a new enderecogaragem.
   * POST enderecogaragems
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request, response }) {
    const data = request.all();

    const enderecoGaragem = await  EnderecoGaragem.create({ user_id: auth.user.id, ...data })

    return enderecoGaragem;
  }

  /**
   * Display a single enderecogaragem.
   * GET enderecogaragems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response }) {
    const enderecoGaragem = await EnderecoGaragem.findOrFail(params.id)

    return enderecoGaragem;
  }


  /**
   * Update enderecogaragem details.
   * PUT or PATCH enderecogaragems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a enderecogaragem with id.
   * DELETE enderecogaragems/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ auth, params, request, response }) {
    const enderecoGaragem = await EnderecoGaragem.findOrFail(params.id);

    if(auth.user.id != enderecoGaragem.user_id){
      return response.status(401);
    }

    enderecoGaragem.delete()
  }
}

module.exports = EnderecoGaragemController
