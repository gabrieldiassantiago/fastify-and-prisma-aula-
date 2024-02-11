import {FastifyRequest,  FastifyReply } from "fastify";
import { ListCostumerService } from "../services/ListCostumerService";

class ListCostumersService {
    async handle(request:FastifyRequest , reply:FastifyReply ) {
        const listcostumerservices = new ListCostumerService();

        const costumers = await listcostumerservices.execute();
        reply.send(costumers)
    }
}

export {ListCostumersService}