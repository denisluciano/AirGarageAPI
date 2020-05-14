'use strict'

class SessionController {

  async create ({ request, auth, response }) {

    const { email, password } = request.all();

    try {
      const token = await auth.attempt(email, password)
      response.send(token)
    } catch (error) {
      response.status(401).send()
    }
  }

  async test() {
    return "This route only return a simple message informing that's ok";
  }
}

module.exports = SessionController
