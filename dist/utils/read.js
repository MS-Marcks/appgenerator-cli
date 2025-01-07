"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readJSONInternal = exports.readJSON = void 0;
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _url = _interopRequireDefault(require("url"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const baseDir = _path.default.resolve(".");
const rootDirectory = _path.default.join(_path.default.dirname(_url.default.fileURLToPath(import.meta.url)), "..", "..");
const readJSON = (filePath, root = null) => {
  try {
    const data = _fs.default.readFileSync(_path.default.join(root === null ? baseDir : root, filePath), 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
};
exports.readJSON = readJSON;
const readJSONInternal = filePath => {
  try {
    const data = _fs.default.readFileSync(_path.default.join(rootDirectory, filePath), 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
};

/*export const readFile = (filePath, root = null) => {
    try {
        const data = fs.readFileSync(path.join((root === null) ? baseDir : root, filePath), 'utf-8');
        return data;
    } catch (error) {
        return null;
    }
}*/

/*export const readFileModule = (filePath) => {
    try {
        const data = fs.readFileSync(path.join(rootDirectory, filePath), 'utf-8');
        return data;
    } catch (error) {
        return null;
    }
}*/
exports.readJSONInternal = readJSONInternal;
//# sourceMappingURL=read.js.map