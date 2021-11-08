/* global fetch, Response */

const NODE_ENV = process.env.NODE_ENV
const API_ENDPOINT = process.env.API_ENDPOINT || 'https://pro.microlink.io'
const API_KEY = process.env.API_KEY

const allowedDomains = process.env.DOMAINS.split(',').map(n => n.trim())
const isProduction = NODE_ENV === 'production'

const isAllowedDomain = isProduction
  ? origin => allowedDomains.includes(origin)
  : () => true

export default async function middleware (request) {
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
