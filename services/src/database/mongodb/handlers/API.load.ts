import autoload from "@fastify/autoload";
import { FastifyInstance } from "fastify";
import path from "path";

export default function load_API(server: FastifyInstance) {
    server.register(autoload, {
        dir: path.join(__dirname, '..', 'API'),
        options: { prefix: process.env.DATABASE_ROUTE_SECRET + 'database' }
    }).then(() => console.log("Маршруты базы данных инициализированы:\n" + server.printRoutes()));
}