module.exports = {
  apps: [{
    name: 'portfolio.aievah.site',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/projects/portfolio',
    env: {
      NODE_ENV: 'production',
      PORT: 3004
    },
    log_file: '/var/log/pm2/portfolio.log',
    error_file: '/var/log/pm2/portfolio.error.log',
    out_file: '/var/log/pm2/portfolio.out.log'
  }]
}