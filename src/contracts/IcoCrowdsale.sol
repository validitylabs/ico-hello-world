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

    event Hello(address owner);

    /**
     * @dev Constructor of IcoCrowdsale
     * @param _startTime uint256 Start time for the crowdsale
     * @param _endTime uint256 End time for the crowdsale
     * @param _rate uint256 Rate for the crowdsale
     * @param _wallet uint256 Wallet address for the beneficiary
     */
    function IcoCrowdsale(
        uint256 _startTime,
        uint256 _endTime,
        uint256 _rate,
        address _wallet
    )
        public
        Crowdsale(_startTime, _endTime, _rate, _wallet)
    {
    }

    /**
     * @dev Triggers a hello world event for owner account only
     */
    function helloPrivate() public onlyOwner {
        Hello(msg.sender);
    }

    /**
     * @dev Triggers a hello world event
     */
    function helloWorld() public {
        Hello(msg.sender);
    }

    /**
     * @dev Create new instance of ico token contract
     */
    function createTokenContract() internal returns (MintableToken) {
        return new IcoToken();
    }
}
