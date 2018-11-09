
/* @flow */

import https from 'https';
import queryString from 'querystring';
import path from 'path';

const API_HOST = 'oapi.dingtalk.com';

const SUCCESS_CODE = 0;

const http = {

    /**
     * param
     * @param query {Object}
     * @return {string}
     */
    params: function (query?: { [any]: any }) {
        if (!query) return '';
        return '?' + queryString.stringify(query);
    },

    get: function (pathname: string, query?: { [any]: any }) {

        return new Promise((resolve, reject) => {

            https.get(path.join(`https://${API_HOST}`, `${pathname}${http.params(query)}`), (res) => {

                let body = '';

                res.setEncoding('utf8');
                res.on('data', function (chunk) {
                    body += chunk;
                });
                res.on('end', function () {
                    if (res.statusCode === 200) {
                        const result = JSON.parse(body);
                        if (result && SUCCESS_CODE === result.errcode) {
                            resolve(result);
                        } else {
                            reject(new Error(body));
                        }
                    } else {
                        reject(new Error(body));
                    }
                });

            }).on('error', (e) => {
                reject(e);
            });

        });

    },


    post: function (pathname: string, data?: { [any]: any }) {

        const opts = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            protocol: 'https:',
            host: API_HOST,
            path: pathname
        };

        return new Promise((resolve, reject) => {

            const req = https.request(opts, (res) => {
                let body = '';

                res.setEncoding('utf8');
                res.on('data', function (chunk) {
                    body += chunk;
                });
                res.on('end', function () {

                    if (res.statusCode === 200) {
                        const result = JSON.parse(body);
                        if (result && SUCCESS_CODE === result.errcode) {
                            resolve(result);
                        } else {
                            reject(new Error(body));
                        }
                    } else {
                        reject(new Error(body));
                    }
                    
                });
            });

            req.on('error', (e) => {
                reject(e);
            });
            req.write(JSON.stringify(data));
            req.end();

        })
    }
}

export default http;