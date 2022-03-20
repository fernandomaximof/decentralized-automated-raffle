// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/access/Ownable.sol';
import "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";
import '@chainlink/contracts/src/v0.8/VRFConsumerBase.sol';

contract Raffle is Ownable, VRFConsumerBase {
    
    uint256 public s_entranceFee = 10 gwei;
    address public s_recentWinner;
    address payable[] public s_players;
    enum State {
        Open, 
        Calculating
    }
    State public s_state;

    bytes32 internal keyHash;
    uint256 internal chainlinkFee;

    constructor(address _vrfCoordinator, address _linkToken, bytes32 _keyHash) 
    VRFConsumerBase(_vrfCoordinator, _linkToken) {
        keyHash = _keyHash;
        chainlinkFee = 0.25 * 10 ** 18;
    }

    function enterRaffle() public payable {
        require(msg.value == s_entranceFee, "PLEASE SEND 10 GWEI");
        require(s_state == State.Open, "RAFFLE IS CURRENTLY CLOSED");
        s_players.push(payable(msg.sender));
        //limit number of players?
    }

    function closeRound() public onlyOwner() {
        s_state = State.Calculating;
        require(LINK.balanceOf(address(this)) >= chainlinkFee, "NOT ENOUGH LINK");
        requestRandomness(keyHash, chainlinkFee);
    }

    function fulfillRandomness(bytes32, uint256 ramdomness) internal override onlyOwner() {
        uint256 randomWinner = ramdomness % s_players.length;
        address payable winner = s_players[randomWinner];
        s_recentWinner = winner;
        (bool success,) = winner.call{value: address(this).balance}("");
        require(success, "TRANSFER TO WINNER FAILED");
        delete s_players;
        s_state = State.Open;
    }

    function contractStatus() public view returns(uint256, uint256) {
        return (address(this).balance, s_players.length);
    }

}