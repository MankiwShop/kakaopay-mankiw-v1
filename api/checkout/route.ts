import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const cartTotal = body.total || 0;

  // 模拟调用 kakao pay API
  const kakaoResponse = {
    tid: 'T1234567890',
    next_redirect_pc_url: 'https://kakaopay.test/redirect',
    total: cartTotal
  };

  return NextResponse.json(kakaoResponse);
}
