'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_HOST = 'oapi.dingtalk.com';

var SUCCESS_CODE = 0;

var http = {

    /**
     * param
     * @param query {Object}
     * @return {string}
     */
    params: function params(query) {
        if (!query) return '';
        return '?' + _querystring2.default.stringify(query);
    },

    get: function get(pathname, query) {

        return new Promise(function (resolve, reject) {

            _https2.default.get(_path2.default.join('https://' + API_HOST, '' + pathname + http.params(query)), function (res) {

                var body = '';

                res.setEncoding('utf8');
                res.on('data', function (chunk) {
                    body += chunk;
                });
                res.on('end', function () {
                    if (res.statusCode === 200) {
                        var result = JSON.parse(body);
                        if (result && SUCCESS_CODE === result.errcode) {
                            resolve(result);
                        } else {
                            reject(new Error(body));
                        }
                    } else {
                        reject(new Error(body));
                    }
                });
            }).on('error', function (e) {
                reject(e);
            });
        });
    },

    post: function post(pathname, data) {

        var opts = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            protocol: 'https:',
            host: API_HOST,
            path: pathname
        };

        return new Promise(function (resolve, reject) {

            var req = _https2.default.request(opts, function (res) {
                var body = '';

                res.setEncoding('utf8');
                res.on('data', function (chunk) {
                    body += chunk;
                });
                res.on('end', function () {

                    if (res.statusCode === 200) {
                        var result = JSON.parse(body);
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

            req.on('error', function (e) {
                reject(e);
            });
            req.write(JSON.stringify(data));
            req.end();
        });
    }
};

exports.default = http;