// importing controllers to assign to the routes.


function apiRoutes(app) {
    app.get('/api/', (req, res) => {
      res.send('Hello World');
    });
  }
  
  module.exports = apiRoutes;