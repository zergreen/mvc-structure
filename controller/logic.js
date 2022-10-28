const { Plugin } = require("../controller/plugin");

class Logic {
    getAllLogic = (req, res) => {
        new Plugin().getAllPlugin(req, res);
    }
}

module.exports = { Logic };