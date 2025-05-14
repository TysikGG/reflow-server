export interface UserProps {
    id?: string;
    data?: object;
}

export interface UserAuthProps {
    username: string,
    hashed_password: string
}

export default class User implements UserProps {
    id: string | null;
    data?: object | null;
    auth?: UserAuthProps | null

    constructor(id?: string, data?: object, auth?: UserAuthProps) {
        this.id = id;
        this.data = data;
        this.auth = {
            username: null,
            hashed_password: null
        }
    }
}