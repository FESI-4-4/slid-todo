import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ message: '로그아웃 하였습니다' }, { status: 200 });

  // 쿠키 삭제
  response.cookies.delete('accessToken');
  response.cookies.delete('refreshToken');

  return response;
}
