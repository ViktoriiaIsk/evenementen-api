import { Request, Response, RequestHandler } from "express";
import { Event } from "../models/Event";

// Haal alle evenementen op
export const getAllEvents: RequestHandler = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Er is een fout opgetreden." });
  }
};

// Haal een specifiek evenement op via ID
export const getEventById: RequestHandler = async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      if (!event) {
        res.status(404).json({ message: "Evenement niet gevonden." });
        return; // Добавили return отдельно
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({ message: "Er is een fout opgetreden." });
    }
  };
  

// Voeg een nieuw evenement toe
export const createEvent: RequestHandler = async (req, res) => {
  try {
    const { name, date, location, description, isFree } = req.body;
    const event = new Event({ name, date, location, description, isFree });
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ message: "Ongeldige gegevens." });
  }
};

// Werk een evenement bij
export const updateEvent: RequestHandler = async (req, res) => {
    try {
      const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!event) {
        res.status(404).json({ message: "Evenement niet gevonden." });
        return;
      }
      res.json(event);
    } catch (error) {
      res.status(400).json({ message: "Ongeldige gegevens." });
    }
  };

// Verwijder een evenement
export const deleteEvent: RequestHandler = async (req, res) => {
    try {
      const event = await Event.findByIdAndDelete(req.params.id);
      if (!event) {
        res.status(404).json({ message: "Evenement niet gevonden." });
        return;
      }
      res.json({ message: "Evenement verwijderd." });
    } catch (error) {
      res.status(500).json({ message: "Er is een fout opgetreden." });
    }
  };