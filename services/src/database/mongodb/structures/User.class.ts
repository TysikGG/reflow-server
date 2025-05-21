import _ from 'lodash';
import snowflake from "../../../libs/structures/Snowflake";
import User, { UserAuthProps } from "../../../libs/structures/User";
import userSchema from "../schemas/User.schema";

interface MongoUserAuth extends UserAuthProps {
    _hashed_password?: string | null;
}

export default class MongoUser extends User {
    declare auth?: MongoUserAuth;

    constructor() {
        super();
        this.auth = {
            ...this.auth,
            _hashed_password: null
        };
    }

    async create(hashed_password: string) {
        if (!hashed_password) throw new Error("При регистрации пароль не был указан!");
        if (!this.data?.username) throw new Error("При регистрации никнейм не был указан!");

        const generatedID = snowflake.generate();

        this.auth._hashed_password = hashed_password;
        
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

    private async findInDB(config: object) {
        const result = await userSchema.findOne(config).lean().exec();
    
        if (!result) return null;

        const cleanedData = this.removePrivateFields(result);
        return Object.assign(new User(), cleanedData);
    }

    private removePrivateFields(obj: any): any {
        if (!_.isPlainObject(obj)) return obj;
    
        const processedObj = _.mapValues(obj, (value: any[]) => {
            if (_.isArray(value)) {
                return value.map(item => this.removePrivateFields(item));
            }
            return this.removePrivateFields(value);
        });
    
        return _.omitBy(processedObj, (value: any, key: string) => key.startsWith('_'));
    }

    async findByID(id: string) {
        const res = await this.findInDB({ id });
        console.log(res);
        return res;
    }

    async findByUsername(username: string) {
        const res = await this.findInDB({ 'data.username': username });
        console.log(res);
        return res;
    }

    async checkPassword() {

    }
    
    async loginByUsername(username: string) {
        const res = await this.findInDB({ 'data.username': username });
        console.log(res);
        return res;
    }
}