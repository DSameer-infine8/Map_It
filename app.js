const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;
const mongoURL = process.env.mongoURL;

const express = require("express");
const mongoose = require("mongoose");
const Card = require("./models/roadmap");
const path = require("path");
const methodOverride = require("method-override");
const session = require('express-session');
const flash = require('connect-flash');
const app = express();
// Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"), { index: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // 👈 Needed to parse JSON from fetch()
app.use(methodOverride("_method"));




// MongoDB Connection
const main = async () => {
    await mongoose.connect(mongoURL);
    await dis();
}
main().then(() => { console.log("Connection Successful") }).catch((err) => { console.log(err) });

// Fetch Role-Based Cards for /home
let roleBasedCards, skillBasedCards, projectBasedCards;
const dis = async () => {
    roleBasedCards = await Card.find({ type: "Role-Based" });
    skillBasedCards = await Card.find({ type: "Skill-Based" });
    projectBasedCards = await Card.find({ type: "Project-Based" });
}



app.use(session({
    secret: 'mysupersecretkey',
    resave: false,
    saveUninitialized: true
}));

app.use(flash());



app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    req.flash('error_msg', 'Something went wrong on our side.');
    res.redirect('back');
});

const authRoutes = require('./routes/authR');

app.use('/auth', authRoutes);







// Routes
app.get("/", (req, res) => {
    res.send("Welcome");
});

app.get('/home', (req, res) => {
    const type = req.query.type || 'role';

    let cards;
    if (type === 'role') cards = roleBasedCards;
    else if (type === 'skill') cards = skillBasedCards;
    else cards = projectBasedCards;

    res.render('home.ejs', { cards, selectedType: type });
});
// 👇 Serve index.html for the /role page
app.get("/role", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 👇 API route to send `role` data as JSON (used by frontend JS)
app.post("/api/role", async (req, res) => {
    let skillname = req.body.name;
    let role = await Card.findOne({ name: skillname });
    res.json(role);
});


app.get("/recommend", (req, res) => {
    res.render('recommend.ejs');
})


// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

