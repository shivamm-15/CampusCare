const express = require("express");
const cors = require("cors");

const app = express();

console.log("App started");

app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Server is working");
});

// IMPORT ROUTES
const complaintRoutes = require("./routes/complaintroutes");

// USE ROUTES
app.use("/api", complaintRoutes);

// START SERVER
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
