/**
 * Migration script for the ICO
 *
 * @author Patrice Juergens <pj@validitylabs.org>
 */

const cnf           = require('../../ico.cnf.json');
const IcoToken      = artifacts.require('./IcoToken.sol');
const IcoCrowdsale  = artifacts.require('./IcoCrowdsale.sol');

module.exports = function (deployer, network, accounts) { // eslint-disable-line
    const wallet = accounts[9];

    deployer.deploy(IcoToken);
    deployer.deploy(IcoCrowdsale, cnf.startTime, cnf.endTime, cnf.rate, wallet);
};
