module.exports = {
  apps: [{
    name: 'API',
    script: 'server.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'heasy',
      host: '47.52.68.138',
      ref: 'origin/master',
      repo: 'git@github.com:Surile/node-login.git',
      path: '/home/heasy/www/node-login',
      'post-deploy': 'yarn && pm2 reload ecosystem.config.js --env production'
    }
  }
}
