'use strict';

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Schemas/Text', function () {

    test('isAtAll = false', function () {
        expect(new _Text2.default({ text: 'this is content' }).toJS()).toEqual({ "msgtype": "text", "text": { "content": "this is content" }, "at": { "atMobiles": [], "isAtAll": false } });
    });

    test('isAtAll = true', function () {
        expect(new _Text2.default({ text: 'this is content', isAtAll: true }).toJS()).toEqual({ "msgtype": "text", "text": { "content": "this is content" }, "at": { "atMobiles": [], "isAtAll": true } });
    });

    test('atMobiles', function () {
        expect(new _Text2.default({ text: 'this is content', atMobiles: ['19000001111'] }).toJS()).toEqual({ "msgtype": "text", "text": { "content": "this is content" }, "at": { "atMobiles": ['19000001111'], "isAtAll": false } });
    });
});