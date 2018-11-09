
import ActionCard from '../ActionCard';

describe('Schemas/ActionCard', () => {
    
    test('title, text, 1 btn', () => {
        expect(new ActionCard({ title: 'title', text: 'text', btns: [{ title: 'btn1', actionUrl: 'http://x.y.z' }] }).toJS()).toEqual(
            {"actionCard": {"btnOrientation": "0", "btns": [{"actionURL": "http://x.y.z", "title": "btn1"}], "hideAvatar": "0", "text": "text", "title": "title"}, "msgtype": "actionCard"}
        )
    });


    test('title, text, 2 btns', () => {

        expect(new ActionCard({ title: 'title', text: 'text', btns: [{ title: 'btn1', actionUrl: 'http://x.y.z' }, { title: 'btn2', actionUrl: 'http://x.y.x/btn2' }] }).toJS()).toEqual(
            {"actionCard": {"btnOrientation": "0", "btns": [{"actionURL": "http://x.y.z", "title": "btn1"}, {"actionURL": "http://x.y.x/btn2", "title": "btn2"}], "hideAvatar": "0", "text": "text", "title": "title"}, "msgtype": "actionCard"}
        )
    });

})

