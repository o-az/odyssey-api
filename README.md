<h1 align="center" style="font-size: 2.75rem; font-weight: 900; color: white;">
  <a href="https://github.com/ithacaxyz/odyssey">Odyssey Testnet</a>
  <br />
  OpenAPI Reference & Docs
</h1>

> **Odyssey** is a testnet open-source Layer 2 from the future, co-designed with the developer tools stack ([Learn more](https://ithaca.xyz/updates/odyssey)).

## Links:
  - [API Reference](https://odyssey.evm.workers.dev)
  - [Example Request](https://odyssey.evm.workers.dev/#tag/default/GET/transactions)
  - [Explorer](https://explorer.ithaca.xyz)
  
## Contributing

#### Install dependencies

```shell
# install / update bun to latest
bun upgrade || npm install --global bun@latest

# install dependencies
bun install

# run dev
bun dev
```

#### Deploy

```shell
# Authenticate with wrangler
bun x wrangler@latest login

# Deploy
bun x wrangler@latest deploy --config='wrangler.json' --keep-vars
```

> [!NOTE]
>
> **Thank you**
> 
> [Scalar](https://github.com/scalar/scalar) for the beautiful API documentation platform
>
> [Blockscout](https://blockscout.com) for the best open source EVM block explorer