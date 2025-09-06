# Zimmer Icons

Icon components packaged for reuse, plus a demo site.

## Scripts

- `dev`: Run the demo site locally (Vite dev server)
- `build`: Build the library for publishing (ESM + CJS + d.ts)
- `build:site`: Build the static demo site
- `preview` / `preview:site`: Preview the built demo site

## Consuming the package

Install in your app, then:

```tsx
import { Icon, type IconName } from "zimmer-icons";

export function Example() {
  const name: IconName = "rocket";
  return <Icon name={name} size={24} className="text-blue-600" />;
}
```

Peer dependencies: React 18/19.

## Publishing

1. Ensure `package.json` has `private: false`.
2. Run `npm run build`.
3. Publish with `npm publish` (or your registry of choice).
