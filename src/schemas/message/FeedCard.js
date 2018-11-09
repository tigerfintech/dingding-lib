/* @flow */

import Basic from './Basic';

/**
 * see https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7629140.0.0.1ed14a97oOZVAo&treeId=257&articleId=105735&docType=1
 */

type FeedItemType = {
    title: string,
    messageUrl: string,
    picUrl: string
};

type FeedCardType = {
    items: array<FeedItemType>
};

export default class FeedCard extends Basic {

    constructor (options: FeedCardType) {
        super(options);

        this.items = options.items;
    }

    toJS () {
        return {
            msgtype: 'feedCard',
            feedCard: {
                links: this.items.map((item) => {
                    return {
                        title: item.title,
                        messageURL: item.messageUrl,
                        picURL: item.picUrl
                    };
                })
            }
        }
    }

}