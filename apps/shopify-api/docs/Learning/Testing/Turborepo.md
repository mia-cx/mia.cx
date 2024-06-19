## Bundling

## Versioning, Publishing

## Testing

[docs](https://turbo.build/repo/docs/handbook/testing)

---

```json
// apps/web/package.json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest"
  }
}

// turbo.json
{
  "pipeline": {
    "test": {},
    "test:watch": {
      "cache": false
    }
  }
}

// package.json
{
  "scripts": {
    "test": "turbo run test",
    "test:watch": "turbo run test:watch"
  }
}
```

run `turbo test` to test the entire monorepo.

---

NOTE: There's also [[Vitest Workspaces]].
