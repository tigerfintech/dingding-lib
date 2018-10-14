/* @flow */

import Basic from './Basic';

/**
 * see https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7629140.0.0.1ed14a97oOZVAo&treeId=257&articleId=105735&docType=1
 */
export default class Text extends Basic {

    constructor (options: { text: string, atMobiles?: array<string>, isAtAll?: bool }) {
        super(options);

        this.text = options.text;
        this.atMobiles = options.atMobiles || [];
        this.isAtAll = options.isAtAll || false;
    }

    toJS () {
        return {
            msgtype: 'text',
            text: {
                content: this.text
            },
            at: {
                atMobiles: this.atMobiles,
                isAtAll: this.isAtAll
            }
        }
    }

}