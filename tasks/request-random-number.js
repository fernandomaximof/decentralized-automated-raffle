// task("request-random-number", "REQUESTS A RANDOM NUMBER FOR A CHAINLINK VRF ENABLED SMART CONTRACT")
//   .addParam("contract", "THE ADDRESS OF THE API CONSUMER CONTRACT THAT YOU WANT TO CALL")
//   .setAction(async (taskArgs) => {
//     const contractAddr = taskArgs.contract
//     const networkId = network.name
//     console.log(
//       "REQUESTING A RANDOM NUMBER USING VRF CONSUMER CONTRACT ",
//       contractAddr,
//       " ON NETWORK ",
//       networkId
//     )
//     const Raffle = await ethers.getContractFactory("Raffle")

//     //Get signer information
//     const accounts = await hre.ethers.getSigners()
//     const signer = accounts[0]

//     //Create connection to VRF Contract and call the getRandomNumber function
//     const vrfConsumerContract = new ethers.Contract(
//       contractAddr,
//       Raffle.interface,
//       signer
//     )
//     const transaction = await vrfConsumerContract.closeRound()
//     console.log(
//       "CONTRACT ",
//       contractAddr,
//       " RANDOM NUMBER REQUEST SUCCESSFULLY CALLED. TRANSACTION HASH: ",
//       transaction.hash
//     )
//     console.log("RUN THE FOLLOWING TO READ THE RETURNED RANDOM NUMBER:")
//     console.log(
//       "npm hardhat read-random-number --contract " + contractAddr + " --network " + network.name
//     )
//   })

// module.exports = {}