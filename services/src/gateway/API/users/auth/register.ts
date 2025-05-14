import { FastifyPluginAsync } from 'fastify';
import User from '../../../../libs/structures/User';

const registerRoute: FastifyPluginAsync = async (fastify, options) => {
    fastify.post('/register', async (req, res) => {
        const username = req.body["username"];
        const hashed_password = req.body["hashed_password"];

        if (!username || !hashed_password) return { error: true, status: "INCORRECT_FORM" };
        
        console.log(hashed_password);
        console.log(username);

        const user = new User(null, null, {
            username, hashed_password
        })
    })
};

export default registerRoute;