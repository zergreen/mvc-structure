const connection = require("../database.connect/connector");

class Plugin {
  getAllPlugin = (req, res) => {
    return res.status(200).send({ response: "Connect to Plugin Success" });
  };

  getTablePlugin = (req, res) => {
    let sql = `SELECT * FROM Test`;
    connection.query(sql, (err, result) => {
      if (err) {
        console.log("query error");
      } else {
        console.log("query success");
        return res.status(200).send({ response: res });
      }
    });
    return res.status(200).send({ response: "Connect to Plugin Success" });
  };
}

module.exports = { Plugin };
