import { FastifyPluginAsync } from 'fastify';
import MongoUser from '../../structures/User.class';

const databaseGetRoute: FastifyPluginAsync = async (fastify, options) => {
    fastify.post('/check', async (req, res) => {
        try {
            const user = new MongoUser();
            const username = req.body["username"];

            if (!username) {
                res.status(400);
                return { error: true, status: "NOT_FOUND" };
            }

            const finded = await user.findByUsername(username);

            if (finded) return { available: false }
            else return { available: true };

        } catch (e) {
            console.log(e)
        }
    });
};

export default databaseGetRoute;