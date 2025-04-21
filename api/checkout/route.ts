import { NextRequest, NextResponse } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const total = searchParams.get('total')

  return NextResponse.json({
    message: 'This is KakaoPay Checkout',
    total: total ?? 'not provided',
  })
}
