/* @flow */

import Basic from './Basic';

/**
 * see https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7629140.0.0.1ed14a97oOZVAo&treeId=257&articleId=105735&docType=1
 */

type LinkType = {
    title: string,
    text: string,
    messageUrl: string,
    picUrl?: string
};

export default class Link extends Basic {

    constructor (options: LinkType) {
        super(options);

        this.title = options.title;
        this.text = options.text;
        this.messageUrl = options.messageUrl || '';
        this.picUrl = options.picUrl || '';
    }

    toJS () {
        return {
            msgtype: 'link',
            link: {
                text: this.text,
                title: this.title,
                picUrl: this.picUrl,
                messageUrl: this.messageUrl
            }
        }
    }

}