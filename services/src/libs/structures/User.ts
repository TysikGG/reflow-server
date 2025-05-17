interface UserProps {
    id?: string;
    data?: object;
}

export interface UserAuthProps {
    
}

export interface UserDataProps {
    username?: string
}

export default class User implements UserProps {
    id: string | null;
    data?: UserDataProps | null;
    auth?: UserAuthProps | null

    constructor(id?: string, data?: UserDataProps, auth?: UserAuthProps) {
        this.id = id;
        this.data = data;
        this.auth = auth;
    }
}