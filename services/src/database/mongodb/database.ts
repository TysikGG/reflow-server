import mongoose from 'mongoose';
import fastify, { FastifyInstance } from 'fastify';
import load_API from './handlers/API.load';

export default class MongoDB {
    mongodb_token: string
    server: FastifyInstance

    constructor(mongodb_token: string) {
        this.mongodb_token = mongodb_token;
    }

    async init() {
        await mongoose.connect(this.mongodb_token);
        return this.connect_server();
    }

    async connect_server() {
        return new Promise((resolve, reject) => {
            const server = fastify();
            this.server = server;

            this.connect_API();

            server.listen({ port: Number(process.env.DATABASE_PORT) || 27017, host: "0.0.0.0" }, (err, address) => {
                if (err) reject(err);
                else resolve(console.log(`Сервер БД запущен, адрес: ${address}`))
            });
        })
    }

    async connect_API() {
        return load_API(this.server);
    }
}