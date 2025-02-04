import mongoose, { Schema, Document } from "mongoose";

// Definieer het schema voor evenementen
const EventSchema: Schema = new Schema({
  name: { type: String, required: true }, 
  date: { type: Date, required: true }, 
  location: { type: String, required: true }, 
  description: { type: String }, 
  isFree: { type: Boolean, default: false } 
});

// Maak een Mongoose-model op basis van het schema
export const Event = mongoose.model("Event", EventSchema);
