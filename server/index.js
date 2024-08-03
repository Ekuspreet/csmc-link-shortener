// Module Imports.
const express = require('express');


// Initializing Express Application.
const app = express();

// this will register the module alias.
require('module-alias/register');

app.set('view engine', 'ejs');

app.use(express.static('public'));
// Importing Application Configuration.
const appConfig = require('@configs/developement.config.js');


// Registering Routes.
require('@routes/api.routes')(app);
require('@routes/web.routes')(app);

app.listen(appConfig.port, () => {
    console.log(`Server is running on port ${appConfig.port}`);
});