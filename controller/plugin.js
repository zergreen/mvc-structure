const connection = require("../database.connect/connector");

class Plugin {
  getAllPlugin = (req, res) => {
    return res.status(200).send({ response: "Connect to Plugin Success" });
  };
}

module.exports = { Plugin };
