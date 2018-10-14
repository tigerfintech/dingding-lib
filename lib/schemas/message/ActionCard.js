/* @flow */

import Basic from './Basic';

/**
 * see https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7629140.0.0.1ed14a97oOZVAo&treeId=257&articleId=105735&docType=1
 */

type BtnType = {
    title: string,
    actionUrl: string
};

type ActionCardType = {
    title: string,
    text: string,
    // display btns
    btns: array<BtnType>,
    // btn orientation, 0 for vertical, 1 for horizontal
    btnOrientation?: 0 | 1,
    hideAvatar?: 0 | 1
};

export default class ActionCard extends Basic {

    constructor (options: ActionCardType) {
        super(options);

        this.title = options.title;
        this.text = options.text;
        this.btns = options.btns,
        this.btnOrientation = options.btnOrientation !== 1 ? 0 : 1;
        this.hideAvatar = options.hideAvatar !== 1 ? 0 : 1;
    }

    toJS () {
        return {
            msgtype: 'actionCard',
            actionCard: {
                title: this.title,
                text: this.text,
                hideAvatar: `${this.hideAvatar}`,
                btnOrientation: `${this.btnOrientation}`,
                btns: this.btns.map((item) => { return { title: item.title, actionURL: item.actionUrl }; })
            }
        }
    }

}