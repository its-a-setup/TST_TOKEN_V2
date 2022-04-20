# Simple React Dapp

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

# Dependencies
Navigate to your project directory and run the following commands 1 by 1:
```bash
 npm init --yes
```
```bash
 npm install --save-dev hardhat
```
```bash
 npm install dotenv --save
```
```bash
 npx hardhat
```
>Create a new empty hardhat.config.js
```bash
 npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai
```
```bash
 cd frontend
```
```bash
 npm install
```

# QuickStart
1) Navigate to project's directory and run this command in CLI:
```bash
 npx hardhat compile
```
2) Deploy your contract to rinkeby network:
```bash
 npx hardhat --network rinkeby run scripts/deploy.js
```
3) Navigate to frontend:
```bash
 cd frontend
```
4) Run the following command to start your webapp:
```bash
 npm run start
```
