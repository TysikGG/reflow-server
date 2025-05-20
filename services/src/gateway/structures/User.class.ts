import ServerError from "../../libs/functions/error";
import User from "../../libs/structures/User";
import database from "./Database.class";

export default class GatewayUser extends User {
    async register(hashed_password: string) {
        const username = this.data.username;
        if (!username || !hashed_password) return new ServerError("USERNAME_NOT_FOUND");

        const reg = new RegExp("^[a-z0-9]*$");
        if (!username.match(reg)) return new ServerError("INCORRECT_USERNAME_SYMBOLS");

        const checked = await this.checkUsername(username);
        if (checked.found) return new ServerError("USERNAME_ALREADY_EXIST");

        await database.createUser(this, hashed_password);
    }

    async login(hashed_password: string) {
        const username = this.data.username;
        if (!username || !hashed_password) return new ServerError("USERNAME_NOT_FOUND");

        const user = await database.login(username, hashed_password);

        console.log(user);
    }

    async checkUsername(username: string) {
        if (!username) return new ServerError("INCORRECT_FORM");
        const usernameCheck = await database.checkUsername(username);

        return usernameCheck;
    }

    setUsername(username: string) { this.data.username = username };
}