import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ status: 'healthy', service: 'chat-api', timestamp: new Date().toISOString() })
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  return NextResponse.json({ id: Date.now(), user: body.user ?? 'anonymous', text: body.text, time: new Date().toISOString() })
}
