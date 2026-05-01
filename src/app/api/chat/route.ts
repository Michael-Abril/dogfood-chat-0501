import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  return NextResponse.json({ status: 'ok', service: 'chat', timestamp: new Date().toISOString() });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  return NextResponse.json({ echo: body.message, timestamp: new Date().toISOString() });
}
