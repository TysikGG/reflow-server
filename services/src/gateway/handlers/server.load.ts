import database from '../structures/Database.class';
import fastify, { FastifyInstance } from 'fastify'
import autoload from "@fastify/autoload";
import fastifyCors from '@fastify/cors';
import path from 'path';

export default class Server {
    load() {
        const server = fastify();

        server.register(fastifyCors);

        server.listen({ port: Number(process.env.API_PORT) || 8080, host: "0.0.0.0" }, (err, address) => {
            console.log(`Сервер запущен, адрес: ${address}`)
        });

        this.load_database();
        this.connect_API(server);
    }

    async load_database() {
        return database.init();
    }

    connect_API(server: FastifyInstance) {
        server.register(autoload, {
            dir: path.join(__dirname, '..', 'API'),
            options: { prefix: process.env.DEFAULT_API_ROUTE }
        }).then(() => console.log("Маршруты Gateway API инициализированы:\n" + server.printRoutes()))
    }
}