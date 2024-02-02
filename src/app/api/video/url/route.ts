import { biliClient } from '@/lib/client';
import { string2Number } from '@/utils';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const aid = searchParams.get('aid') as string;
  const bvid = searchParams.get('bvid') as string;
  const cid = string2Number(searchParams.get('cid') as string);
  if (typeof cid === 'undefined') return Response.json({ message: 'cid 不存在' });
  const data = await biliClient.getVideoUrl({
    aid: string2Number(aid),
    bvid,
    cid,
  });
  const url = data.data.durl[0].url;

  return fetch(url, {
    headers: {
      referer: 'https://www.bilibili.com/',
      Cookie: '',
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    },
  });
}
