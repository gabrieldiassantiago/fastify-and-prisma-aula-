import prismaClient from "../prisma";

class ListCostumerService {
    async execute() {
         const costumers = await prismaClient.costumer.findMany()

         return costumers;
    }
}
export {ListCostumerService}