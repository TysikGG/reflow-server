import snowflake from "../../../libs/structures/Snowflake";
import User from "../../../libs/structures/User";
import userSchema from "../schemas/User.schema";

export default class MongoUser extends User {
    async create(hashed_password: string) {
        if (!hashed_password) throw new Error("При регистрации пароль не был указан!");
        if (!this.auth?.username) throw new Error("При регистрации никнейм не был указан!");

        const generatedID = snowflake.generate();

        const user = new userSchema({
            id: generatedID,
            data: this.data,
            auth: this.auth
        });
        console.log("ID нового пользователя: " + generatedID);

        const res = await user.save();
        console.log(res);
        return res;
    }

    async findByID(id: string) {
        const res = await userSchema.findOne({ id: id });
        console.log(res);
    }
}