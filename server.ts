import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import eventRoutes from "./routes/eventRoutes";
import setupSwagger from "./swagger";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

setupSwagger(app);
// Middleware
app.use(cors());
app.use(express.json());
app.use("/api", eventRoutes);
app.get("/", (req, res) => {
    res.send("🎉 API is running! Use /api/events to fetch events.");
  });
  

// Verbind met MongoDB
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("Verbonden met de database"))
  .catch((err) => console.error("Databaseverbinding mislukt", err));

// Start de server
app.listen(PORT, () => {
  console.log(`Server draait op poort ${PORT}`);
});
