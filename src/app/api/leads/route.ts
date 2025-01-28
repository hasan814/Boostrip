import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const leads = await prisma.lead.findMany({ include: { salesperson: true } });
  return new Response(JSON.stringify(leads), { status: 200 });
}

export async function POST(request: Request) {
  const data = await request.json();
  const lead = await prisma.lead.create({ data });
  return new Response(JSON.stringify(lead), { status: 201 });
}

export async function PUT(request: Request) {
  const data = await request.json();
  const { id, salespersonId } = data;
  const lead = await prisma.lead.update({
    where: { id },
    data: { salespersonId },
  });
  return new Response(JSON.stringify(lead), { status: 200 });
}
