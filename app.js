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



// Fetch Role-Based Cards for /home
let roleBasedCards, skillBasedCards, projectBasedCards;
const dis = async () => {
    roleBasedCards = await Card.find({ type: "Role-Based" });
    skillBasedCards = await Card.find({ type: "Skill-Based" });
    projectBasedCards = await Card.find({ type: "Project-Based" });
}



// MongoDB Connection
const main = async () => {
    await mongoose.connect(mongoURL);
    await dis();
}
main().then(() => { console.log("Connection Successful") }).catch((err) => { console.log(err) });




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


// Function to handle card click
async function handleCardClick(cardId, userId) {
    try {
        const user = await User.findById(userId);
        if (!user) throw new Error("User not found");

        // First update clickedBy
        const card = await Card.findByIdAndUpdate(
            cardId,
            { $addToSet: { clickedBy: user._id } },
            { new: true }
        );

        if (!card) throw new Error("Card not found");

        // Now update NumUsers based on clickedBy length
        card.NumUsers = card.clickedBy.length;
        await card.save();
        await dis();

        return card; // ✅ this will have updated NumUsers
    } catch (err) {
        console.error("Error in handleCardClick:", err.message);
        throw err;
    }
}




let userId;

// Routes
app.get("/", (req, res) => {
    res.send("Welcome");
});

