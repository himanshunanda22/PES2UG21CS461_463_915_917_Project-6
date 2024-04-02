import exp from "constants";
import prisma from "../../../prisma/client";
export async function GET(request: Request, context : any) {
    const products = await prisma.product.findMany({
        where: {
          buyerId: null,
        },
      });
    console.log(products);
    return new Response(JSON.stringify(products), {
      headers: { "content-type": "application/json" },
      status: 201,
    });
  }
  
export async function POST(request: Request, context : any) {
    const body = await request.json();
    const products = await prisma.product.create({ data: body });
    return new Response(JSON.stringify(products), {
      headers: { "content-type": "application/json" },
      status: 201,
    });
  }