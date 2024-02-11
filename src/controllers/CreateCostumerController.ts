import {FastifyRequest,  FastifyReply } from "fastify";
import { CreateCostumerService } from "../services/CreateCostumerService";



class CreateCostumerController {
    async handle(request: FastifyRequest, reply:FastifyReply ){
        const { name, email } = request.body as {name: string, email: string}
        const costumerService = new CreateCostumerService();
        const costumer = await costumerService.execute({name, email});
        reply.send(costumer)

    }
}

export {CreateCostumerController}