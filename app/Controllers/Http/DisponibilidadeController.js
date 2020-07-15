'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Disponibilidade = use('App/Models/Disponibilidade');

/**
 * Resourceful controller for interacting with disponibilidades
 */
class DisponibilidadeController {
  /**
   * Show a list of all disponibilidades.
   * GET disponibilidades
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, }) {
    const disponibilidades = await Disponibilidade.all();

    return disponibilidades;
  }


  /**
   * Create/save a new disponibilidade.
   * POST disponibilidades
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.all();

    console.log(data)

    const disponibilidade = await Disponibilidade.create({...data});

    return disponibilidade;

    //========================//
/*  Esse é o formato que createMany espera
    const disp = [
      {
        "data_inicial" : "2020-08-01",
        "data_final":"2020-08-11",
        "valor_diaria":15,
        "garage_id": 1
      },
      {
        "data_inicial" : "2020-08-02",
        "data_final":"2020-08-12",
        "valor_diaria":15,
        "garage_id": 1
      },
      {
        "data_inicial" : "2020-08-03",
        "data_final":"2020-08-13",
        "valor_diaria":15,
        "garage_id": 1
      },
    ]
    const disponibilidade = await Disponibilidade.createMany(disp);

    return disponibilidade;
    */
  }

  /**
   * Display a single disponibilidade.
   * GET disponibilidades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response }) {
    const disponibilidade = await Disponibilidade.findOrFail(params.id);

    return disponibilidade;
  }


  /**
   * Update disponibilidade details.
   * PUT or PATCH disponibilidades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a disponibilidade with id.
   * DELETE disponibilidades/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    //pensar na regra de negocio quando vai poder excluir uma disponibilidade

    // const disponibilidade = await Disponibilidade.findOrFail(params.id)

  }
}

module.exports = DisponibilidadeController
