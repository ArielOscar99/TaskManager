const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoute");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to server
const connectDB = require("./config/db");
connectDB();

// Routes
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
