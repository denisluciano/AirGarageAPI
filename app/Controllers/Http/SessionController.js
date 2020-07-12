'use strict'

const User = use('App/Models/User')


class SessionController {

  async create ({ request, auth, response }) {

    const { email, password } = request.all();

    try {

      const token = await auth.attempt(email, password);

      let user = await User.findBy('email', email)

      user = { user: { email: user.email, nome: user.nome}, token};


      console.log(user)

      response.send(user)

    } catch (error) {
      console.log(error)
      response.status(401).send()
    }

  }

}

module.exports = SessionController
