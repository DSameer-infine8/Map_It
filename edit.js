const skillMapping = {
    age: {
        "18-24": ["Front-End", "UI/UX Designer", "Game Development"],
        "25-35": ["Back-End", "Data Science", "Cloud Engineer"],
        "35+": ["Project Manager", "Cloud Engineer", "Cyber Security"]
    },
    education: {
        "IT": ["Front-End", "Back-End", "Java Full-Stack", "Data Science", "Cloud Engineer", "Cyber Security"],
        "Non-IT": ["UI/UX Designer", "Prompt Engineering", "AI Agents"]
    },
    profession: {
        "Student": ["Front-End", "UI/UX Designer", "Game Development", "App Development"],
        "IT Professional": ["Back-End", "Java Full-Stack", "Cloud Engineer", "Cyber Security"],
        "Non-IT Professional": ["Prompt Engineering", "UI/UX Designer", "AI Agents"],
        "Freelancer": ["UI/UX Designer", "App Development", "Front-End", "Prompt Engineering"]
    },
    coding_experience: {
        "None": ["UI/UX Designer", "Prompt Engineering"],
        "Beginner": ["Front-End", "Python", "App Development"],
        "Intermediate": ["Back-End", "Java Full-Stack", "Cloud Engineer", "SQL"],
        "Advanced": ["AI Engineering", "MLOps", "Data Science", "Rust Blockchain Developer", "Block-Chain Developer"]
    },
    tools: {
        "HTML/CSS/JS": ["Front-End", "UI/UX Designer", "Game Development"],
        "Python": ["Data Science", "AI Engineering", "AI Agents", "MLOps"],
        "Java": ["Java Full-Stack", "Back-End", "App Development"],
        "SQL": ["Data Science", "Back-End", "AI Engineering"],
        "Cloud": ["Cloud Engineer", "MLOps", "AI Agents"],
        "UI/UX Tools": ["UI/UX Designer", "Front-End"],
        "None": ["Prompt Engineering", "UI/UX Designer"]
    },
    project_experience: {
        "No Projects": ["UI/UX Designer", "Prompt Engineering"],
        "Mini Projects": ["Front-End", "App Development", "Python"],
        "1-2 Projects": ["Back-End", "Java Full-Stack", "Data Science"],
        "Professional Projects": ["Cloud Engineer", "AI Engineering", "Block-Chain Developer", "Rust Blockchain Developer"]
    },
    time_commitment: {
        "<5": ["Prompt Engineering", "UI/UX Designer"],
        "5-10": ["Front-End", "Python", "App Development"],
        "10+": ["AI Engineering", "Data Science", "Cloud Engineer", "MLOps", "Block-Chain Developer"]
    },
    learning_style: {
        "Visual": ["UI/UX Designer", "Front-End", "Game Development"],
        "Reading": ["Back-End", "Rust Blockchain Developer", "SQL"],
        "Hands-on": ["AI Engineering", "Data Science", "Cloud Engineer", "App Development"]
    },
    interest_area: {
        "Web Development": ["Front-End", "Back-End", "Java Full-Stack", "UI/UX Designer"],
        "Data Science": ["Data Science", "AI Engineering", "MLOps", "AI Agents"],
        "Mobile Apps": ["App Development", "Front-End"],
        "Cloud Computing": ["Cloud Engineer", "MLOps"],
        "UI/UX Design": ["UI/UX Designer", "Front-End"]
    },
    work_preference: {
        "Alone": ["Prompt Engineering", "UI/UX Designer", "Python"],
        "Team": ["Cloud Engineer", "AI Engineering", "Java Full-Stack"],
        "Both": ["Data Science", "Front-End", "App Development"]
    },
    career_goal: {
        "Job": ["Java Full-Stack", "Back-End", "Cloud Engineer", "AI Engineering"],
        "Freelancing": ["UI/UX Designer", "Front-End", "Prompt Engineering", "App Development"],
        "Startup": ["Block-Chain Developer", "Rust Blockchain Developer", "AI Agents"]
    },
    earning_goal: {
        "<3 months": ["Front-End", "UI/UX Designer", "Python"],
        "3-6 months": ["Java Full-Stack", "App Development", "Cloud Engineer"],
        "6+ months": ["AI Engineering", "MLOps", "Data Science", "Block-Chain Developer"]
    },
    budget: {
        "Free": ["UI/UX Designer", "Prompt Engineering", "Python"],
        "<50": ["Front-End", "Java Full-Stack", "SQL"],
        ">50": ["AI Engineering", "MLOps", "Block-Chain Developer", "Rust Blockchain Developer"]
    },
    creative_analytical: {
        "Creative": ["UI/UX Designer", "Front-End", "Game Development"],
        "Analytical": ["Data Science", "SQL", "AI Engineering"],
        "Both": ["Java Full-Stack", "App Development", "AI Agents"]
    },
    math_skill: {
        "Low": ["UI/UX Designer", "Prompt Engineering"],
        "Medium": ["Front-End", "App Development", "Python"],
        "High": ["AI Engineering", "Data Science", "MLOps", "Block-Chain Developer"]
    },
    problem_solving: {
        "Yes": ["AI Engineering", "Data Science", "Cloud Engineer", "Block-Chain Developer"],
        "No": ["UI/UX Designer", "Prompt Engineering"],
        "Sometimes": ["Front-End", "App Development"]
    },
    industry_preference: {
        "Tech": ["AI Engineering", "Java Full-Stack", "Cloud Engineer"],
        "Finance": ["Block-Chain Developer", "Rust Blockchain Developer", "Data Science"],
        "Healthcare": ["AI Agents", "Python", "Data Science"],
        "Education": ["UI/UX Designer", "Front-End", "Prompt Engineering"],
        "Design": ["UI/UX Designer", "Front-End", "Game Development"]
    },
    challenge_handling: {
        "Give up quickly": ["UI/UX Designer", "Prompt Engineering"],
        "Try to solve": ["Front-End", "App Development", "Python"],
        "Enjoy solving": ["AI Engineering", "Data Science", "Block-Chain Developer"]
    },
    remote_work: {
        "Yes": ["Front-End", "UI/UX Designer", "AI Agents", "Python"],
        "No": ["Cloud Engineer", "Java Full-Stack"],
        "Doesn't matter": ["AI Engineering", "Data Science"]
    },
    salary_priority: {
        "Very Important": ["AI Engineering", "Cloud Engineer", "Block-Chain Developer"],
        "Somewhat Important": ["Front-End", "Data Science", "Java Full-Stack"],
        "Not Important": ["UI/UX Designer", "Prompt Engineering"]
    }
};