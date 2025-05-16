import { FastifyPluginAsync } from 'fastify';
import MongoUser from '../../structures/User.class';

const databaseGetRoute: FastifyPluginAsync = async (fastify, options) => {
    fastify.post('/get', async (req, res) => {
        try {
            const user = new MongoUser()

            const id = req.body["id"];
            const username = req.body["username"];

            if (id) {
                const data = await user.findByID(id);
                return data;
            } else if (username) {
                const data = await user.findByUsername(username);
                return data;
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