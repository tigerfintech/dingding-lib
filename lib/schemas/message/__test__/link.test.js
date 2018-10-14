
import Link from '../Link';

describe('Schemas/Link', () => {
    
    test('title, text, messageUrl', () => {
        expect(new Link({ title: 'title', text: 'text', messageUrl: 'http://x.y.z' }).toJS()).toEqual(
            {"link": {"messageUrl": "http://x.y.z", "picUrl": "", "text": "text", "title": "title"}, "msgtype": "link"}
        );
    });


    test('picUrl', () => {
        expect(new Link({ title: 'title', text: 'text', messageUrl: 'http://x.y.z', picUrl: 'http://a.b.c' }).toJS()).toEqual(
            {"link": {"messageUrl": "http://x.y.z", "picUrl": "http://a.b.c", "text": "text", "title": "title"}, "msgtype": "link"}
        );
    });

})

