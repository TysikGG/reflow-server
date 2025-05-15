import axios from "axios";
import 'dotenv/config';
import GatewayUser from "./User.class";

interface DBrequestProps {
    method?: string,
    data?: object
}

class Database {
    route: string;

    constructor() {
        this.route = `${process.env.DATABASE_ROUTE}:${process.env.DATABASE_PORT}${process.env.DATABASE_ROUTE_SECRET}/database/`;
    }

    async ping() {
        try {
            const res = await this.sendRequest("ping", { method: "GET" });
            if (res) return res.data;
            else return false;
        } catch {
            return false;
        }
    }

    async heartbeat() {
        setInterval(async () => {
            const res = await this.ping();
            const ping = Number(res.toString());
            if (ping) console.log(`Heartbeat to Database: ${Date.now() - ping}ms`);
            else console.error('Heartbeat failed!')
        }, Number(process.env.DATABASE_HEARTBEAT) || 20000)
    }

    async init() {
        this.heartbeat();
    }

    async sendRequest(route: string, { method = "GET", data } : DBrequestProps) {
        return await axios({
            url: this.route + route,
            method: method || "POST",
            data: data
        });
    }

    async createUser(user: GatewayUser, hashed_password: string) {
        const baseRoute = "users/create";

        const request = await this.sendRequest(baseRoute, {
            method: "POST",
            data: {
                user: user,
                hashed_password
            }
        });

        console.log(request.data);
    }

    async getUserByID(id: string) {
        const baseRoute = "users/get";

        const request = await this.sendRequest(baseRoute, {
            method: "POST",
            data: { id }
        });

        console.log(request.data);
    }

    async getUserByUsername(username: string) {
        const baseRoute = "users/get";

        const request = await this.sendRequest(baseRoute, {
            method: "POST",
            data: { username }
        });

        console.log(request.data);
    }
}

export default new Database;