console.log('proxy is running');

const PROXY_CONFIG = [
  {
    context: [
      '/gw'
    ],
    'target': 'https://www.warhammer-community.com/',
    'secure': false,
    'changeOrigin': true,
    'logLevel': 'debug',
    "pathRewrite": {
      "^/gw": ""
    }
  }
]

module.exports = PROXY_CONFIG
