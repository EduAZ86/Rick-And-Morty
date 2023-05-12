const server = require('./src/app')
const session = require ('supertest')
const agent = session(server)

describe('Test de RUTAS', ()=>{
    describe('GET /rickandmorty/character/:id',()=>{
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', 
        async ()=>{
            const response = await agent.get('/rickandmorty/character/1')
            const character = ["id", "name", "species", "gender", "status", "origin", "image"]

            character.forEach(()=>{
                expect(response.body).toHaveProperty(char)
            })
        }   
        )

        it('Si hay error responde con status: 500'), async()=>{
            await agent.get('/rickandmorty/character/1000').expect(500)
        }
    })


    describe('GET /rickandmorty/login', ()=>{
        it('La informacion de login es correcta', async()=>{
            const response = await agent.get('/rickandmorty/login?email=eduardo@example.com&password=henry2023')
            const access = {access: true}

        })
        
    })

    describe('POST /rickandmorty/fav', ()=>{

        const character1 = {id: '1', name: 'Lisandro'}
        const character2 = {id: '2', name: 'Adalberto'}

        it('Devuelve el elemento de arreglo', async ()=>{
            await agent.post('/rickandmorty/fav'.send(character1))
            expect(response.body).toContainEqual(character1)
        })
        it('Devuelve el elemento previamente enviado', async ()=>{
            const response = await agent.post('/rickandmorty/fav')
            send(character2)
            expect(response.body).toContainEqual(character1)
            expect(response.body).toContainEqual(character2)
        } )
    })

    describe('DELETE /rockandmorty/fav/:id', ()=>{
        const character1 = {id: '1', name: 'Lisandro'}
        const character2 = {id: '2', name: 'Adalberto'}
        id('Devulve el arreglo correspondiente si no se elimina ningun personaje', async()=>{
            const response = await agent.delete('/rockandmorty/fav/:98')
            expect(response.body).toContainEqual(character1)
            expect(response.body).toContainEqual(character2)
        })
    })


})

