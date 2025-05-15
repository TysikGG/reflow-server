import { FastifyPluginAsync } from 'fastify';
import GatewayUser from '../../../structures/User.class';

const loginRoute: FastifyPluginAsync = async (fastify, options) => {
    fastify.post('/login', async (req, res) => {
        const username = req.body["username"];
        const hashed_password = req.body["hashed_password"];

        if (!username || !hashed_password) return { error: true, status: "INCORRECT_FORM" };

        console.log(hashed_password);
        console.log(username);

        const user = new GatewayUser(null, null, { username });

        await user.login(hashed_password);
    })
};

export default loginRoute;