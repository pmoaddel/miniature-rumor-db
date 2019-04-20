let config = require(`${process.cwd()}/config`)

console.log('proxy host is', config.api.host)

const PROXY_CONFIG = [
  {
    context: [
      '/platform',
      '/directory',
      '/api',
      '/services'
    ],
    'target': config.api.host,
    'secure': true,
    'changeOrigin': true
  }
]

module.exports = PROXY_CONFIG
