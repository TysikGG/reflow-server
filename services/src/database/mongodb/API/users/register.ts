import { FastifyPluginAsync } from 'fastify';

const databaseRegisterRoute: FastifyPluginAsync = async (fastify, options) => {
    fastify.get('/register', async () => { 
        
    })
};

export default databaseRegisterRoute;