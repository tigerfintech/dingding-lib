'use strict';

var _Link = require('../Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Schemas/Link', function () {

    test('title, text, messageUrl', function () {
        expect(new _Link2.default({ title: 'title', text: 'text', messageUrl: 'http://x.y.z' }).toJS()).toEqual({ "link": { "messageUrl": "http://x.y.z", "picUrl": "", "text": "text", "title": "title" }, "msgtype": "link" });
    });

    test('picUrl', function () {
        expect(new _Link2.default({ title: 'title', text: 'text', messageUrl: 'http://x.y.z', picUrl: 'http://a.b.c' }).toJS()).toEqual({ "link": { "messageUrl": "http://x.y.z", "picUrl": "http://a.b.c", "text": "text", "title": "title" }, "msgtype": "link" });
    });
});