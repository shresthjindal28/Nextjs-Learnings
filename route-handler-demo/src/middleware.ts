import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    // return NextResponse.redirect(new URL('/', request.url));

    // if(request.nextUrl.pathname === '/profile') {
    //     return NextResponse.rewrite(new URL('/hello', request.nextUrl));
    // }


    const response = NextResponse.next();
}

// export const config = {
//     matcher: ['/profile'],
// };