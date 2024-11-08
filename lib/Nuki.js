'use strict';

const Homey = require('homey');
const crypto = require('crypto');
const querystring = require('node:querystring');

class Nuki extends Homey.SimpleClass {
    getTokenParams(token, forcePlainToken = false) {
        if (forcePlainToken) {
            return [
                ['token', this.token]
            ];
        } else {
            var ts = new Date().toISOString().substr(0, 19) + 'Z';
            var rnr = Math.floor(Math.random() * (65535));
            var hash = crypto.createHash('sha256').update(ts + ',' + rnr + ',' + token).digest('hex');

            return [
                ['ts', ts],
                ['rnr', rnr],
                ['hash', hash]
            ];
        }
    }
}

module.exports = Nuki;
