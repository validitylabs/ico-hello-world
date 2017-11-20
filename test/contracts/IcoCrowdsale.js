/**
 * IcoCrowdsale test
 *
 * @author Patrice Juergens <pj@validitylabs.org>
 */

import {waitNDays, getEvents, BigNumber, cnf, increaseTimeTo, duration} from './helpers/tools'; // eslint-disable-line

const IcoCrowdsale  = artifacts.require('./IcoCrowdsale');
const IcoToken      = artifacts.require('./IcoToken');
const assertJump    = require('../../node_modules/zeppelin-solidity/test/helpers/assertJump');

const should = require('chai') // eslint-disable-line
    .use(require('chai-as-promised'))
    .use(require('chai-bignumber')(BigNumber))
    .should();

/**
 * IcoToken contract
 */
contract('IcoCrowdsale', (accounts) => {
    const owner     = accounts[0];
    const wallet    = accounts[9];

    // Provide icoTokenInstance and icoCrowdsaleInstance for every test case
    let icoCrowdsaleInstance;
    let icoTokenInstance; // eslint-disable-line

    beforeEach(async () => {
        icoCrowdsaleInstance    = await IcoCrowdsale.deployed();
        const icoTokenAddress   = await icoCrowdsaleInstance.token();
        icoTokenInstance        = await IcoToken.at(icoTokenAddress);
    });

    /**
     * [ Period 1 ]
     */

    it('should call the Hello event properly', async () => {
        console.log('[ Running test section 1 ]'.yellow);

        const tx        = await icoCrowdsaleInstance.helloWorld({from: owner, gas: 1000000});
        const events    = getEvents(tx, 'Hello');

        assert.equal(events[0].owner, owner, 'Owner does not match');
    });

    it('should assert a bignumber fake value properly', async () => {
        const fakeValue = new BigNumber(3e15);

        fakeValue.should.be.bignumber.equal(cnf.rate);
    });

    it('should fail, because we try to call helloPrivate with a non owner account', async () => {
        try {
            await icoCrowdsaleInstance.helloPrivate({from: wallet, gas: 1000000});

            assert.fail('should have thrown before');
        } catch (e) {
            assertJump(e);
        }
    });

    /**
     * [ Period 2 ]
     */
    it('should turn the time 100 days forward', async () => {
        console.log('[ Period 2 ]'.yellow);
        await waitNDays(100);
    });
});
