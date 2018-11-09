'use strict';

var _FeedCard = require('../FeedCard');

var _FeedCard2 = _interopRequireDefault(_FeedCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Schemas/FeedCard', function () {

    test('1 link', function () {
        expect(new _FeedCard2.default({
            items: [{ title: 'title', messageUrl: 'x.y.z', picUrl: 'a.b.c' }]
        }).toJS()).toEqual({ "feedCard": { "links": [{ "messageURL": "x.y.z", "picURL": "a.b.c", "title": "title" }] }, "msgtype": "feedCard" });
    });

    test('2 links', function () {
        expect(new _FeedCard2.default({
            items: [{ title: 'title', messageUrl: 'x.y.z', picUrl: 'a.b.c' }, { title: 'title2', messageUrl: 'x.y.z2', picUrl: 'a.b.c2' }]
        }).toJS()).toEqual({ "feedCard": { "links": [{ "messageURL": "x.y.z", "picURL": "a.b.c", "title": "title" }, { "messageURL": "x.y.z2", "picURL": "a.b.c2", "title": "title2" }] }, "msgtype": "feedCard" });
    });
});