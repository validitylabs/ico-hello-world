/**
 * Coverage configuration
 *
 * @author Patrice Juergens <pj@validitylabs.org>
 */

require('babel-register');
require('babel-polyfill');

module.exports = {
    copyNodeModules: true,
    sub: '/src',
    norpc: false
};
