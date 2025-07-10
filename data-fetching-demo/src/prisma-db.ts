import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

const seedProduct = async () => {
    const count = await prisma.product.count()
    if(count === 0){
        await prisma.prodduct.createMany({
            data: [
                {title: 'product 1', price: 500, description:"Product 1 Detail "},
                {title: 'product 2', price: 600, description:"Product 2 Detail "},
                {title: 'product 3', price: 800, description:"Product 3 Detail "},
            ]
        })
    }
}

seedProduct()


export async function getProducts() {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
    return prisma.product.findMany()
}