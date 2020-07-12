'use strict'

const Response = require('@adonisjs/framework/src/Response');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Garage = use('App/Models/Garage')

/**
 * Resourceful controller for interacting with garages
 */
class GarageController {
  /**
   * Show a list of all garages.
   * GET garages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async index ({ request, response }) {
    const garages = await Garage.all();

    return garages;
  }


  /**
   * Create/save a new garage.
   * POST garages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth, response }) {
    const data = request.all();

    // console.log('data')
    // console.log(data)

    const garage = await  Garage.create({ user_id: auth.user.id, ...data })

    return garage;
  }

  /**
   * Display a single garage.
   * GET garages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async show ({ params, request, response}) {
    const garage = await Garage.findOrFail(params.id);

    return garage;
  }


  /**
   * Update garage details.
   * PUT or PATCH garages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a garage with id.
   * DELETE garages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  /* Não quero que um usuário delete a garage do outro */
  async destroy ({ params, auth, request, response }) {
    const garage = await Garage.findOrFail(params.id);

    if(garage.user_id != auth.user.id){
      return response.status(401);
    }

    garage.delete();
  }
}

module.exports = GarageController
