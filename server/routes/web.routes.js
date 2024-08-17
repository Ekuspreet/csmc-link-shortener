// importing controllers to assign to the routes.
const landingPageController = require('@controllers/web/landingPage.controller');

module.exports = (app) => {
  app.use('/', landingPageController);
};