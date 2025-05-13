import { FastifyPluginAsync } from 'fastify';

const userRoutes: FastifyPluginAsync = async (fastify, options) => {
    fastify.get('/register', async () => { 
        
    })
};

export default userRoutes;