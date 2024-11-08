'use strict';


module.exports = {
  async nukiCallbacks({homey, body}) {
    try {
      const NukiBridge = require('./lib/NukiBridge');
      NukiBridge.onCallback(body);
      return { success: true };
    }
    catch (error) {
      console.log(error);
      return false;
    }
  }
}
