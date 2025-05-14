import Server from "./handlers/server.load";
import 'dotenv/config';

const server = new Server();

server.load();
