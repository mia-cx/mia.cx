# shopify-api

Framework agnostic Shopify API wrappers, `create-*` scripts, util libraries, and examples.

## Why?

I (@mia-riezebos) have been using Shopify for client work for a while now, but I'm continuously disappointed by the quality of their first-party libraries and tools. I figured that if I was running into these issues, others probably were too. Some friends and I decided that it would be a good idea to create a set of tools that would make working with Shopify easier.

## Getting Started

### Installation

To get started developing a Shopify App, we provide a `create-` script that will get you up and running without much effort.

```bash
# Using pnpm
pnpm create @mia-cx/shopify-app

# Using yarn
yarn create @mia-cx/shopify-app

# Using npm
npm create @mia-cx/shopify-app
```

We also offer `create-` scripts for custom Storefronts:

```bash
# Using pnpm
pnpm create @mia-cx/shopify-storefront
```

If you already have an App or Storefront but want to use our libraries, you simply add these to your project:

```bash
pnpm i @mia-cx/shopify-storefront-api @mia-cx/shopify-admin-api @mia-cx/shopify-auth
```

## Contributors
