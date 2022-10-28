const { Logic } = require("./logic");
const models = require("../model/model");

class Endpoint {
  constructor() {
    this.dataCpu = models.dataCpuModel;
  }
}

module.exports = {
  Endpoint,
};
