const express = require('express');
const HomeRoutes = require('./routes/HomeRoutes');

const PORT = 8080;
const BASE_URL = 'http://localhost';

const app = express();

/**
 * ===============
 *    ROUTING
 * ===============
 */
app.use(HomeRoutes);

app.listen(PORT, () => {
    console.log(`Runing on => ${BASE_URL}:${PORT}`);
});
