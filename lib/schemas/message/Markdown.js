/* @flow */

import Basic from './Basic';

/**
 * see https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7629140.0.0.1ed14a97oOZVAo&treeId=257&articleId=105735&docType=1
 */

type MarkdownType = {
    title: string,
    text: string,
    atMobiles?: array<string>,
    isAtAll?: bool
};

export default class Markdown extends Basic {

    constructor (options: MarkdownType) {
        super(options);

        this.title = options.title;
        this.text = options.text;
        this.atMobiles = options.atMobiles || [];
        this.isAtAll = options.isAtAll || false;
    }

    toJS () {
        return {
            msgtype: 'markdown',
            markdown: {
                title: this.title,
                text: this.text
            },
            at: {
                atMobiles: this.atMobiles,
                isAtAll: this.isAtAll
            }
        }
    }

}