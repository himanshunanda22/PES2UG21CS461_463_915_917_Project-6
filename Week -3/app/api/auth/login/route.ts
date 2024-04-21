import prisma from "../../../../prisma/client";
export async function POST(request: Request, context : any) {
    const body = await request.json();

    const user = await prisma.user.findMany({
        where: {
          email: String(body.email),
        },
      });
      if(user.length===0){
        return new Response("Wrong Credentials", {
            status: 500,
            headers: { "content-type": "text/plain" },
            });
      }
      if (body.password=== user[0].password) {
        return new Response(JSON.stringify(user), {
          headers: { "content-type": "application/json" },
          status: 201,
        });
      }
        else{
            return new Response("Wrong Credentials", {
            status: 500,
            headers: { "content-type": "text/plain" },
            });
        }
  }
  