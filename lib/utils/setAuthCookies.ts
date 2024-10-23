import { NextResponse } from 'next/server';

const setAuthCookies = (response: NextResponse, accessToken: string, refreshToken: string) => {
  // accessToken 설정
  response.cookies.set('accessToken', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60,
    path: '/',
  });

  // refreshToken 설정
  response.cookies.set('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 24 * 60 * 60,
    path: '/',
  });

  return response;
};

export default setAuthCookies;
