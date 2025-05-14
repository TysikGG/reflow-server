import snowflake from "../../../libs/structures/Snowflake";
import User from "../../../libs/structures/User";
import userSchema from "../schemas/User.schema";

export default class MongoUser extends User {
    async register() {
        if (!this.auth?.hashed_password) throw new Error("При регистрации пароль не был указан!");
        if (!this.auth?.username) throw new Error("При регистрации никнейм не был указан!");

        const generatedID = snowflake.generate();
        
        const user = new userSchema({
            id: generatedID,
            auth: {
                hashed_password: this.auth.hashed_password,
                username: this.auth.username
            }
        });

        await user.save();
    }
}