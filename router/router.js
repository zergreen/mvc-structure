const express = require("express");
const router = express.Router();
const { Endpoint } = require("../controller/endpoint.js");

router.get("/", function (req, res) {
  res.render("index", { title: "Home Page" });
});

router.get("/getAll", new Endpoint().getAllEndpoint);

router.get("/getTable", new Endpoint().getTableEndpoint);

//สร้างแถว
router.post("/createCpu", new Endpoint().createEndpoint);

//ลบแถว
router.post("/deleteCpu/:id", new Endpoint().deleteEndpoint);

//แก้ไขข้อมูล
router.post("/updateCpu/:id", new Endpoint().updateEndpoint);

//รับข้อมูล Record ทั้งหมด
router.get("/getCpu", new Endpoint().getEndpoint);

//รับข้อมูลอันนึง
router.get("/getUserCpu", new Endpoint().getUserCpuEndpoint);

//รับข้อมูล Record เรียงลำดับมากไปน้อย
router.get("/getDesc", new Endpoint().getDescEndpoint);

//รับข้อมูล Record เรียงลำดับน้อยไปมาก
router.get("/getAsc", new Endpoint().getAscEndpoint);

//แสดงค่าสูงสุด
router.get("/getMax", new Endpoint().getMaxEndpoint);

router.get("/edit/:id", new Endpoint().getEditEndpoint);

module.exports = router;
