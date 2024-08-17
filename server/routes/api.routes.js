// importing controllers to assign to the routes
const generateController = require('@controllers/api/generate.controller');
  
module.exports = (app)=>{
  app.use('/generate', generateController);
};