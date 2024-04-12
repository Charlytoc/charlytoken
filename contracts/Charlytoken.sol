// SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

pragma solidity >=0.4.22 <0.9.0;

contract CharlyToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("CharlyToken", "CHT") {
        _mint(msg.sender, initialSupply);
    }
}