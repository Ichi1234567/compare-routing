const routes = require('next-routes')();

routes.add('index', '/', 'IndexPage');
routes.add('user', '/users/:username', 'UserPage');
