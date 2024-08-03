// importing controllers to assign to the routes.


function webRoutes(app) {
  app.get('/', (req, res) => {
    res.send('Hello World! Welcome to the Home Page');
  });
}

module.exports = webRoutes;