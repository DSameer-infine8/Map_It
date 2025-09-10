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
    tools_and_software: [mongoose.Schema.Types.Mixed],
    timeline: [mongoose.Schema.Types.Mixed]
}, { _id: false });


const cardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    skill: { type: String, required: true },
    type: { type: String, required: true },
    for: { type: String },
    desc: { type: String },
    what: { type: [String], required: true },
    why: { type: [String], required: true },
    when: { type: [String], required: true },
    iconURL: { type: String },
    months: { type: Number },
    NumUsers: { type: Number },
    technologies: { type: [String] },
    roadmap: [roadmapSchema],
    clickedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
});

module.exports = mongoose.model("Card", cardSchema);