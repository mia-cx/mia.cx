[Getting Started](https://shopify.dev/docs/apps/auth/oauth/getting-started)

Middleware:

- Verify requests (`*`)
  - GET with at least the following query params:
    - `shop`
    - `timestamp`
    - `hmac`
  - Remove the original `hmac` param
  - Process the remaining parameters (in alphabetical order) with an HMAC-SHA256 hash function with the App's Client Secret
  - match against original hmac
    - If match, return 200 OK with result
    - If no match, return 401 Unauthorized with explanation

Endpoints:

- Authorization (`/auth`):
  - If not embedded, `3xx` to the grant screen
  - Embedded Apps cannot redirect normally - [Check for, and escape an iframe](https://shopify.dev/docs/apps/auth/oauth/getting-started#check-for-and-escape-the-iframe-embedded-apps-only) (`embedded=1` param) - [Shopify App Bridge redirect action](https://shopify.dev/docs/apps/tools/app-bridge/actions/navigation/redirect-navigate) - Redirect 3xx to the grant screen
  - [Grant Redirect](https://shopify.dev/docs/apps/auth/oauth/getting-started#redirect-using-a-3xx-redirect) ([using `@shopify/shopify-api`](https://github.com/Shopify/shopify-api-js/blob/main/packages/shopify-api/docs/guides/oauth.md)):
    - Construct a URL ([using `@shopify/shopify-api`](https://github.com/Shopify/shopify-api-js/blob/main/packages/shopify-api/docs/reference/auth/begin.md))
      - `https://{shop}.myshopify.com/admin/oauth/authorize?client_id={client_id}&scope={scopes}&redirect_uri={redirect_uri}&state={nonce}&grant_options[]={access_mode}`
      -
    - using `@shopify/shopify-api`
