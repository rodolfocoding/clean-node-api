export class ServerError extends Error {
  constructor () {
    super('INternal server error')
    this.name = 'ServerError'
  }
}
