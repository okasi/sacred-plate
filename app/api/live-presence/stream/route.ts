import { livePresenceStore } from '@/server/livePresenceStore';

export const runtime = 'nodejs';

function encodeEvent(participants = livePresenceStore.getSnapshot()) {
  return `data: ${JSON.stringify({ participants })}\n\n`;
}

export async function GET(request: Request) {
  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();
      const pushSnapshot = () => {
        controller.enqueue(encoder.encode(encodeEvent()));
      };

      const unsubscribe = livePresenceStore.subscribe(pushSnapshot);
      const heartbeat = setInterval(() => {
        controller.enqueue(encoder.encode(': keep-alive\n\n'));
      }, 15_000);

      pushSnapshot();

      request.signal.addEventListener('abort', () => {
        clearInterval(heartbeat);
        unsubscribe();
      });
    },
    cancel() {
      return undefined;
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    },
  });
}
