
import Text from '../Text';

describe('Schemas/Text', () => {

    test('isAtAll = false', () => {
        expect(new Text({ text: 'this is content' }).toJS()).toEqual(
            {"msgtype":"text","text":{"content":"this is content"},"at":{"atMobiles":[],"isAtAll":false}}
        );
    });


    test('isAtAll = true', () => {
        expect(new Text({ text: 'this is content', isAtAll: true }).toJS()).toEqual(
            {"msgtype":"text","text":{"content":"this is content"},"at":{"atMobiles":[],"isAtAll":true}}
        );
    });


    test('atMobiles', () => {
        expect(new Text({ text: 'this is content', atMobiles: ['19000001111'] }).toJS()).toEqual(
            {"msgtype":"text","text":{"content":"this is content"},"at":{"atMobiles":['19000001111'],"isAtAll":false}}
        );
    });

})

