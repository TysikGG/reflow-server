interface UserProps {
    id?: string;
    data?: object;
}

interface UserAuthProps {
    username?: string,
    hashed_password?: string | null
}

export default class User implements UserProps {
    id: string | null;
    data?: object | null;
    auth?: UserAuthProps | null

    constructor(id?: string, data?: object, auth?: UserAuthProps) {
        this.id = id;
        this.data = data;
        this.auth = auth;
    }
}