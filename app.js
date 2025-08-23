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

const wrapAsync = require("./middleware/asyncWrap");
const User = require('./models/User');


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



app.get("/recommend", async (req, res) => {

    res.render('recommend.ejs');
});

app.get("/recommend/quiz", async (req, res) => {
    const email = req.session.verifiedEmail;
    if (!email) {
        req.flash('error_msg', 'Please verify your email first.');
        return res.redirect('/recommend');
    }
    const user = await User.findOne({ email });
    res.render('quiz', { user });
});

let userAnswers = {};
app.post("/submit-answers", (req, res) => {
    // req.body contains all answers
    userAnswers = req.body;

    console.log("User Answers:", userAnswers);
    // Example: { Q1: '18-24', Q2: 'IT/CS', Q3: 'Student' }

    // Pass the answers to another route
    res.redirect("/recommend/ai");
});



const skillMapping = {
    age: {
        "18-24": ["Front-End", "UI/UX Designer", "Game Developer"],
        "25-35": ["Back-End", "Data Science", "Cloud Engineer"],
        "35+": ["Project Manager", "Cloud Engineer", "Cybersecurity"]
    },
    education: {
        "IT": ["Front-End", "Back-End", "Java Full-Stack", "Data Science", "Cloud Engineer", "Cybersecurity"],
        "Non-IT": ["UI/UX Designer", "Prompt Engineer", "AI Agents"]
    },
    profession: {
        "Student": ["Front-End", "UI/UX Designer", "Game Developer", "App Developer"],
        "IT Professional": ["Back-End", "Java Full-Stack", "Cloud Engineer", "Cybersecurity"],
        "Non-IT Professional": ["Prompt Engineer", "UI/UX Designer", "AI Agents"],
        "Freelancer": ["UI/UX Designer", "App Developer", "Front-End", "Prompt Engineer"]
    },
    coding_experience: {
        "None": ["UI/UX Designer", "Prompt Engineer"],
        "Beginner": ["Front-End", "Python", "App Developer"],
        "Intermediate": ["Back-End", "Java Full-Stack", "Cloud Engineer", "SQL"],
        "Advanced": ["AI Engineering", "MLOps Engineer", "Data Scientist", "Rust Blockchain Developer", "Block-Chain Developer"]
    },
    tools: {
        "HTML/CSS/JS": ["Front-End", "UI/UX Designer", "Game Developer"],
        "Python": ["Data Scientist", "AI Engineering", "AI Agents", "MLOps Engineer"],
        "Java": ["Java Full-Stack", "Back-End", "App Developer"],
        "SQL": ["Data Scientist", "Back-End", "AI Engineering"],
        "Cloud": ["Cloud Engineer", "MLOps Engineer", "AI Agents"],
        "UI/UX Tools": ["UI/UX Designer", "Front-End"],
        "None": ["Prompt Engineer", "UI/UX Designer"]
    },
    project_experience: {
        "No Projects": ["UI/UX Designer", "Prompt Engineer"],
        "Mini Projects": ["Front-End", "App Developer", "Python"],
        "1-2 Projects": ["Back-End", "Java Full-Stack", "Data Scientist"],
        "Professional Projects": ["Cloud Engineer", "AI Engineering", "Block-Chain Developer", "Rust Blockchain Developer"]
    },
    time_commitment: {
        "<5": ["Prompt Engineer", "UI/UX Designer"],
        "5-10": ["Front-End", "Python", "App Developer"],
        "10+": ["AI Engineering", "Data Scientist", "Cloud Engineer", "MLOps Engineer", "Block-Chain Developer"]
    },
    learning_style: {
        "Visual": ["UI/UX Designer", "Front-End", "Game Developer"],
        "Reading": ["Back-End", "Rust Blockchain Developer", "SQL"],
        "Hands-on": ["AI Engineering", "Data Scientist", "Cloud Engineer", "App Developer"]
    },
    interest_area: {
        "Web Development": ["Front-End", "Back-End", "Java Full-Stack", "UI/UX Designer"],
        "Data Science": ["Data Scientist", "AI Engineering", "MLOps Engineer", "AI Agents"],
        "Mobile Apps": ["App Developer", "Front-End"],
        "Cloud Computing": ["Cloud Engineer", "MLOps Engineer"],
        "UI/UX Design": ["UI/UX Designer", "Front-End"]
    },
    work_preference: {
        "Alone": ["Prompt Engineer", "UI/UX Designer", "Python"],
        "Team": ["Cloud Engineer", "AI Engineering", "Java Full-Stack"],
        "Both": ["Data Scientist", "Front-End", "App Developer"]
    },
    career_goal: {
        "Job": ["Java Full-Stack", "Back-End", "Cloud Engineer", "AI Engineering"],
        "Freelancing": ["UI/UX Designer", "Front-End", "Prompt Engineer", "App Developer"],
        "Startup": ["Block-Chain Developer", "Rust Blockchain Developer", "AI Agents"]
    },
    earning_goal: {
        "<3 months": ["Front-End", "UI/UX Designer", "Python"],
        "3-6 months": ["Java Full-Stack", "App Developer", "Cloud Engineer"],
        "6+ months": ["AI Engineering", "MLOps Engineer", "Data Scientist", "Block-Chain Developer"]
    },
    budget: {
        "Free": ["UI/UX Designer", "Prompt Engineer", "Python"],
        "<50": ["Front-End", "Java Full-Stack", "SQL"],
        ">50": ["AI Engineering", "MLOps Engineer", "Block-Chain Developer", "Rust Blockchain Developer"]
    },
    creative_analytical: {
        "Creative": ["UI/UX Designer", "Front-End", "Game Developer"],
        "Analytical": ["Data Scientist", "SQL", "AI Engineering"],
        "Both": ["Java Full-Stack", "App Developer", "AI Agents"]
    },
    math_skill: {
        "Low": ["UI/UX Designer", "Prompt Engineer"],
        "Medium": ["Front-End", "App Developer", "Python"],
        "High": ["AI Engineering", "Data Scientist", "MLOps Engineer", "Block-Chain Developer"]
    },
    problem_solving: {
        "Yes": ["AI Engineering", "Data Scientist", "Cloud Engineer", "Block-Chain Developer"],
        "No": ["UI/UX Designer", "Prompt Engineer"],
        "Sometimes": ["Front-End", "App Developer"]
    },
    industry_preference: {
        "Tech": ["AI Engineering", "Java Full-Stack", "Cloud Engineer"],
        "Finance": ["Block-Chain Developer", "Rust Blockchain Developer", "Data Scientist"],
        "Healthcare": ["AI Agents", "Python", "Data Scientist"],
        "Education": ["UI/UX Designer", "Front-End", "Prompt Engineer"],
        "Design": ["UI/UX Designer", "Front-End", "Game Developer"]
    },
    challenge_handling: {
        "Give up quickly": ["UI/UX Designer", "Prompt Engineer"],
        "Try to solve": ["Front-End", "App Developer", "Python"],
        "Enjoy solving": ["AI Engineering", "Data Scientist", "Block-Chain Developer"]
    },
    remote_work: {
        "Yes": ["Front-End", "UI/UX Designer", "AI Agents", "Python"],
        "No": ["Cloud Engineer", "Java Full-Stack"],
        "Doesn't matter": ["AI Engineering", "Data Scientist"]
    },
    salary_priority: {
        "Very Important": ["AI Engineering", "Cloud Engineer", "Block-Chain Developer"],
        "Somewhat Important": ["Front-End", "Data Scientist", "Java Full-Stack"],
        "Not Important": ["UI/UX Designer", "Prompt Engineer"]
    }
};



function recommendSkills(userAnswers) {
    const scoreMap = {};

    // Initialize all skills with 0
    const allSkills = [
        "Front-End", "Back-End", "AI Engineering", "Data Scientist", "MLOps Engineer",
        "LLM Developer", "Prompt Engineer", "Java Full-Stack", "Cybersecurity", "Game Developer",
        "App Developer", "UI/UX Designer", "Cloud Engineer", "Block-Chain Developer",
        "Rust Blockchain Developer", "Python", "SQL", "AI Agents", "AWS"
    ];
    allSkills.forEach(skill => scoreMap[skill] = 0);

    // Calculate scores
    Object.entries(userAnswers).forEach(([q, answer]) => {
        if (skillMapping[q] && skillMapping[q][answer]) {
            skillMapping[q][answer].forEach(skill => {
                scoreMap[skill] += 1;
            });
        }
    });

    // Sort skills by score
    return Object.entries(scoreMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([skill]) => skill);
}






app.get("/recommend/ai", (req, res) => {
    // Use your recommendSkills function here
    const recommendedSkills = recommendSkills(userAnswers);
    res.render("recommendAi.ejs", {recommendedSkills})
});









// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

