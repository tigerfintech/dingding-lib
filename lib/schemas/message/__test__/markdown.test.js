
import Markdown from '../Markdown';

describe('Schemas/Markdown', () => {
    
    test('title, text', () => {
        expect(new Markdown({ title: 'title', text: 'text' }).toJS()).toEqual(
            {"at": {"atMobiles": [], "isAtAll": false}, "msgtype": "markdown", "markdown": {"text": "text", "title": "title"}}
        );
    });


    test('title, text, isAtAll = true', () => {
        expect(new Markdown({ title: 'title', text: 'text', isAtAll: true }).toJS()).toEqual(
            {"at": {"atMobiles": [], "isAtAll": true}, "msgtype": "markdown", "markdown": {"text": "text", "title": "title"}}
        );
    });


    test('title, text, atMobiles', () => {
        expect(new Markdown({ title: 'title', text: 'text', atMobiles: ['19000001111'] }).toJS()).toEqual(
            {"at": {"atMobiles": ['19000001111'], "isAtAll": false}, "msgtype": "markdown", "markdown": {"text": "text", "title": "title"}}
        );
    })
})

