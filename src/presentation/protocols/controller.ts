import { HttpReponse, HttpRequest } from './http'

export interface Controller {
  handle: (htppRequest: HttpRequest) => HttpReponse
}
