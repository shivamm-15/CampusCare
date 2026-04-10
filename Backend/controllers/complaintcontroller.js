const db = require("../config/db");

// Create Complaint
exports.createComplaint = (req, res) => {
  const { student_id, category, description } = req.body;

  const sql = "INSERT INTO complaints (student_id, category, description) VALUES (?, ?, ?)";

  db.query(sql, [student_id, category, description], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Error inserting complaint");
    }
    res.send("Complaint added successfully");
  });
};

// Get All Complaints
exports.getComplaints = (req, res) => {
  const sql = "SELECT * FROM complaints";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Error fetching complaints");
    }
    res.json(result);
  });
};

// Assign Complaint
exports.assignComplaint = (req, res) => {
  const { complaint_id, staff_id } = req.body;

  const sql = "INSERT INTO assignments (complaint_id, staff_id) VALUES (?, ?)";

  db.query(sql, [complaint_id, staff_id], (err) => {
    if (err) {
      console.log(err);
      return res.send("Error assigning complaint");
    }

    // Update status
    db.query(
      "UPDATE complaints SET status='IN_PROGRESS' WHERE complaint_id=?",
      [complaint_id]
    );

    res.send("Complaint assigned successfully");
  });
};

// Update Status
exports.updateStatus = (req, res) => {
  const id = req.params.id;
  const { status } = req.body;

  const sql = "UPDATE complaints SET status=? WHERE complaint_id=?";

  db.query(sql, [status, id], (err) => {
    if (err) {
      console.log(err);
      return res.send("Error updating status");
    }
    res.send("Status updated successfully");
  });
};