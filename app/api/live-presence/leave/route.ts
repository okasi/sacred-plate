import { NextResponse } from 'next/server';
import { livePresenceStore } from '@/server/livePresenceStore';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { sessionId?: string } | null;

  if (!body?.sessionId) {
    return NextResponse.json({ error: 'Missing sessionId' }, { status: 400 });
  }

  const participants = livePresenceStore.remove(body.sessionId);
  return NextResponse.json({ participants });
}
