// SPDX-License-Identifier: MIT
// HelloWorld.sol
pragma solidity ^0.8.0;

contract HelloWorld {
    string public message = "Welcome To Unfold 2023";

    function getMessage() public view returns (string memory) {
        return message;
    }
}
