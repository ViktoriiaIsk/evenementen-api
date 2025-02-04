import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import eventRoutes from "./routes/eventRoutes";
import setupSwagger from "./swagger";
import {Event} from "./models/Event"; 
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

setupSwagger(app);
// Middleware
app.use(cors());
app.use(express.json());
app.use("/api", eventRoutes);
app.get("/", async (req, res) => {
    try {
      const events = await Event.find(); // Получаем все события из базы данных
      res.json(events); // Отправляем JSON-ответ
    } catch (error) {
      res.status(500).json({ message: "Er is een fout opgetreden." });
    }
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
