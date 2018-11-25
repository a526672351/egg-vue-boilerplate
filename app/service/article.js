'use strict';
const egg = require('egg');
module.exports = class ArticeService extends egg.Service {
    getArtilceList(json = {}) {
        return {
            total: 2,
            list:
                [{
                    id: 49,
                    title: 'axios-基于 Promise 的 HTTP请求客户端',
                    summary: '基于 Promise 的 HTTP 请求客户端，可同时在浏览器和 node.js 中使用',
                    hits: 998,
                    url: 'https://www.awesomes.cn/repo/mzabriskie/axios',
                    tag: 'egg,vue,webpack',
                    categoryId: 1,
                    authorId: 1,
                    createTime: 1515671348347
                },
                {
                    id: 40,
                    title: 'vue生命周期',
                    summary: 'Vue.js 生命周期和route的生命周期讲解',
                    hits: 434,
                    url: 'http://www.jianshu.com/p/e9f884b6ba6c',
                    tag: 'egg,vue,webpack',
                    categoryId: 1,
                    authorId: 1,
                    createTime: 1515671348342
                }]
        };
    }
};