export $(cat .env.production | xargs)
node 'bin/content.js'
