const routes = require('next-routes')

module.exports = routes()
  .add('/', 'home')
  .add('/repositories', 'repositories')
  .add('/repositories/:repo/contributors', 'contributors-details')
