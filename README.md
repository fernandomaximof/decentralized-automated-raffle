# Tasks

*Contract Deployment:
```npx hardhat run --network rinkeby scripts/deploy.js```

*Contract LINK Funding:
```npx hardhat fund-link --contract {contract address} --network rinkeby```

*List of Accounts:
```npx hardhat accounts --network rinkeby```

*Account Balance:
```npx hardhat balance --account 0xEC96e8a98A72e94B8067B3A756578E1a00068984 --network rinkeby```

# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
