import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./src/config/db.js";
import { router } from "./src/routes/blog.route.js";
dotenv.config();

const app = express();

// port
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Aruuu");
});

// routes
app.use("/blogs", router);

// server + database
const startServer = async () => {
  try {
    await connectDb(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`Server running at: http://localhost:${port}`);
    });
  } catch (error) {
    console.log("Failed to start server");
    process.exit(1);
  }
};

startServer();
