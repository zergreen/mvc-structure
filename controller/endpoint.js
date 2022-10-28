const { Logic } = require("./logic");
const models = require("../model/model");

class Endpoint {
  constructor() {
    this.dataCpu = models.dataCpuModel;
  }

  getAllEndpoint = (req, res) => {
    new Logic().getAllLogic(req, res);
  };

  getTableEndpoint = (req, res) => {
    new Logic().getTableLogic(req, res);
  };
}

module.exports = {
  Endpoint,
};
