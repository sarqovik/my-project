import 'dotenv/config';
import { ethers, run, network } from 'hardhat';

/**
 * Usage:
 *   npm run deploy:base
 *   npm run deploy:base-sepolia
 * or:
 *   node --env-file=.env scripts/deploy.js base
 */
async function main() {
  const targetNetwork = process.argv[2] || network.name;
  console.log(`Deploying to: ${targetNetwork}`);

  const Contract = await ethers.getContractFactory('SimpleStorage');
  const contract = await Contract.deploy();
  await contract.waitForDeployment();

  const addr = await contract.getAddress();
  console.log('Deployed SimpleStorage at:', addr);

  // Optional: verify automatically if API key and public RPC
  if (process.env.BASESCAN_API_KEY) {
    console.log('Waiting for 5 confirmations before verify...');
    await contract.deploymentTransaction().wait(5);
    try {
      await run('verify:verify', {
        address: addr,
        constructorArguments: []
      });
      console.log('Verified on Basescan ✔');
    } catch (err) {
      console.warn('Verification skipped/failed:', err?.message || err);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
