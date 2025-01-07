"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.command_version = command_version;
var _read = require("../../utils/read.js");
var _banner = require("../../utils/banner.js");
var _exec = require("../../utils/exec.js");
async function command_version() {
  console.log("");
  (0, _banner.banner)("APP GENERATOR");
  console.log(`
    APP GENERATOR CLI: ${(0, _read.readJSONInternal)('package.json').version}
    Node: ${process.version}
    `);
  (0, _exec.executeCommand)("ng version");
}
//# sourceMappingURL=index.js.map