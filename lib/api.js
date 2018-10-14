/* @flow */

import http from './http';

import { FeedCard, ActionCard, Markdown, Link, Text } from './schemas/message/';

const apis = {

    sendRobotMsg (accessToken: string, ins: FeedCard | ActionCard | Markdown | Link | Text) {
        return http.post(`/robot/send?access_token=${accessToken}`, ins.toJS());
    }
}

export default apis;