const { expect } = require("chai");
var web3 = require('web3');

describe("RAFFLE CONTRACT", function() {
    var raffle;
    var owner
    var addr1;
    var addr2;
    const raffleFee = web3.utils.toWei("10", "Gwei");

    const payment = '1000000000000000000'

    before(async function() {
        [owner, addr1, addr2] = await ethers.getSigners();

        const Raffle = await ethers.getContractFactory("Raffle");
        raffle = await Raffle.deploy();
        await raffle.deployed();

        try {
            const tokenAddress = await raffle._linkToken
            console.log("CHAINLINK TOKEN ADDRESS: ", tokenAddress)
            // const token = await LinkTokenInterface.at(tokenAddress)
            // console.log("FUNDING CONTRACT: ", bloodz.address)
            // const tx = await token.transfer(bloodz.address, payment)
            // callback(tx.tx)
        } 
        catch (err) {
            console.log(err)
            callback(err);
        }
    
    });

    it("RETURN CONTRACT STATUS", async function() {
        status = await raffle.contractStatus()
        console.log('BALANCE:', BigInt(status[0]), 'NUMBER OF PLAYERS:', BigInt(status[1]))
    });

    it("ADDRESS 1 ENTER RAFFLE", async function() {
        await raffle.connect(addr1).enterRaffle({value: raffleFee});
    });
    
    it("CHOOSE WINNER", async function() {
        await raffle.fulfillRandomness();
    });

    it("RETURN CONTRACT STATUS", async function() {
        status = await raffle.contractStatus()
        console.log('BALANCE:', BigInt(status[0]), 'NUMBER OF PLAYERS:', BigInt(status[1]))
    });
});