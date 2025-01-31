import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const leads = await prisma.lead.findMany();
  return new Response(JSON.stringify(leads), { status: 200 });
}

export async function PUT(req: Request) {
  try {
    const { id, salespersonId } = await req.json();

    const updatedLead = await prisma.lead.update({
      where: { id },
      data: { salespersonId: salespersonId || null },
    });

    return new Response(JSON.stringify(updatedLead), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to update lead" }), { status: 500 });
  }
}