app.get('/home', (req, res) => {
    const type = req.query.type || 'role';
    const otp_stage = req.flash("otp_stage")[0] || false;
    userId = req.session.userId;

    let cards;
    if (type === 'role') cards = roleBasedCards;
    else if (type === 'skill') cards = skillBasedCards;
    else cards = projectBasedCards;

    res.render('home.ejs', { cards, selectedType: type, otp_stage, userId });
});
// 👇 Serve index.html for the /role page
app.get("/role", (req, res) => {


    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 👇 API route to send `role` data as JSON (used by frontend JS)
app.post("/api/role", async (req, res) => {
    try {
        const skillname = req.body.name;

        // find the card
        const role = await Card.findOne({ name: skillname });
        if (!role) return res.status(404).json({ error: "Card not found" });

        const cardId = role._id;  // ✅ correct way
        userId = req.session.userId;

        if (!userId) return res.status(401).json({ error: "User not logged in" });

        console.log("Session User ID:", userId);

        const n = await User.findById(userId);
        console.log("User fetched:", n?.email);

        // call your handler
        const updatedCard = await handleCardClick(cardId, userId);

        res.json(updatedCard);
    } catch (err) {
        console.error("Error in /api/role:", err);
        res.status(500).json({ error: "Server error" });
    }
});




app.get("/recommend", async (req, res) => {
    const otp_stage = req.flash("otp_stage")[0] || false;
    res.render("recommend.ejs", { otp_stage });
});

app.get("/recommend/quiz", async (req, res) => {
    const email = req.session.verifiedEmail;
    if (!email) {
        req.flash('error_msg', 'Please verify your email first.');
        return res.redirect('/recommend');
    }
    const user = await User.findOne({ email });
    req.session.verifiedUser = user;
    userId = user.id;
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
        "18-24": ["Front-End", "UI/UX Design", "Game Development", "App Development", "Python"],
        "25-35": ["Back-End", "Data Science", "Cloud Engineering", "LLM", "AWS"],
        "35+": ["Cloud Engineering", "Cyber Security", "LLM", "Blockchain"]
    },
    education: {
        "IT": ["Front-End", "Back-End", "Java Full-Stack", "Data Science", "Cloud Engineering", "Cyber Security", "SQL", "AWS"],
        "Non-IT": ["UI/UX Design", "Prompt Engineering", "AI Agents", "Game Development"]
    },
    profession: {
        "Student": ["Front-End", "UI/UX Design", "Game Development", "App Development", "Python"],
        "IT Professional": ["Back-End", "Java Full-Stack", "Cloud Engineering", "Cyber Security", "LLM", "AWS"],
        "Non-IT Professional": ["Prompt Engineering", "UI/UX Design", "AI Agents", "SQL"],
        "Freelancer": ["UI/UX Design", "App Development", "Front-End", "Prompt Engineering", "Python"]
    },
    coding_experience: {
        "None": ["UI/UX Design", "Prompt Engineering", "Game Development"],
        "Beginner": ["Front-End", "Python", "App Development", "SQL"],
        "Intermediate": ["Back-End", "Java Full-Stack", "Cloud Engineering", "SQL", "AWS"],
        "Advanced": ["AI Engineering", "MLOps", "Data Science", "Rust Blockchain Development", "Blockchain", "LLM"]
    },
    tools: {
        "HTML/CSS/JS": ["Front-End", "UI/UX Design", "Game Development"],
        "Python": ["Data Science", "AI Engineering", "AI Agents", "MLOps", "LLM"],
        "Java": ["Java Full-Stack", "Back-End", "App Development"],
        "SQL": ["Data Science", "Back-End", "AI Engineering", "SQL"],
        "Cloud": ["Cloud Engineering", "MLOps", "AI Agents", "LLM", "AWS"],
        "UI/UX Tools": ["UI/UX Design", "Front-End"],
        "None": ["Prompt Engineering", "UI/UX Design"]
    },
    project_experience: {
        "No Projects": ["UI/UX Design", "Prompt Engineering"],
        "Mini Projects": ["Front-End", "App Development", "Python", "SQL"],
        "1-2 Projects": ["Back-End", "Java Full-Stack", "Data Science", "AWS"],
        "Professional Projects": ["Cloud Engineering", "AI Engineering", "Blockchain", "Rust Blockchain Development", "LLM"]
    },
    time_commitment: {
        "<5": ["Prompt Engineering", "UI/UX Design", "Python"],
        "5-10": ["Front-End", "Python", "App Development", "SQL"],
        "10+": ["AI Engineering", "Data Science", "Cloud Engineering", "MLOps", "Blockchain", "LLM", "AWS"]
    },
    learning_style: {
        "Visual": ["UI/UX Design", "Front-End", "Game Development"],
        "Reading": ["Back-End", "Rust Blockchain Development", "SQL", "LLM"],
        "Hands-on": ["AI Engineering", "Data Science", "Cloud Engineering", "App Development", "LLM", "AWS"]
    },
    interest_area: {
        "Web Development": ["Front-End", "Back-End", "Java Full-Stack", "UI/UX Design", "SQL"],
        "Data Science": ["Data Science", "AI Engineering", "MLOps", "AI Agents", "LLM", "Python"],
        "Mobile Apps": ["App Development", "Front-End", "Java Full-Stack"],
        "Cloud Computing": ["Cloud Engineering", "MLOps", "LLM", "AWS"],
        "UI/UX Design": ["UI/UX Design", "Front-End", "Game Development"]
    },
    work_preference: {
        "Alone": ["Prompt Engineering", "UI/UX Design", "Python"],
        "Team": ["Cloud Engineering", "AI Engineering", "Java Full-Stack", "LLM", "AWS"],
        "Both": ["Data Science", "Front-End", "App Development", "LLM"]
    },
    career_goal: {
        "Job": ["Java Full-Stack", "Back-End", "Cloud Engineering", "AI Engineering", "LLM", "AWS"],
        "Freelancing": ["UI/UX Design", "Front-End", "Prompt Engineering", "App Development"],
        "Startup": ["Blockchain", "Rust Blockchain Development", "AI Agents", "LLM", "Python"]
    },
    earning_goal: {
        "<3 months": ["Front-End", "UI/UX Design", "Python", "SQL"],
        "3-6 months": ["Java Full-Stack", "App Development", "Cloud Engineering", "AWS"],
        "6+ months": ["AI Engineering", "MLOps", "Data Science", "Blockchain", "LLM", "Rust Blockchain Development"]
    },
    budget: {
        "Free": ["UI/UX Design", "Prompt Engineering", "Python", "SQL"],
        "<50": ["Front-End", "Java Full-Stack", "SQL", "App Development"],
        ">50": ["AI Engineering", "MLOps", "Blockchain", "Rust Blockchain Development", "LLM", "AWS"]
    },
    creative_analytical: {
        "Creative": ["UI/UX Design", "Front-End", "Game Development", "App Development"],
        "Analytical": ["Data Science", "SQL", "AI Engineering", "LLM", "Cloud Engineering"],
        "Both": ["Java Full-Stack", "App Development", "AI Agents", "LLM", "AWS"]
    },
    math_skill: {
        "Low": ["UI/UX Design", "Prompt Engineering"],
        "Medium": ["Front-End", "App Development", "Python", "SQL"],
        "High": ["AI Engineering", "Data Science", "MLOps", "Blockchain", "LLM", "Rust Blockchain Development"]
    },
    problem_solving: {
        "Yes": ["AI Engineering", "Data Science", "Cloud Engineering", "Blockchain", "LLM", "AWS"],
        "No": ["UI/UX Design", "Prompt Engineering"],
        "Sometimes": ["Front-End", "App Development", "Python"]
    },
    industry_preference: {
        "Tech": ["AI Engineering", "Java Full-Stack", "Cloud Engineering", "LLM", "AWS"],
        "Finance": ["Blockchain", "Rust Blockchain Development", "Data Science", "LLM", "SQL"],
        "Healthcare": ["AI Agents", "Python", "Data Science", "LLM", "AWS"],
        "Education": ["UI/UX Design", "Front-End", "Prompt Engineering", "LLM"],
        "Design": ["UI/UX Design", "Front-End", "Game Development"]
    },
    challenge_handling: {
        "Give up quickly": ["UI/UX Design", "Prompt Engineering"],
        "Try to solve": ["Front-End", "App Development", "Python", "SQL"],
        "Enjoy solving": ["AI Engineering", "Data Science", "Blockchain", "LLM", "AWS"]
    },
    remote_work: {
        "Yes": ["Front-End", "UI/UX Design", "AI Agents", "Python", "LLM", "AWS"],
        "No": ["Cloud Engineering", "Java Full-Stack", "Cyber Security"],
        "Doesn't matter": ["AI Engineering", "Data Science", "LLM"]
    },
    salary_priority: {
        "Very Important": ["AI Engineering", "Cloud Engineering", "Blockchain", "LLM", "AWS"],
        "Somewhat Important": ["Front-End", "Data Science", "Java Full-Stack", "SQL"],
        "Not Important": ["UI/UX Design", "Prompt Engineering", "Game Development"]
    }
};



function recommendSkills(userAnswers) {
    const scoreMap = {};

    // Initialize all skills with 0
    const allSkills = [
        "Front-End", "Back-End", "AI Engineering", "Data Science", "MLOps",
        "LLM", "Prompt Engineering", "Java Full-Stack", "Cyber Security", "Game Development",
        "App Development", "UI/UX Design", "Cloud Engineering", "Blockchain",
        "Rust Blockchain Development", "Python", "SQL", "AI Agents", "AWS"
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





app.get("/recommend/ai", async (req, res) => {
    try {
        const recommendedSkills = recommendSkills(userAnswers);
        console.log(recommendedSkills);

        const skill1Card = await Card.findOne({ skill: recommendedSkills[0] });
        const skill2Card = await Card.findOne({ skill: recommendedSkills[1] });
        const skill3Card = await Card.findOne({ skill: recommendedSkills[2] });

        res.render("recommendAi.ejs", { recommendedSkills, skill1Card, skill2Card, skill3Card });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
});







// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

