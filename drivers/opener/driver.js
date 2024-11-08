"use strict";

const NukiDriver = require('../../lib/NukiDriver');


class OpenerDriver extends NukiDriver {

  get nukiDeviceType() {
    return [2];
  }

  onInit() {

  }

}

module.exports = OpenerDriver;
