const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const levelSchema = new Schema({
    level: { type: String, required: true },
    title: { type: String, required: true },
    topics: [mongoose.Schema.Types.Mixed]
}, { _id: false });


const roadmapSchema = new mongoose.Schema({
    title: { type: String, required: true },
    goal: { type: String, required: true },
    levels: [levelSchema],
    tools_and_software: mongoose.Schema.Types.Mixed,
    timeline: [mongoose.Schema.Types.Mixed]
}, { _id: false });


const cardSchema = new mongoose.Schema({
    skill_name: { type: String, required: true },
    type: { type: String, required: true }, // e.g., "frontend", "backend"
    desc: { type: String },
    months: { type: Number },
    NumUsers: { type: Number },
    technologies: { type: [String] },
    roadmap: [roadmapSchema]
});

module.exports = mongoose.model("Card", cardSchema);