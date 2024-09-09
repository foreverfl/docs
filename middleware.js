import { NextResponse } from 'next/server';
import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';

export function middleware(request) {
  // 클라이언트의 Accept-Language 헤더 가져오기
  const negotiatorHeaders = {
    'accept-language': request.headers.get('accept-language') || '',
  };

  // Negotiator로 언어 결정
  const negotiator = new Negotiator({ headers: negotiatorHeaders });
  const languages = negotiator.languages();

  // 지원하는 언어 목록 (한국어, 영어, 일본어)
  const locales = ['ko', 'en', 'ja'];
  const defaultLocale = 'en';

  // 매칭된 언어 반환
  const locale = match(languages, locales, defaultLocale);

  // 언어에 따라 리다이렉션 (이미 로케일을 포함한 경로가 아니라면)
  if (!request.nextUrl.pathname.startsWith(`/${locale}`)) {
    return NextResponse.redirect(new URL(`/${locale}${request.nextUrl.pathname}`, request.url));
  }

  return NextResponse.next();
}

// 이 미들웨어를 모든 경로에 적용
export const config = {
  matcher: ['/((?!_next|favicon.ico).*)', '/(en|ja|ko)(/.*)?'],
};