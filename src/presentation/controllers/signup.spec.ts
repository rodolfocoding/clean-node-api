import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const htppRequest = {
      body: {
        email: 'any_email@gmail.com',
        password: '123456',
        passwordConfirmation: '123456'
      }
    }
    const htppResponse = sut.handle(htppRequest)

    expect(htppResponse.statusCode).toBe(400)
  })
})
