import User from "../../libs/structures/User";

export default class GatewayUser implements User {
    id: string;
    data?: object;
    auth?: UserAuthProps;
    
}