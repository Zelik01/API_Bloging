const mongoose = require('mongoose')
const app = require('../../app')
const supertest = require('supertest')
const api = supertest(app)
constBlog = require('../../models/userModel')


jest.setTimeout(100000);


const login = async (email) => {
    const response = await api.post('/user/login').send({
        email,
        password: 'password',
    })
    return response.body
}

describe('Blog Route', () => {
    test('POST /blog works', async () => {
        let user = 'test@emil.com'
        let token = await login(user)
        const newBlog = {
            title: "Lorem ipsum",
            description: "This is a simple blog to test if this endpoint works",
            body: `One brave soul did take a stab at translating the almost-not-quite-Latin. 
            According to The Guardian, Jaspreet Singh Boparai undertook the challenge 
            with the goal of making the text “precisely as incoherent in English as 
            it is in Latin - and to make it incoherent in the same way”. As a result,
             “the Greek 'eu' in Latin became the French 'bien' [...] and the '-ing' 
             ending in 'lorem ipsum' seemed best rendered by an '-iendum' in English.”`,
            tags: "backend"
        }
    
    const response = await api
        .post('/blog')
        .set('Authorization', `Bearer ${token.token}`)
        .send(newBlog)
        .expect(201)
        expect(response.body.message).toBe('Post saved successfully')
    
    })
})