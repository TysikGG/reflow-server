import { FastifyPluginAsync } from 'fastify';
import MongoUser from '../../structures/User.class';

const databaseGetRoute: FastifyPluginAsync = async (fastify, options) => {
    fastify.post('/login', async (req, res) => {
        try {
            const user = new MongoUser();
            const username = req.body["username"];
            const hashed_password = req.body["hashed_password"];

            if (username) {
                const data = await user.loginByUsername(username);

            } else {    
                res.status(404);
                return { error: true, status: "NOT_FOUND" }
            }
        } catch (e) {
            console.log(e)
        }
    });
};

export default databaseGetRoute;