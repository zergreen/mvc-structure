const { Plugin } = require("../controller/plugin");

class Logic {
    getAllLogic = (req, res) => {
        new Plugin().getAllPlugin(req, res);
    }
    getTableLogic = (req, res) => {
        new Plugin().getTablePlugin(req, res);
    }
}

module.exports = { Logic };