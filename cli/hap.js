#!/usr/bin/env node

// homebridge-hue/cli/hap.js
// Copyright © 2019 Erik Baauw. All rights reserved.
//
// Homebridge plugin for Philips Hue and/or deCONZ.

'use strict'

const homebridgeLib = require('homebridge-lib')

new homebridgeLib.HapCommand().main()
