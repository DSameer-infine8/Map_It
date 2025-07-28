const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;
const mongoURL = process.env.mongoURL;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Card = require("./models/roadmap");
const path = require("path");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const main = async () => {
    await mongoose.connect(mongoURL);
}

main().then(() => { console.log("Connection Successful") }).catch((err) => { console.log(err) });


let roleBasedCards;

dis = async () => {
    roleBasedCards = await Card.find({ type: "Role-Based" });

}
dis();





app.get("/", (req, res, err) => {
    res.send("welcome");
});


app.get("/home", (req, res) => {
    res.render("home.ejs", { roleBasedCards });
});


app.post("/role", async (req, res) => {
    let skillname = req.body.name;
    let role = await Card.findOne({ name: skillname });
    res.render("road.ejs", { role });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



