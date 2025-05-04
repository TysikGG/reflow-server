import Server from "./loaders/server.load";
import 'dotenv/config'

const server = new Server();

server.load();