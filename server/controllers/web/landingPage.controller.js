const express = require('express');

const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
    res.render('landing');
});

// Export the router
module.exports = router;