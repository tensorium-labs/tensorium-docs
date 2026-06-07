# Tensorium Docs

Official documentation site for the Tensorium Layer 1 network.

This repository contains the public operator and developer guides for running a TXM node, mining, wallet usage, and application integration over the Tensorium RPC surface.

## Who This Is For

- Node operators who need to run P2P and RPC services correctly
- GPU miners who want to solo mine or connect to the reference pool
- Wallet and app developers building on top of the TXM L1
- Users who need the canonical network parameters and onboarding guides

## Key Network Parameters

- Chain ID: `tensorium-mainnet-candidate-0`
- Ticker: `TXM`
- P2P port: `33333/tcp`
- RPC port: `33332/tcp` on localhost only
- Primary seed: `seed.tensoriumlabs.com:33333`
- Secondary seed: `seed2.tensoriumlabs.com:33333`
- Backup seed naming: expose the hostname, not the raw VPS IP
- Coinbase maturity: `100` blocks
- Transaction fees: currently no protocol-enforced minimum fee
- Official pool fee: `5%` / `500` bps
- Pool payout model: `gross reward - pool fee = net miner payout`
- Pool miner endpoint: `pooltxm.tensoriumlabs.com:3333`
- Pool website data scope: `pool ledger only` — direct/solo-mined blocks remain visible on-chain in the explorer, not in pool accounting

## Main Pages

- `index.html` — overview and quick start
- `mining.html` — solo and pool mining guide
- `node.html` — node setup and systemd examples
- `rpc.html` — HTTP RPC reference
- `wallet.html` — wallet usage
- `developer.html` — SDK and app integration guide
- `network.html` — network constants and ports

## Publishing Notes

The documentation is meant to make the critical TXM L1 surfaces easy to find:

- P2P bootstrap and peer connectivity
- Seed node and backup seed details
- RPC safety and public-RPC hardening expectations
- Transaction fee posture
- Pool fee disclosure
- Miner payout visibility

## License

Apache-2.0
