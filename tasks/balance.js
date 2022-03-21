const { ethers } = require("ethers")

const network = process.env.NETWORK
const provider = ethers.getDefaultProvider(network)

task("balance", "PRINTS AN ACCOUNT'S BALANCE")
  .addParam("account", "THE ACCOUNT'S ADDRESS")
  .setAction(async (taskArgs) => {
    const account = ethers.utils.getAddress(taskArgs.account)
    const balance = await provider.getBalance(account)

    console.log(ethers.utils.formatEther(balance), "ETH")
  })

module.exports = {}