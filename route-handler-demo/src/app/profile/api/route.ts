import { type NextRequest } from 'next/server';
import { headers,cookies } from 'next/headers';
import { log } from 'console';

export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers)
  // console.log('Request Headers:', requestHeaders.get("Authorization"));

  const headerList = await headers()
  console.log(headerList.get("Authorization"))
  return new Response('Profile API data');


  const cookieStore = await cookies()
  cookieStore.set('test', 'value');
  console.log('Cookie set:', cookieStore.get('test'));  
}