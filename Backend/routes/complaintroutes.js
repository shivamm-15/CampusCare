const express = require("express");
const router = express.Router();

const controller = require("../controllers/complaintcontroller");

// Routes
router.post("/complaint", controller.createComplaint);
router.get("/complaints", controller.getComplaints);
router.post("/assign", controller.assignComplaint);
router.put("/status/:id", controller.updateStatus);

module.exports = router;