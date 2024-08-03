const express = require('express');

const app = express();

// this will register the module alias.
require('module-alias/register');

// Importing Application Configuration
const appConfig = require('@configs/developement.config.js');


// Registering Routes
require('@routes/api.routes')(app);
require('@routes/web.routes')(app);

app.listen(appConfig.port, () => {
    console.log(`Server is running on port ${appConfig.port}`);
});