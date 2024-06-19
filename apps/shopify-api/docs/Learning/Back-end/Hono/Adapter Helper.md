[Documentation](https://hono.dev/helpers/adapter)

---

[Environment variables without middleware:](https://hono.dev/helpers/adapter#env)

```ts
import { env } from "hono/adapter";

app.get("/env", (c) => {
  const { NAME } = env<{ NAME: string }>(c);
  return c.text(NAME);
});
```

---

[Identify the runtime:](https://hono.dev/helpers/adapter#getruntimekey)

```ts
app.get('/', (c) => {
  if (getRuntimeKey() === 'workerd') {
    return c.text('You are on Cloudflare')
  } else if (getRuntimeKey() === 'bun') {
    return c.text('You are on Bun')
  }
  ...
})
```

Suppported Runtimes:

- `node`
- `deno`
- `bun`
- `workerd` - Cloudflare Workers
- `fastly`
- `edge-light` - Vercel Edge Functions
- `lagon`
- `other`
