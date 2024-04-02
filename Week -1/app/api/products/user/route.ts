import prisma from "../../../../prisma/client";
export async function POST(request: Request, context : any) {
    const body = await request.json();
    const {userId} =body;
    const bought = await prisma.product.findMany({
      where: {
        buyerId: Number(userId),
      },
    });
    const sold = await prisma.product.findMany({
      where: {
        sellerId: Number(userId)
      }
    })
    const obj ={
      bought:bought,
      sold:sold
    }
    return new Response(JSON.stringify(obj), {
      headers: { "content-type": "application/json" },
    });
    
  }
  export async function GET(request: Request, context : any) {
   const userId = 1;
    const bought = await prisma.product.findMany({
      where: {
        buyerId: Number(userId),
      },
    });
    const sold = await prisma.product.findMany({
      where: {
        sellerId: Number(userId)
      }
    })
    const obj ={
      bought:bought,
      sold:sold
    }
    return new Response(JSON.stringify(obj), {
      headers: { "content-type": "application/json" },
    });
    
  }
