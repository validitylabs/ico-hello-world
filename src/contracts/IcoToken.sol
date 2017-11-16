/**
 * @title IcoToken
 *
 * @version 1.0
 * @author Patrice Juergens <pj@validitylabs.org>
 */
pragma solidity ^0.4.18;

import "../../node_modules/zeppelin-solidity/contracts/token/MintableToken.sol";

contract IcoToken is MintableToken {
    string public constant name = "IcoToken";
    string public constant symbol = "TKN";
    uint8 public constant decimals = 18;
}
