import User from "../../libs/structures/User";
import database from "./Database.class";

export default class GatewayUser extends User {
    async register(hashed_password: string) {
        const username = this.auth.username;

        if (!username || !hashed_password) return new Error("Никнейм или пароль не указаны при регистрации!");

        await database.createUser(this, hashed_password);
    }

    async login(hashed_password: string) {
        const username = this.auth.username;

        if (!username || !hashed_password) return new Error("Никнейм или пароль не указаны при входе!");

        await database.getUser(this, hashed_password);
    }
}