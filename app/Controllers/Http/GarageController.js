'use strict'

const Response = require('@adonisjs/framework/src/Response');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Garage = use('App/Models/Garage')
const Disponibilidade = use('App/Models/Disponibilidade');

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
    const garages = await Garage.query().with('enderecoGaragem').with('disponibilidadeGaragem').fetch();
    // const garagew = garages.enderecoGaragem().fetch()

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

    // console.log('')
    // console.log(data.vaga_presa)

    const garage = await  Garage.create({
      user_id: auth.user.id,
      titulo: data.titulo,
      descricao:data.descricao ,
      dimx: data.dimx,
      dimy: data.dimy,
      dimz: data.dimz,
      tipo: data.tipo,
      acesso_controlado: data.acesso_controlado,
      vaga_presa: data.vaga_presa,
      coberto: data.coberto,
      objetos: data.objetos,
      endereco_garagem_id:5,
    })

    let keys = [];

    //pegando a key de todas disponibilidade que no caso é as datas
    for (let key in data.disponibilidade) {
      keys.push({key, "keyData": new Date(key)});
    }

    //ordenando vetor de keys
    keys.sort(function(a, b) {
      var dateA = new Date(a.keyData), dateB = new Date(b.keyData);
      return dateA - dateB;
    });


    //Agora criando o array com cada intervalor de disponibilidade
    let disponibilidadeGrupo = [];
    var initialData = '';

    keys.forEach((item) => {
      if(data.disponibilidade[item.key].startingDay && data.disponibilidade[item.key].endingDay){
        disponibilidadeGrupo.push({
          "data_inicial": item.key,
          "data_final": item.key,
          "valor_diaria": data.valor,
          "garage_id": garage.id
        })

      } else if(data.disponibilidade[item.key].startingDay){
        initialData = item.key;

      } else if(data.disponibilidade[item.key].endingDay){

        disponibilidadeGrupo.push({
          "data_inicial": initialData,
          "data_final": item.key,
          "valor_diaria": data.valor,
          "garage_id": garage.id
        })
      }
    })

    // console.log(disponibilidadeGrupo)
    await Disponibilidade.createMany(disponibilidadeGrupo)



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
