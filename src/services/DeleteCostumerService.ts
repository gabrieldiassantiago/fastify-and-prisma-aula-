import prismaClient from "../prisma"



interface DeleteCostumerProps {
    id: string
}

class DeleteCostumerService {
    async execute({id} : DeleteCostumerProps) {
        if (!id) {
            throw new Error('erro')
        }

        const findCostumer = await prismaClient.costumer.findFirst({
            where: {
                id: id
            }
        })

        if (!findCostumer) {
         throw new Error ('cliente nao existe')
            }
        await prismaClient.costumer.delete({
            where: {
                id: findCostumer.id
            }
        })
        return {message: "Deletado com sucesso"}
    }
}
export {DeleteCostumerService}