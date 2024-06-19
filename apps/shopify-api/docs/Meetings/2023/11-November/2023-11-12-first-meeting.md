# First Meeting!

## Branches

`main`:

production, we don't touch this unless a milestone is fully finished and ready to be shipped to prod.

`nightly`:

finished features that are tested and semi-stable, but not enough for a new breaking version.
This the only branch that can PR into main.

`feat-*`:

branches dedicated to specific features, good for when more than one person is working on that feature. Otherwise use person-specific branches.

person-specific branches:

naming doesn't really matter, as long as they are prefixed with your personal prefix (i.e. `msrr-`)

## Versioning

**semver** (semantic versions):

```
1        .        2        .        3                -iteration
|                 |                 |                |
major version     |                 patch (bugfix)   |
(breaking changes |                 typos, bugs,     |
are always major) |                 small things     |
                  feature version                    (alphabetical)
                  (new features)
```

\* if a bugfix passes all tests, but introduces some other unwanted behaviour, we push a new `-iteration` that addresses that new bug AND adds new tests for that specific edge case, so we don't run into it again.

### Monorepo

We're working in a monorepo so we have multiple packages and apps that are all following their own respective semver, so with git tags we specify these differences with `package/1.2.3-iteration`.

## New Line Character

It's best to always use `LF` newlines, even when on Windows, so the pre-commit hooks don't get messed up. You can set your git up to do this by running the following command:

```bash
git config --global core.autocrlf input
```

## Milestones

[Milestones on GitHub](https://github.com/mia-cx/shopify-api/milestones)

- api wrappers
  - admin api (`REST` && `GraphQL`)
  - storefront (`GraphQL`)
  - ... api
- examples / demos
  - shopify app (hono)
    ↕
  - storefront (sveltekit)
- utils
  - shopify-auth
  - request-verification
- `create-` scripts
  - shopify-app
  - shopify-storefront
  - ???

## Next Meeting

Add Availability!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
