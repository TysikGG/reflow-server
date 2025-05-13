interface UserProps {
    id: string;
    data: object;
}

class User implements UserProps {
    id: string;
    data: object;

    constructor(id: string, data: object) {
        this.id = id;
        this.data = data;
    }

    getUserByID() {

    }
}