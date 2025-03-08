# OpenAPI Reference for Odyssey Testnet

## Get started

Install dependencies

```shell
# install / update bun to latest
bun upgrade || npm install --global bun@latest

# install dependencies
bun install

# run dev
bun dev
```

## Deploy

```shell
# Authenticate with wrangler
bun x wrangler@latest login

# Deploy
bun x wrangler@latest deploy --config='wrangler.json' --keep-vars
```
