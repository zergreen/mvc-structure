const { Logic } = require("./logic");
const models = require("../model/model");

class Endpoint {
  constructor() {
    this.dataCpu = models.dataCpuModel;
  }

  getAllEndpoint = (req, res) => {
    new Logic().getAllLogic(req, res);
  };
}

module.exports = {
  Endpoint,
};
