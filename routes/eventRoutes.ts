import express, { Request, Response, RequestHandler } from "express";
import { getAllEvents, getEventById, createEvent, updateEvent, deleteEvent } from "../controllers/eventController";

const router: express.Router = express.Router();

// Definieer API-routes
router.get("/events", getAllEvents); // Haal alle evenementen op
router.get("/events/:id", getEventById); // Haal een specifiek evenement op
router.post("/events", createEvent); // Voeg een nieuw evenement toe
router.put("/events/:id", updateEvent); // Werk een evenement bij
router.delete("/events/:id", deleteEvent); // Verwijder een evenement

export default router;
