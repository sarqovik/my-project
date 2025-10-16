# Base Hardhat Codespace Template

One-click GitHub Codespaces template to build and deploy smart contracts on **Base** (Mainnet & Sepolia).

## ✨ Features
- Preconfigured **Hardhat** + **Toolbox**
- Networks: **base** (8453) & **baseSepolia** (84532)
- `SimpleStorage.sol` contract + deploy script
- Basescan verification ready
- Devcontainer for Codespaces with Node 20 & Solidity extension

## 🚀 Quick Start (in Codespaces)
1. Open this repo in **GitHub Codespaces** → wait for packages to install.
2. Create `.env` from the example:
   ```bash
   cp .env.example .env
   # Fill PRIVATE_KEY, RPC URLs, BASESCAN_API_KEY (optional)
   ```
3. Compile:
   ```bash
   npm run compile
   ```
4. Deploy to Base Sepolia:
   ```bash
   npm run deploy:base-sepolia
   ```
   Or to Base Mainnet:
   ```bash
   npm run deploy:base
   ```

## 🔐 Environment
- **Never** commit your `.env`.
- Use a deployer wallet with **limited funds**.
- Prefer private RPC & API keys from a provider you trust.

## 🧪 Test (optional)
Add tests in `test/` and run:
```bash
npm test
```

## 📜 Verify on Basescan
- Set `BASESCAN_API_KEY` in `.env`.
- Deployment script will try to auto-verify after 5 confirmations.
- Or run manually:
  ```bash
  npx hardhat verify --network base <DEPLOYED_ADDRESS>
  ```

## 📁 Project Structure
```
contracts/
  SimpleStorage.sol
scripts/
  deploy.js
.devcontainer/
  devcontainer.json
hardhat.config.js
```

## 🆘 Common Issues
- **No accounts for network** → set `PRIVATE_KEY` in `.env`.
- **Rate limit or bad nonce** → switch to a reliable RPC, retry later.
- **Verification fails** → wait more blocks, ensure same compiler version (0.8.24).
