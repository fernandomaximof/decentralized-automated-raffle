const { expect } = require("chai");
var web3 = require('web3');

describe("RAFFLE CONTRACT", function() {
    var raffle;
    var owner
    var addr1;
    var addr2;
    const raffleFee = web3.utils.toWei("10", "Gwei");
    const { RAFFLE_CONTRACT_ADDRESS } = process.env;

    before(async function() {
        // [owner, addr1, addr2] = await ethers.getSigners();
        // console.log(owner.address, addr1.address, addr2.address)

        raffle = await ethers.getContractAt("Raffle", "0x693417d0a102a333388034589de3828a66A3c776")//RAFFLE_CONTRACT_ADDRESS);
    });

    it("RETURN CONTRACT STATUS", async function() {
        status = await raffle.contractStatus()
        console.log('BALANCE:', BigInt(status[0]), 'NUMBER OF PLAYERS:', BigInt(status[1]))
    });

    it("ADDRESS 1 ENTER RAFFLE", async function() {
        await raffle.connect(addr1).enterRaffle({value: raffleFee});
    });

    it("RETURN CONTRACT STATUS", async function() {
        status = await raffle.contractStatus()
        console.log('BALANCE:', BigInt(status[0]), 'NUMBER OF PLAYERS:', BigInt(status[1]))
    });
    
    it("CHOOSE WINNER", async function() {
        await raffle.closeRound();
    });

    it("RETURN CONTRACT STATUS", async function() {
        status = await raffle.contractStatus()
        console.log('BALANCE:', BigInt(status[0]), 'NUMBER OF PLAYERS:', BigInt(status[1]))
    });
});