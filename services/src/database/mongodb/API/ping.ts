import { FastifyPluginAsync } from 'fastify';

const pingRoute: FastifyPluginAsync = async (fastify) => {
    fastify.get('/ping', async () => {
        return Date.now();
    })
};

export default pingRoute;