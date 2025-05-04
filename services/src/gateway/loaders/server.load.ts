import fastify from 'fastify'

export default class Server {
    load() {
        const server = fastify();

        server.get('/test', async (request, reply) => {
            return 'test'
        })
        
        server.listen({ port: 8080, host: "0.0.0.0" }, (err, address) => {
            console.log(`Сервер запущен, адрес: ${address}`)
        })
    }
}