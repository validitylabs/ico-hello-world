/**
 * IcoToken test
 *
 * @author Patrice Juergens <pj@validitylabs.org>
 */

const IcoToken = artifacts.require('./IcoToken');

import {waitNDays, getEvents, BigNumber} from './helpers/tools'; // eslint-disable-line
const assertJump = require('../../node_modules/zeppelin-solidity/test/helpers/assertJump'); // eslint-disable-line

const should = require('chai') // eslint-disable-line
    .use(require('chai-as-promised'))
    .use(require('chai-bignumber')(BigNumber))
    .should();

/**
 * IcoToken contract
 */
contract('IcoToken', (accounts) => {
    const owner = accounts[0]; // eslint-disable-line

    // Provide icoTokenInstance for every test case
    let icoTokenInstance;
    beforeEach(async () => {
        icoTokenInstance = await IcoToken.deployed();
    });

    it('should instantiate the ICO token correctly', async () => {
        const name      = await icoTokenInstance.name();
        const symbol    = await icoTokenInstance.symbol();
        const decimals  = await icoTokenInstance.decimals();

        assert.equal(name, 'IcoToken', 'Name does not match');
        assert.equal(symbol, 'TKN', 'Symbol does not match');
        assert.equal(decimals, 18, 'Decimals does not match');
    });
});
