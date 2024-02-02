import { biliClient } from '@/lib/client';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const aid = searchParams.get('aid') as string;
  const bvid = searchParams.get('bvid') as string;
  const data = await biliClient.getVideoDetail({ aid: aid ? Number(aid) : void 0, bvid });
  return Response.json(data);
}
