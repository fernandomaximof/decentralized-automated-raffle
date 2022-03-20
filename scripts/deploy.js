const { ethers } = require('hardhat');
//https://docs.chain.link/docs/vrf-contracts/
const RINKEBY_VRF_COORDINATOR = "0x6168499c0cFfCaCD319c818142124B7A15E857ab";
const RINKEBY_LINKTOKEN = "0x01BE23585060835E02B77ef475b0Cc51aA1e0709";
const RINKEBY_KEYHASH = "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc";


async function main() {
  try {
    const [ deployer ] = await ethers.getSigners();
    
    const Raffle = await ethers.getContractFactory("Raffle");
    const raffle = await Raffle.deploy(RINKEBY_VRF_COORDINATOR, RINKEBY_LINKTOKEN, RINKEBY_KEYHASH);

    console.log("Raffle deployed to:", raffle.address);

  } catch(e) {
    console.log(e)
  }

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });