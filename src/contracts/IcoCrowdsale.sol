/**
 * @title IcoCrowdsale
 *
 * @version 1.0
 * @author Patrice Juergens <pj@validitylabs.org>
 */
pragma solidity ^0.4.18;

import "../../node_modules/zeppelin-solidity/contracts/crowdsale/Crowdsale.sol";
import "../../node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol";
import "./IcoToken.sol";

contract IcoCrowdsale is Crowdsale, Ownable {
    uint256 startTime;
    uint256 endTime;
    uint256 rate;
    address wallet;

    event Hello(address owner, uint256 startTime, uint256 endTime, uint256 rate, address wallet);

    function IcoCrowdsale(
        uint256 _startTime,
        uint256 _endTime,
        uint256 _rate,
        address _wallet
    )
        public
        Crowdsale(_startTime, _endTime, _rate, _wallet)
    {
        startTime = _startTime;
        endTime = _endTime;
        rate = _rate;
        wallet = _wallet;

    }

    function helloPrivate() public onlyOwner {
        Hello(msg.sender, startTime, endTime, rate, wallet);
    }

    function helloWorld() public {
        Hello(msg.sender, startTime, endTime, rate, wallet);
    }

    /**
     * @dev Create new instance of ico token contract
     */
    function createTokenContract() internal returns (MintableToken) {
        return new IcoToken();
    }
}
