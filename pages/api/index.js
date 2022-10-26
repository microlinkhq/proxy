/* global fetch, Response */

export const config = {
  runtime: 'experimental-edge'
}

const NODE_ENV = process.env.NODE_ENV
const API_ENDPOINT = process.env.API_ENDPOINT || 'https://pro.microlink.io'
const API_KEY = process.env.API_KEY

const origins = process.env.ORIGINS?.split(',').map(n => n.trim())

const isProduction = NODE_ENV === 'production'

const isAllowedDomain =
  isProduction && Array.isArray(origins)
    ? origin => origins.includes(origin)
    : () => true

export default async request => {
  const url = request.nextUrl
  const origin = request.headers.get('origin')

  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Max-Age': '86400'
      }
    })
  }

  if (url.pathname === '/favicon.ico' || url.pathname === '/robots.txt') {
    return new Response()
  }

  if (!isAllowedDomain(origin)) {
    return new Response(null, { status: 403 })
  }

  return fetch(`${API_ENDPOINT}?${url.searchParams.toString()}`, {
    headers: {
      'x-api-key': API_KEY,
      accept: request.headers.get('accept')
    }
  })
}
