interface UserProps {
    id?: string;
    data?: object;
    auth?: object;
}

export interface UserAuthProps {
    
}

export interface UserDataProps {
    username?: string
}

export default class User implements UserProps {
    id: string | null;
    data?: UserDataProps;
    auth?: UserAuthProps;

    constructor(id?: string, data?: UserDataProps, auth?: UserAuthProps) {
        this.id = id || null;
        this.data = data || {};
        this.auth = auth || {};
    }
}