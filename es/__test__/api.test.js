'use strict';

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

var _message = require('../schemas/message/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testToken = '733975e2beb5fbb77704fc0ca80d65381870fe4ee69274c7a489a14bbdca45fe';

describe('lib/api', function () {

    test('robot msg - error', function (done) {
        _api2.default.sendRobotMsg('xx', new _message.Text({ text: 'xxx' })).then(function (res) {
            expect(false).toEqual(true);
            done();
        }).catch(function (e) {
            expect(e.message).toMatch(/300001/);
            done();
        });
    });

    xtest('robot msg - success', function (done) {
        _api2.default.sendRobotMsg(testToken, new _message.Text({ text: 'xxx' })

        // new Text({ text: 'xxx @1861254xxxx', atMobiles: ['1861254xxxx'] }),

        // new Text({ text: 'xxx', isAtAll: true }),

        // new Markdown({ title: 'markdown', text: '# markdown text title' }),

        // new Markdown({ title: 'markdown', text: '# mardkown text title', isAtAll: true }),

        // new Link({ title: 'link', text: 'link', messageUrl: 'http://z.cn', picUrl: 'https://www.itiger.com/favicon.ico' }),

        // new ActionCard({ title: 'action', text: 'action', btns: [{ title: 'read more', actionUrl: 'http://z.cn' }] }),

        // new ActionCard({ title: 'action', text: 'action', btns: [{ title: 'accept', actionUrl: 'http://z.cn' }, { title: 'reject', actionUrl: 'http://z.cn' }] }),

        // new FeedCard({ items: [{ title: 'feed1', messageUrl: 'http://z.cn', picUrl: 'https://www.itiger.com/favicon.ico' }] }),

        // new FeedCard({ items: [{ title: 'feed1', messageUrl: 'http://z.cn', picUrl: 'https://www.itiger.com/favicon.ico' }, { title: 'feed2', messageUrl: 'http://z.cn', picUrl: 'https://www.itiger.com/favicon.ico' }] })


        ).then(function (res) {
            expect(true).toEqual(true);
            done();
        }).catch(function (e) {
            expect(true).toEqual(false);
            done();
        });
    });
});