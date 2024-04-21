import prisma from "../../../prisma/client";

export async function GET(request: Request) {
  const hello = await prisma.user.findMany();
  return new Response(JSON.stringify(hello), {
    headers: { "content-type": "application/json" },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const hello = await prisma.user.create({ data: body });
    return new Response(JSON.stringify(hello), {
      headers: { "content-type": "application/json" },
      status: 201,
    });
  } catch (error) {
    return new Response("Could not create user", {
      status: 500,
      headers: { "content-type": "text/plain" },
    });
  }
}