const mongoose = require('mongoose')
const app = require('../../app')
const supertest = require('supertest')
const api = supertest(app)
const User = require('../../models/userModel')

jest.setTimeout(30000);

beforeAll(async()=>{
  await User.findOneAndDelete({email: 'test@email.com'})
})


describe('User Route', () => {
    test('POST /user/signup works', async () => {
        const newUser = {
        first_name: 'Test',
        last_name: 'User',
        email: 'test@email.com',
        password: 'password',
      
    }

    const response = await api
        .post('/user/signup')
        .send(newUser)
        .expect(201)
        


    expect(response.body.message).toBe("Signup successful")
    expect(response.body.status).toBe('true')
})

  test('POST /user/signup works for incorrect details', async () => {
    const newUser = {
        firstName: 'User',
        lastName: 'One',
        username: 'user1',
    }

    const response  = await api
      .post('/user/signup')
      .send(newUser)
      .expect(400)
      expect(response.body.message).not.toBe("Signup successful")
  })

  test('POST /user/login', async ()=>{
    const User ={
      email: 'test@email.com',
      password: 'password'
    }
    const response  = await api
      .post('/user/login')
      .send(User)
      .expect(200)
      expect(response.body).not.toContain(User.password)
  })
})

afterAll(() => {
  mongoose.connection.close()
})