import prisma from "../../../../prisma/client";
export async function GET(request: Request, context : any) {
    const id = context.params.id;
    const user = await prisma.user.findUnique({
        where: {
          id: Number(id),
        },
      });
    console.log(user);
    return new Response(JSON.stringify(user), {
      headers: { "content-type": "application/json" },
    });
  }
  