import prismaClient from "../prisma";

interface CreateCostumerProps{
    name: string
    email: string
}

class CreateCostumerService {
    async execute({name, email} : CreateCostumerProps) {

        if (!name || !email) {
            throw new Error ("Preencha todos os campos")
        }
        const costumer = await prismaClient.costumer.create({
            data: {
                name,
                email,
                status: true
            }
        })
        
        console.log("ROTA FOI CHAMADA")

        return costumer
    }
}

export {CreateCostumerService}
