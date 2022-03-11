const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const CryptoRoutes = require('./routes/CryptoRoutes');
const HomeRoutes = require('./routes/HomeRoutes');

const PORT = 8080;
const BASE_URL = 'http://localhost';

const app = express();

/**
 * ================
 *    MIDDLEWARES
 * ================
 */
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

/**
 * =================
 *    TEMPLATING
 * =================
 */
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.set('layout', 'layout/_base');
// Grant us possibility to use custom scripts at the bottom of our page
app.set('layout extractScripts', true);

app.set('views', './src/views');
/**
 * ===============
 *    ROUTING
 * ===============
 */
app.use(HomeRoutes);
app.use('/cryptos', CryptoRoutes);

app.listen(PORT, () => {
    console.log(`Runing on => ${BASE_URL}:${PORT}`);
});
