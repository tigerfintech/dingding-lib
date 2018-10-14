
import FeedCard from '../FeedCard';

describe('Schemas/FeedCard', () => {
    
    test('1 link', () => {
        expect(new FeedCard({
                items: [{ title: 'title', messageUrl: 'x.y.z', picUrl: 'a.b.c' }]
        }).toJS()).toEqual(
            {"feedCard": {"links": [{"messageURL": "x.y.z", "picURL": "a.b.c", "title": "title"}]}, "msgtype": "feedCard"}
        );
    });


    test('2 links', () => {
        expect(new FeedCard({
                items: [
                    { title: 'title', messageUrl: 'x.y.z', picUrl: 'a.b.c' },
                    { title: 'title2', messageUrl: 'x.y.z2', picUrl: 'a.b.c2' }
                ]
        }).toJS()).toEqual(
            {"feedCard": {"links": [{"messageURL": "x.y.z", "picURL": "a.b.c", "title": "title"}, {"messageURL": "x.y.z2", "picURL": "a.b.c2", "title": "title2"}]}, "msgtype": "feedCard"}
        );
    });

})

