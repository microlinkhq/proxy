<div align="center">
  <img src="https://github.com/microlinkhq/cdn/raw/master/dist/banner/proxy.png#gh-light-mode-only" alt="microlink logo">
  <img src="https://github.com/microlinkhq/cdn/raw/master/dist/banner/proxy-dark.png#gh-dark-mode-only" alt="microlink logo">
  <br><br>
</div>

> Interact with Microlink API without exposing your credentials.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmicrolinkhq%2Fedge-proxy&env=API_KEY,ORIGINS)

## Motivation

Interacting directly with [Microlink API](https://microlink.io/docs/api/getting-started/overview) from frontend side is one of the most common scenarios.

However, it could be a risk security scenario if you are exposing your [`x-api-key`](https://microlink.io/docs/api/api-basics/authentication), being possible that anyone can steal it and consume your API quota.

For preventing that, this tiny microservice allows you interact with Microlink API without compromising your credentials.

## Usage

Deploy this service, setting up the necessaries environment variables.

After that, every time you need to interact with Microlink API, just call the microservice URL instead.

If you are using [`mql`](https://github.com/microlinkhq/mql), setup it as `endpoint` parameter:

```js
const mql = require('@microlink/mql')

mql('https://microlink.io', {
  endpoint: 'https://edge-proxy.microlink.io'
})
```

## Environment Variables

### API_KEY

*Required*</br>
Type: `string`

Your Microlink API key used to [authenticate](https://microlink.io/docs/api/api-basics/authentication) your requests.

### ORIGINS

Type: `string`|`string[]`

The list of allowed domains authorized to consume your Microlink API credentials.

Note domains should be provided in the [URL.origin](https://developer.mozilla.org/en-US/docs/Web/API/URL/origin) format (e.g., `'https://example.com'`).

### API_ENDPOINT

Type: `string`</br>
Default: `https://pro.microlink.io`

The Microlink API endpoint used for sending the requests.

## License

**edge-proxy** © [Microlink](https://microlink.io), released under the [MIT](https://github.com/microlinkhq/proxy/blob/master/LICENSE.md) License.<br>
Authored and maintained by [Kiko Beats](https://kikobeats.com) with help from [contributors](https://github.com/microlinkhq/proxy/contributors).

> [microlink.io](https://microlink.io) · GitHub [microlinkhq](https://github.com/microlinkhq) · Twitter [@microlinkhq](https://twitter.com/microlinkhq)
