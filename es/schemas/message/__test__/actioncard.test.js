'use strict';

var _ActionCard = require('../ActionCard');

var _ActionCard2 = _interopRequireDefault(_ActionCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Schemas/ActionCard', function () {

    test('title, text, 1 btn', function () {
        expect(new _ActionCard2.default({ title: 'title', text: 'text', btns: [{ title: 'btn1', actionUrl: 'http://x.y.z' }] }).toJS()).toEqual({ "actionCard": { "btnOrientation": "0", "btns": [{ "actionURL": "http://x.y.z", "title": "btn1" }], "hideAvatar": "0", "text": "text", "title": "title" }, "msgtype": "actionCard" });
    });

    test('title, text, 2 btns', function () {

        expect(new _ActionCard2.default({ title: 'title', text: 'text', btns: [{ title: 'btn1', actionUrl: 'http://x.y.z' }, { title: 'btn2', actionUrl: 'http://x.y.x/btn2' }] }).toJS()).toEqual({ "actionCard": { "btnOrientation": "0", "btns": [{ "actionURL": "http://x.y.z", "title": "btn1" }, { "actionURL": "http://x.y.x/btn2", "title": "btn2" }], "hideAvatar": "0", "text": "text", "title": "title" }, "msgtype": "actionCard" });
    });
});