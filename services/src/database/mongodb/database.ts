import mongoose from 'mongoose';

class Database {
    mongodb_token: string

    constructor(mongodb_token: string) {
        this.mongodb_token = mongodb_token;
    }

    init() {

    }
}