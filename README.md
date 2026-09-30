# jorius-dot-me

My personal website from 2021, before the current one at [jorius.github.io](https://jorius.github.io/). A Create React App with Redux, Material UI and Sass that lists my repositories straight from the GitHub API.

**Live:** https://jorius.github.io/jorius-dot-me/ (GitHub Pages). It was originally served from my own server at jorius.me, which no longer exists.

Republished in 2026 with one change: the router takes its base path from `PUBLIC_URL`, so it works under the `/jorius-dot-me/` sub-path.

```bash
yarn install
yarn start   # http://localhost:3000
yarn build   # static build to build/
```
