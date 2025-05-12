import MongoDB from "./mongodb/database";

export default function loadDatabase() {

    switch (process.env.DATABASE_TYPE) {
        case "mongodb":
            const db = new MongoDB(process.env.MONGODB_TOKEN);
            db.init().then(() => {
                console.log("База данных подключена.")
            })
    }
}