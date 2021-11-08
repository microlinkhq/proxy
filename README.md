<div align="center">
  <img src="https://cdn.microlink.io/banner/proxy.png" alt="microlink">
  <br><br>
</div>

In this example, you'll see how to interact with [Microlink API](https://microlink.io/docs/api/getting-started/overview) using a [Edge Function](https://vercel.com/edge).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/examples/tree/main/edge-functions/crypto&project-name=crypto&repository-name=crypto)

In case you already have a Next.js project and you want to interact with Microlink, just move `_middleware.js` inside a page to create a route, .e.g, `/pages/microlink/_middleware.js`, and then call `/microlink` to interact with your proxy.

## Environment Variables

### DOMAINS

*Required*</br>
Type: `string`|`string[]`

The list of allowed domains authorized to consume your Microlink API credentials.

Note domains should be provided in the [URL.origin](https://developer.mozilla.org/en-US/docs/Web/API/URL/origin) format (e.g., `'https://example.com'`).

### API_KEY

*Required*</br>
Type: `string`

Your Microlink API key used to [authenticate](https://microlink.io/docs/api/api-basics/authentication) your requests.

### API_ENDPOINT

Type: `string`</br>
Default: `https://pro.microlink.io`

The Microlink API endpoint used for sending the requests.

## License

**microlink** © [Microlink](https://microlink.io), Released under the [MIT](https://github.com/microlinkhq/proxy/blob/master/LICENSE.md) License.<br>
Authored and maintained by [Kiko Beats](https://kikobeats.com) with help from [contributors](https://github.com/microlinkhq/proxy/contributors).

> [microlink.io](https://microlink.io) · GitHub [@MicrolinkHQ](https://github.com/microlinkhq) · Twitter [@microlinkhq](https://twitter.com/microlinkhq)
