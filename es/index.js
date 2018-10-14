'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.messsage = exports.api = undefined;

var _message = require('./schemas/message/');

var messsage = _interopRequireWildcard(_message);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.api = _api2.default;
exports.messsage = messsage;