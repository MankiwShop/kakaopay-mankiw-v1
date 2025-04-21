export const config = {
  runtime: 'edge',
};

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  return NextResponse.json({ message: "KakaoPay API is working!" });
}
