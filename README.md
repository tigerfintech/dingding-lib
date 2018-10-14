
## Related
    https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7629140.0.0.1ed14a97oOZVAo&treeId=257&articleId=105735&docType=1

## Usage

### 1, robot message
    
    import { message, api } from './';

    // 1, text message
    api.sendRobotMsg(
        yourAccessToken,
        new message.Text({ text: 'text' })
    ).then().catch()

    // 2, link message
    api.sendRobotMsg(
        yourAccessToken,
        new message.Link({ 
            title: 'title', 
            text: 'text', 
            messageUrl: 'http://z.cn', 
            picUrl: 'http://z.cn'
        })
    ).then().catch()

    // 3, markdown message
    api.sendRobotMsg(
        yourAccessToken,
        new message.Markdown({ 
            title: 'markdown', 
            text: '# markdown'
        })
    ).then().catch()

    // 4, actionCard message
    api.sendRobotMsg(
        yourAccessToken,
        new message.ActionCard({
            title: 'action',
            text: 'action',
            btns: [{ title: 'read more', actionUrl: 'http://z.cn' }] 
        })
    ).then().catch()

    // 5, feedCard message
    api.sendRobotMsg(
        yourAccessToken,
        new message.FeedCard({
            items: [
                {
                    title: 'feed1',
                    messageUrl: 'http://z.cn',
                    picUrl: 'http://z.cn'
                }
            ]
        })
    ).then().catch()
