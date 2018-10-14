'use strict';

var _Markdown = require('../Markdown');

var _Markdown2 = _interopRequireDefault(_Markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Schemas/Markdown', function () {

    test('title, text', function () {
        expect(new _Markdown2.default({ title: 'title', text: 'text' }).toJS()).toEqual({ "at": { "atMobiles": [], "isAtAll": false }, "msgtype": "markdown", "markdown": { "text": "text", "title": "title" } });
    });

    test('title, text, isAtAll = true', function () {
        expect(new _Markdown2.default({ title: 'title', text: 'text', isAtAll: true }).toJS()).toEqual({ "at": { "atMobiles": [], "isAtAll": true }, "msgtype": "markdown", "markdown": { "text": "text", "title": "title" } });
    });

    test('title, text, atMobiles', function () {
        expect(new _Markdown2.default({ title: 'title', text: 'text', atMobiles: ['19000001111'] }).toJS()).toEqual({ "at": { "atMobiles": ['19000001111'], "isAtAll": false }, "msgtype": "markdown", "markdown": { "text": "text", "title": "title" } });
    });
});