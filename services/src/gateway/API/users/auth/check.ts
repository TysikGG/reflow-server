import { FastifyPluginAsync } from 'fastify';
import GatewayUser from '../../../structures/User.class';

const loginRoute: FastifyPluginAsync = async (fastify, options) => {
    fastify.post('/login', async (req, res) => {
        const username = req.body["username"];
        if (!username) return { error: true, status: "INCORRECT_REQUEST" };

        const user = new GatewayUser();

        const data = await user.checkUsername(username);
        return data;
    })
};

export default loginRoute;