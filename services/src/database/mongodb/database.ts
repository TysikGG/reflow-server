import mongoose from 'mongoose';
import fastify from 'fastify';

export default class MongoDB {
    mongodb_token: string

    constructor(mongodb_token: string) {
        this.mongodb_token = mongodb_token;
    }

    async init() {
        return await mongoose.connect(this.mongodb_token);
    }

    async connect_API() {
        const server = fastify();

        server.listen({ port: 27017, host: "0.0.0.0" }, (err, address) => {
            console.log(`База данных подключена, адрес: ${address}`)
        })
    }
}