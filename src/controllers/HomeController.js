const { Request, Response } = require('express');
/**
 *
 * @param {Request} req
 * @param {Response} res
 */
const index = (req, res) => {
    res.sendStatus(501);
};

const HomeController = { index };

module.exports = HomeController;
