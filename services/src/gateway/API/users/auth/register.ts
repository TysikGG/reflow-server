import { FastifyPluginAsync } from 'fastify';
import GatewayUser from '../../../structures/User.class';

const registerRoute: FastifyPluginAsync = async (fastify, options) => {
    fastify.post('/register', async (req, res) => {
        const username = req.body["username"] as string;
        const hashed_password = req.body["hashed_password"];

        if (!username || !hashed_password) return { error: true, status: "INCORRECT_FORM" };

        console.log(hashed_password);
        console.log(username);

        const user = new GatewayUser();
        user.setUsername(username);

        const register = await user.register(hashed_password);

        if (register.error === true) res.status(register.serverStatus);
        return register;    `   `
    })
};

export default registerRoute;