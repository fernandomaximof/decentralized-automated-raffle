
const Raffle = artifacts.require('Raffle')
const { LinkToken } = require('@chainlink/contracts/truffle/v0.4/LinkToken')

//https://docs.chain.link/docs/vrf-contracts/
const RINKEBY_LINKTOKEN = 0x01BE23585060835E02B77ef475b0Cc51aA1e0709;
const RINKEBY_VRF_COORDINATOR = 0x6168499c0cFfCaCD319c818142124B7A15E857ab;
const RINKEBY_KEYHASH = 0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc;



module.exports = async (deployer, network, [defaultAccount]) => {
  // hard coded for rinkeby
  LinkToken.setProvider(deployer.provider)
  Raffle.setProvider(deployer.provider)
  if (network.startsWith('rinkeby')) {
      await deployer.deploy(Raffle, RINKEBY_VRF_COORDINATOR, RINKEBY_LINKTOKEN, RINKEBY_KEYHASH)
      let raffle = await Raffle.deployed()
  } 
  else if (network.startsWith('mainnet')) {
      console.log("IF YOU'RE INTERESTED IN EARLY ACCESS TO CHAINLINK VRF ON MAINNET, PLEASE EMAIL VRF@CHAIN.LINK")
  } 
  else {
      console.log("RIGHT NOW ONLY RINKEBY WORKS! PLEASE CHANGE YOUR NETWORK TO RINKEBY")
      // await deployer.deploy(Raffle)
      // let raffle = await Raffle.deployed()
  }
}