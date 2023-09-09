const express = require("express");
const router = express.Router();

const {createOrder, findOrder, updateStatus, deleteOrder}  = require("../controller/order-controller");
const { route } = require("./user-route");



router.post("/api/v1/order", createOrder)
router.get("/api/v1/order", findOrder)
router.delete("/api/v1/order/:id", deleteOrder)
router.put("/api/v1/order/:id/status", updateStatus)

module.exports = router;