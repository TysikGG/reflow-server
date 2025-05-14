import MongoDB from "./mongodb/database";
import 'dotenv/config';

switch (process.env.DATABASE_TYPE) {
    case "mongodb":
        const db = new MongoDB(process.env.MONGODB_TOKEN);
        db.init().then(() => {
            console.log(`База данных инициализирована. Тип базы данных: ${process.env.DATABASE_TYPE}`)
        })
        break;
    default:
        throw new Error("Тип базы данных не указан!")
}