import { FastifyPluginAsync } from 'fastify';
import MongoUser from '../../structures/User.class';

const databaseCreateRoute: FastifyPluginAsync = async (fastify, options) => {
    fastify.post('/create', async (req, res) => {
        try {
            const user = new MongoUser();
            
            const mongoUser = Object.assign(user, req.body["user"]) as MongoUser;
            mongoUser.create(req.body["hashed_password"]);

            res.status(201);
            return { success: true };
        } catch (e) {
            console.log(e);
            
            res.status(500);
            return { error: true };
        }
    });
};

export default databaseCreateRoute;