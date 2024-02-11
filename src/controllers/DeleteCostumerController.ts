import {FastifyRequest,  FastifyReply } from "fastify";
import {DeleteCostumerService} from '../services/DeleteCostumerService'

class DeleteCostumerController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as {id: string}
        const costumerService = new DeleteCostumerService();

        const costumer = await costumerService.execute({id});

        reply.send(costumer);


    }
}

export {DeleteCostumerController}