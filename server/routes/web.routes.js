// importing controllers to assign to the routes.
const landingPageController = require('@controllers/web/landingPage.controller');

function webRoutes(app) {
  app.use('/', landingPageController);
}

module.exports = webRoutes;