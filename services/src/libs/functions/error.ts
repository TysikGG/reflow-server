import config_RU from "../configs/codes.ru.json";

export default class ServerError {
    error: boolean;
    status: string;
    serverStatus?: number;
    localeStatus?: string;

    constructor (status: string, serverStatus?: number) {
        this.error = true;
        this.status = status;
        this.serverStatus = serverStatus || 400;
        this.getErrorText();
    }

    getErrorText() {
        const text = config_RU[this.status];
        if (!text) {
            console.log("Не найден тектовый код ошибки:", this.status);
            return null;
        } else {
            this.localeStatus = text;
            return text;
        }
    }
}