/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/tacooo0o.github.io/2020/07/22/你好/index.html","0eb1fa0a7992dafe42d46e0d33910403"],["/tacooo0o.github.io/2020/07/26/Hexo-admin插件使用/index.html","6ad95d7e5d5b06a55916110d6a11d467"],["/tacooo0o.github.io/2021/12/26/hello-world/index.html","1ae2155c6bf36e34faab8c6303ec0e35"],["/tacooo0o.github.io/about/index.html","cf139dcdf1d3f47ee0970c6729093cc4"],["/tacooo0o.github.io/archives/2020/07/index.html","82a72d69849826ba46e021d8d46c9074"],["/tacooo0o.github.io/archives/2020/index.html","15b0dfcf6e7e6643c914b232d6f30a08"],["/tacooo0o.github.io/archives/2021/12/index.html","30eb9c0c9de4296cc8b052caafdba971"],["/tacooo0o.github.io/archives/2021/index.html","e36391eba4943f764f9ae684cc786d88"],["/tacooo0o.github.io/archives/index.html","dc138c08ad97b6c909b42cfb4d526819"],["/tacooo0o.github.io/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/tacooo0o.github.io/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/tacooo0o.github.io/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/tacooo0o.github.io/categories/Hexo/index.html","218c8a2cd4e5eee8b47697a4e7d610bf"],["/tacooo0o.github.io/categories/index.html","bb4ae5d52e9b9d57e05acae792191629"],["/tacooo0o.github.io/css/VolantisTags.css","00e86b5f8f0c685af0cd50a0e5c72c14"],["/tacooo0o.github.io/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/tacooo0o.github.io/css/index.css","fa1ac0441cb76ab05a8bdb2e5def3a29"],["/tacooo0o.github.io/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/tacooo0o.github.io/css/volantis.css","cd2a3ce6b8506d280e2ed38354b97b44"],["/tacooo0o.github.io/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/tacooo0o.github.io/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/tacooo0o.github.io/img/avatar.png","38b843ce8d375dd746f3a7e53d288fc9"],["/tacooo0o.github.io/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/tacooo0o.github.io/img/cover/bg0.jpg","227c284f50c2f53829a24d51077af375"],["/tacooo0o.github.io/img/cover/bg1.jpg","ca56a080a292048402bdf56c16e53c05"],["/tacooo0o.github.io/img/cover/bg10.jpg","304cb1245e076b490c9f1b43d8197d44"],["/tacooo0o.github.io/img/cover/bg2.jpg","ddb5eb139c8a704672457d365a2f505b"],["/tacooo0o.github.io/img/cover/bg4.jpg","5de4213d6f3f9aa744a8156a6ce6e628"],["/tacooo0o.github.io/img/cover/bg6.jpg","b42bdb3911fa8e275a98878301452b54"],["/tacooo0o.github.io/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/tacooo0o.github.io/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/tacooo0o.github.io/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/tacooo0o.github.io/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/tacooo0o.github.io/index.html","5e4b0557ec2e0a3d87823af5f1d3fb76"],["/tacooo0o.github.io/js/VolantisTags.js","3d18dd231aba8d8ae6ca554723630b3b"],["/tacooo0o.github.io/js/classify.js","2ec4725eff203ca3defe053eb5ec65ee"],["/tacooo0o.github.io/js/main.js","b382597891e958e71bb7c1099977ec66"],["/tacooo0o.github.io/js/search/algolia.js","24e286714f775d2a52053e530b2ac199"],["/tacooo0o.github.io/js/search/local-search.js","e3a22e76d8b457655f619551990316e8"],["/tacooo0o.github.io/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/tacooo0o.github.io/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/tacooo0o.github.io/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/tacooo0o.github.io/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/tacooo0o.github.io/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/tacooo0o.github.io/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/tacooo0o.github.io/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/tacooo0o.github.io/js/tw_cn.js","0dcf46510648b9ff1a8a65d270ba117a"],["/tacooo0o.github.io/js/utils.js","9fadc7723c6bd679aa69c1c158f65af0"],["/tacooo0o.github.io/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/tacooo0o.github.io/link/index.html","a30e9757ad2e73f33e8f788f744847c5"],["/tacooo0o.github.io/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["/tacooo0o.github.io/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/tacooo0o.github.io/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/tacooo0o.github.io/sw-register.js","475758728bd62074f87b356c9b3feeec"],["/tacooo0o.github.io/tags/Hexo/index.html","35610f7759695a4aef4f6a82b7bab560"],["/tacooo0o.github.io/tags/index.html","3f61a243a260fca1a371eef4370f11e7"],["/tacooo0o.github.io/tags/生活杂谈/index.html","aa8b4980fcc0a766bb88b68ea3580651"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
