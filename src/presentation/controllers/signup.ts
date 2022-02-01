import { HttpReponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'

export class SignUpController implements Controller {
  handle (htppRequest: HttpRequest): HttpReponse {
    const requiredFileds = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredFileds) {
      if (!htppRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    return {
      statusCode: 200,
      body: 'ok'
    }
  }
}
