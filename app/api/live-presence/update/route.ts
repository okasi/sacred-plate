import { NextResponse } from 'next/server';
import type { LivePresenceUpdatePayload } from '@/types';
import { livePresenceStore } from '@/server/livePresenceStore';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const payload = (await request.json()) as LivePresenceUpdatePayload;

  if (!payload.sessionId) {
    return NextResponse.json({ error: 'Missing sessionId' }, { status: 400 });
  }

  const participants = livePresenceStore.upsert(payload);
  return NextResponse.json({ participants });
}
