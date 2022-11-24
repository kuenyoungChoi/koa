module.exports = [
  {
    env: {
      NODE_ENV: 'production',
      PATH_PRODUCTION: 'daab-micro-koa',
      HOST: '0.0.0.0',
    },
    exec_mode: 'cluster',
    instances: 1,
    name: 'daab-micro-koa',
    script: './src/index.js',
  },
]
