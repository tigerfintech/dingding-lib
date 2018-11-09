
import api from '../api';
import { Text, Markdown, Link, FeedCard, ActionCard } from '../schemas/message/';

const testToken = '733975e2beb5fbb77704fc0ca80d65381870fe4ee69274c7a489a14bbdca45fe';

describe('lib/api', () => {

    test('robot msg - error', (done) => {
        api.sendRobotMsg(
            'xx',
            new Text({ text: 'xxx' })
        ).then(res => {
            expect(false).toEqual(true);
            done();
        }).catch(e => {
            expect(e.message).toMatch(/300001/);
            done();
        })
    });

    xtest('robot msg - success', (done) => {
        api.sendRobotMsg(
            testToken,
            new Text({ text: 'xxx' }),

            // new Text({ text: 'xxx @1861254xxxx', atMobiles: ['1861254xxxx'] }),

            // new Text({ text: 'xxx', isAtAll: true }),

            // new Markdown({ title: 'markdown', text: '# markdown text title' }),

            // new Markdown({ title: 'markdown', text: '# mardkown text title', isAtAll: true }),

            // new Link({ title: 'link', text: 'link', messageUrl: 'http://z.cn', picUrl: 'https://www.itiger.com/favicon.ico' }),

            // new ActionCard({ title: 'action', text: 'action', btns: [{ title: 'read more', actionUrl: 'http://z.cn' }] }),

            // new ActionCard({ title: 'action', text: 'action', btns: [{ title: 'accept', actionUrl: 'http://z.cn' }, { title: 'reject', actionUrl: 'http://z.cn' }] }),

            // new FeedCard({ items: [{ title: 'feed1', messageUrl: 'http://z.cn', picUrl: 'https://www.itiger.com/favicon.ico' }] }),

            // new FeedCard({ items: [{ title: 'feed1', messageUrl: 'http://z.cn', picUrl: 'https://www.itiger.com/favicon.ico' }, { title: 'feed2', messageUrl: 'http://z.cn', picUrl: 'https://www.itiger.com/favicon.ico' }] })


        ).then(res => {
            expect(true).toEqual(true);
            done();
        }).catch(e => {
            expect(true).toEqual(false);
            done();
        })
    });


})