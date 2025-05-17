import User from "../../libs/structures/User";
import database from "./Database.class";

export default class GatewayUser extends User {
    async register(hashed_password: string) {
        const username = this.data.username;

        if (!username || !hashed_password) return new Error("Никнейм или пароль не указаны при регистрации!");

        await database.createUser(this, hashed_password);
    }

    async login(hashed_password: string) {
        const username = this.data.username;

        if (!username || !hashed_password) return new Error("Никнейм или пароль не указаны при входе!");

        const user = await database.login(username, hashed_password);

        console.log(user);
    }

    async checkUsername(username: string) {
        if (!username) return new Error("Никнейм не был указан для функции checkUsername!");

        const usernameCheck = await database.checkUsername(username);

        return usernameCheck;
    }
}