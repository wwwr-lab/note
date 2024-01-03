import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
	console.log('미들웨어가 실행되고 있음! 체크 중 ! @@');
	if (request.nextUrl.pathname.startsWith('/products/1004')) {
		console.log('경로를 리다이렉트함');
		return NextResponse.redirect(new URL('/products', request.url));
	}
}

//특정한 경로에서만 수행할지
export const config = {
	matcher: ['/products/:path*'], //path가 있거나(많거나) 없거나 둘 다 가능
	//matcher: ['/products/:path+'], //path가 하나 또는 많거나 => /products/slug 다이나믹 경로에 해당하는 곳에서만 미들웨어 실행

};
