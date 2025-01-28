import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const salespeople = await prisma.salesperson.findMany();
  return new Response(JSON.stringify(salespeople), { status: 200 });
}