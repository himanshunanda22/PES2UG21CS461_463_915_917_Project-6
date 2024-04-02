import prisma from "../../../../prisma/client";
export async function GET(request: Request, context : any) {
    const id = context.params.id;
    const product = await prisma.product.findUnique({
        where: {
          id: Number(id),
        },
      });
    console.log(product);
    return new Response(JSON.stringify(product), {
      headers: { "content-type": "application/json" },
    });
  }
export async function POST(request: Request, context : any) {
    const id = context.params.id;
    const { buyerId } = await request.json();
    const updatedProduct = await prisma.product.update({
        where: {
          id: Number(id),
        },
        data: {
          buyerId: buyerId, // Update the buyerId with the value from the request body
        },
      });
      console.log(updatedProduct);
  return new Response(JSON.stringify(updatedProduct), {
    headers: { "content-type": "application/json" },
  });


    
}