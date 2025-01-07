"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.banner = void 0;
require("./colors.js");
var _figlet = _interopRequireDefault(require("figlet"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const banner = msn => {
  console.log();
  console.log(blue(_figlet.default.textSync(msn, {
    font: 'ANSI Shadow',
    horizontalLayout: 'default',
    verticalLayout: 'default'
  })));
};
exports.banner = banner;
//# sourceMappingURL=banner.js.map