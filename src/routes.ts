import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCostumerController } from "./controllers/CreateCostumerController";
import { ListCostumersService } from "./controllers/ListCostumerController";
import {DeleteCostumerController} from "./controllers/DeleteCostumerController"



export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    fastify.get("/teste", async (request:FastifyRequest, reply: FastifyReply) => {
        return {ok: true}
    })


    fastify.post("/costumer", async (request: FastifyRequest, reply: FastifyReply)=> {
        return new CreateCostumerController().handle(request, reply)
    })

    fastify.get("/costumers", async (request: FastifyRequest, reply: FastifyReply)=> {
        return new ListCostumersService().handle(request, reply)
    })

    fastify.delete("/costumer", async (request: FastifyRequest, reply: FastifyReply)=> {
        return new DeleteCostumerController().handle(request, reply)
    })

}