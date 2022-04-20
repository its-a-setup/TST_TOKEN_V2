# Simple React Dapp

This directory has a sample Dapp to interact with TST Token contract (ERC-20 Token), built using
React.

## Running the Dapp

This project uses [`create-react-app`](https://create-react-app.dev/), so most
configuration files are handled by it.

## Architecture of the Dapp

This Dapp consists of multiple React Components, which you can find in
`src/components`.

Most of them are presentational components, have no logic, and just render HTML.

The core functionality is implemented in `src/components/Dapp.js`, which has
examples of how to connect to the user's wallet, initialize your Ethereum
connection and contracts, read from the contract's state, and send transactions.

# QuickStart
1) Navigate to project's directory and run this command in CLI:
```bash
 npx hardhat compile
```
2)Deploy your contract to rinkeby network:
```bash
 npx hardhat --network rinkeby run scripts/deploy.js
```
3)Navigate to frontend:
```bash
 cd frontend
```
4) Run the following command to start your webapp:
```bash
 npm run start
```
