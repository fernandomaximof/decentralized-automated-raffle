// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Raffle {

    uint256 public s_entranceFee = 10 gwei;
    address public s_recentWinner;
    address payable[] public s_players;

    function enterRaffle() public payable {
        require(msg.value == s_entranceFee, "PLEASE SEND 10 GWEI");
        
        s_players.push(payable(msg.sender));

        //limit number of players?
    }

    function chooseWinner() public {
        uint256 randomWinner = 0;
        address payable winner = s_players[randomWinner];
        s_recentWinner = winner;
        (bool success,) = winner.call{value: address(this).balance}("");
        require(success, "TRANSFER TO WINNER FAILED");
        delete s_players;
    }

    function contractStatus() public view returns(uint256, uint256) {
        return (
            address(this).balance,
            s_players.length
        );
    }

}