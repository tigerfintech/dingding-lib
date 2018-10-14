'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _http = require('./http');

var _http2 = _interopRequireDefault(_http);

var _message = require('./schemas/message/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apis = {
    sendRobotMsg: function sendRobotMsg(accessToken, ins) {
        return _http2.default.post('/robot/send?access_token=' + accessToken, ins.toJS());
    }
};

exports.default = apis;