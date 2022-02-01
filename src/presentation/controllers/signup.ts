import { HttpReponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (htppRequest: HttpRequest): HttpReponse {
    const requiredFileds = ['name', 'email']

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
