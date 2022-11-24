module.exports = [
  {
    env: {
      NODE_ENV: 'production',
      PATH_PRODUCTION: 'daab-micro-koa',
    },
    exec_mode: 'cluster',
    instances: 1,
    name: 'daab-micro-koa',
    script: '/daab-micro-koa/src/index.js',
  },
]
