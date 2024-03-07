import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cors());

async function connectMongoDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    if (conn) {
      console.log("Connected to MongoDB📦");
    }
  } catch (e) {
    console.log(e.message);
  }
}
connectMongoDB();

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "All Good🥳🥳",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
