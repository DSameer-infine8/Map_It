const dotenv = require("dotenv");
dotenv.config();
const mongoURL = process.env.mongoURL;

const mongoose = require("mongoose");
const card = require("./models/roadmap");

const main = async () => {
    await mongoose.connect(mongoURL);
}

main().then(() => { console.log("Connection Successful") }).catch((err) => { console.log(err) });


card.insertMany([
    {
        skill_name: "Front-End",
        type: "Role-Based", // e.g., "frontend", "backend"
        desc: "Master the art of building beautiful, responsive, and interactive user interfaces using HTML, CSS, JavaScript, and modern frameworks like React.",
        months: 5,
        NumUsers: 100,
        technologies: ["HTML", "CSS", "JavaScript", "React.js"],
        roadmap: [{
            title: "Front-End Developer Roadmap",
            goal: "Become a Job-Ready Front-End Developer",
            levels: [
                {
                    level: "0",
                    title: "Prerequisites",
                    topics: [
                        "Basic Computer Skills (file management, using IDEs like VS Code, typing efficiently)",
                        "Internet & Browser Understanding (DNS, HTTP/HTTPS, domain names, how websites work)",
                        "Typing Speed (Aim for 40+ WPM)"
                    ]
                },
                {
                    level: "1",
                    title: "Web Fundamentals (HTML, CSS, JS)",
                    topics: [
                        {
                            HTML5: [
                                "Semantic Tags (<article>, <section>, <nav>)",
                                "Forms and Validations",
                                "Media (<audio>, <video>)",
                                "Meta tags (SEO basics)",
                                "Accessibility (aria-*, alt text)"
                            ]
                        },
                        {
                            CSS3: [
                                "Box Model",
                                "Positioning (absolute, relative, etc.)",
                                "Flexbox & Grid",
                                "Pseudo-classes and Elements",
                                "Media Queries (Responsive Design)",
                                "CSS Units (em, rem, %, vw, vh)",
                                "CSS Variables"
                            ]
                        },
                        {
                            "JavaScript (ES6+)": [
                                "Variables (let, const, var)",
                                "Data Types & Operators",
                                "Functions (arrow, callbacks, IIFE)",
                                "Arrays & Objects",
                                "Loops & Conditions",
                                "DOM Manipulation (querySelector, addEventListener)",
                                "Events & Event Delegation",
                                "JSON & LocalStorage",
                                "Fetch API (basic API calls)",
                                "Error Handling (try/catch)"
                            ]
                        },
                        {
                            "Tools to Learn": [
                                "Visual Studio Code",
                                "Live Server Extension",
                                "Chrome DevTools"
                            ]
                        }
                    ]
                },
                {
                    level: "2",
                    title: "Version Control & GitHub",
                    topics: [
                        "Git Basics (init, add, commit, push, pull, clone)",
                        "Branching & Merging",
                        "Pull Requests",
                        "GitHub Profile Optimization",
                        "Hosting via GitHub Pages"
                    ]
                },
                {
                    level: "3",
                    title: "Advanced Styling (UI/UX)",
                    topics: [
                        {
                            "CSS Preprocessors": ["SASS / SCSS"]
                        },
                        {
                            "CSS Frameworks": ["Tailwind CSS", "Bootstrap"]
                        },
                        {
                            "Design Systems & UI Patterns": [
                                "Responsive and Mobile-First Design",
                                "Atomic Design",
                                "Design Tokens"
                            ]
                        },
                        {
                            "Tools to Learn": [
                                "Figma (UI Design, Prototyping)",
                                "Adobe XD (optional)",
                                "Canva (for graphics/UI)"
                            ]
                        }
                    ]
                },
                {
                    level: "4",
                    title: "JavaScript Mastery & Modern Frontend",
                    topics: [
                        {
                            "ES6+ Advanced Topics": [
                                "Destructuring, Spread/Rest",
                                "Promises, async/await",
                                "Modules (import/export)",
                                "Closures & Scope",
                                "Higher-Order Functions",
                                "Array Methods (map, filter, reduce)"
                            ]
                        },
                        {
                            "Package Managers": ["npm", "yarn (optional)"]
                        },
                        {
                            "Module Bundlers & Tools": ["Vite", "Parcel / Webpack (basic idea)"]
                        }
                    ]
                },
                {
                    level: "5",
                    title: "React.js (Primary Frontend Library)",
                    topics: [
                        {
                            "Core React Concepts": [
                                "JSX & Component Structure",
                                "Functional Components & Hooks",
                                "State & Props",
                                "useEffect, useState, useRef",
                                "Component Communication",
                                "Conditional Rendering",
                                "Lists & Keys"
                            ]
                        },
                        {
                            "Advanced React": [
                                "Context API",
                                "Custom Hooks",
                                "React Router (v6+)",
                                "Performance Optimization",
                                "Lazy Loading, Suspense"
                            ]
                        },
                        {
                            "State Management": [
                                "Redux Toolkit (Industry Standard)",
                                "Zustand (lightweight alt)"
                            ]
                        },
                        {
                            "Tools to Learn": [
                                "React Developer Tools (Chrome extension)",
                                "ESLint + Prettier"
                            ]
                        }
                    ]
                },
                {
                    level: "6",
                    title: "RESTful APIs & Backend Integration",
                    topics: [
                        "HTTP Methods: GET, POST, PUT, DELETE",
                        "Fetch API / Axios",
                        "API Status Codes",
                        "Authentication Tokens (JWT)",
                        "Consuming Public APIs (e.g., GitHub, OpenWeather)"
                    ]
                },
                {
                    level: "7",
                    title: "Industry Tools & Practices",
                    topics: [
                        {
                            "Build Tools": ["Vite / Webpack", "Babel", "ESlint, Prettier"]
                        },
                        {
                            "DevOps Basics": ["GitHub Actions", "Netlify", "Vercel", "Environment Variables"]
                        },
                        {
                            "Browser Compatibility": [
                                "Polyfills",
                                "Testing Across Browsers (BrowserStack, manual testing)"
                            ]
                        },
                        {
                            "Performance": [
                                "Lighthouse Audit",
                                "Lazy Loading",
                                "Debouncing/Throttling",
                                "Image Optimization (WebP)"
                            ]
                        }
                    ]
                },
                {
                    level: "8",
                    title: "Testing",
                    topics: [
                        {
                            "Testing Libraries": [
                                "Jest (Unit Testing)",
                                "React Testing Library (Component Testing)",
                                "Cypress (E2E Testing)"
                            ]
                        }
                    ]
                },
                {
                    level: "9",
                    title: "Component Libraries & UI Kits",
                    topics: [
                        "Material UI",
                        "Shadcn UI (for Tailwind + Radix UI)",
                        "Chakra UI",
                        "Ant Design"
                    ]
                },
                {
                    level: "10",
                    title: "Web Accessibility (A11y) & SEO",
                    topics: [
                        {
                            "Accessibility": [
                                "Keyboard Navigation",
                                "ARIA Roles",
                                "Semantic HTML"
                            ]
                        },
                        {
                            "SEO Basics": [
                                "Meta Tags",
                                "Sitemap & Robots.txt",
                                "Open Graph Tags"
                            ]
                        }
                    ]
                },
                {
                    level: "11",
                    title: "Portfolio, Resume & Job Hunt",
                    topics: [
                        {
                            "Portfolio Must-Haves": [
                                "3–5 polished projects",
                                "Mobile responsive",
                                "Hosted (Vercel/Netlify)",
                                "GitHub linked",
                                "About, Contact, Resume Sections"
                            ]
                        },
                        {
                            "Projects to Build": [
                                "Responsive Multi-Page Website",
                                "Dashboard UI (with charts)",
                                "E-commerce frontend (React)",
                                "Weather App (API usage)",
                                "Blog Website (React Router, CMS or JSON)"
                            ]
                        },
                        {
                            "Resume Tips": [
                                "1 Page Max",
                                "Skill-based bullet points",
                                "Project links & GitHub included"
                            ]
                        },
                        {
                            "LinkedIn": [
                                "Banner + Profile Image",
                                "Catchy Headline",
                                "Regular Posts about your learning"
                            ]
                        }
                    ]
                },
                {
                    level: "Bonus",
                    title: "Learn TypeScript",
                    topics: [
                        "Static Typing in JS",
                        "Interfaces, Types",
                        "TypeScript with React (tsconfig, props types)"
                    ]
                }
            ],
            tools_and_software: {
                "Code Editor": ["VS Code"],
                "Browser": ["Chrome", "Firefox"],
                "Design": ["Figma"],
                "Version Control": ["Git", "GitHub"],
                "Hosting": ["Vercel", "Netlify"],
                "Others": ["Postman", "Lighthouse", "Chrome DevTools"]
            },
            timeline: [
                { week: "1–2", focus: "HTML, CSS" },
                { week: "3–5", focus: "JavaScript (Basics to Intermediate)" },
                { week: "6–7", focus: "Git, GitHub, Responsive Design" },
                { week: "8–10", focus: "Advanced JS, DOM, APIs" },
                { week: "11–13", focus: "React (Fundamentals + Routing + Hooks)" },
                { week: "14–15", focus: "Projects" },
                { week: "16–18", focus: "Redux, Component Libraries, SEO" },
                { week: "19–20", focus: "Testing, Accessibility, Final Portfolio" },
                { week: "21+", focus: "Apply for Jobs, Network on LinkedIn" }
            ]
        }
        ]

    }
    ,

    {
        skill_name: "Back-End",
        type: "Role- Based",
        desc: "Become a Job-Ready Back-End Developer using JavaScript, Node.js, Express, databases, testing, and deployment.",
        months: 6,
        NumUsers: 0,
        technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "PostgreSQL"],
        roadmap: [
            {
                title: "Back-End Developer Roadmap (JavaScript - Node.js)",
                goal: "Become a Job-Ready Back-End Developer",
                levels: [
                    {
                        level: "0",
                        title: "Prerequisites",
                        topics: [
                            "Computer Basics (File system, OS, IDEs like VS Code, terminals)",
                            "Command Line (cd, ls, mkdir, rm, etc.)",
                            "Typing Speed (40+ WPM)",
                            "Understanding How the Web Works (HTTP/S, DNS, IP, domain, server, client, browser)",
                            "Internet Protocols (HTTP Methods, Status Codes, SSL, Cookies, Headers)"
                        ]
                    },
                    {
                        level: "1",
                        title: "Programming Language: JavaScript (Node.js)",
                        topics: [
                            {
                                "Core Language Concepts": [
                                    "Syntax, Variables, Data Types",
                                    "Control Structures (loops, conditions)",
                                    "Functions (declaration, parameters, scope)",
                                    "Arrays, Objects",
                                    "String Manipulation",
                                    "Error Handling",
                                    "OOP (Classes, Inheritance, Encapsulation)",
                                    "File I/O",
                                    "Modules/Packages"
                                ]
                            },
                            {
                                Frameworks: [
                                    "Node.js with Express"
                                ]
                            }
                        ]
                    },
                    {
                        level: "2",
                        title: "Databases & Storage",
                        topics: [
                            {
                                "Relational Databases (SQL)": [
                                    "PostgreSQL",
                                    "MySQL",
                                    "SQLite"
                                ]
                            },
                            {
                                "NoSQL Databases": [
                                    "MongoDB",
                                    "Redis"
                                ]
                            },
                            {
                                Concepts: [
                                    "Database Schema Design",
                                    "CRUD Operations",
                                    "Joins (SQL)",
                                    "Indexes & Optimization",
                                    "Aggregations",
                                    "Data Relationships (1:1, 1:N, M:N)",
                                    "Connection from code (ORM or Drivers)"
                                ]
                            }
                        ]
                    },
                    {
                        level: "3",
                        title: "Server, APIs & Frameworks",
                        topics: [
                            "HTTP Server Handling (Express.js)",
                            "REST APIs: HTTP Methods, Route Design, RESTful Principles",
                            "Path vs Query Params",
                            "Status Codes (200, 201, 400, 404, 500, etc.)",
                            "API Documentation (Swagger / Postman)",
                            "Authentication & Authorization (JWT, OAuth2, Cookies & Sessions)",
                            "Middleware: Logging, Error Handling, Auth Middleware, Rate Limiting"
                        ]
                    },
                    {
                        level: "4",
                        title: "Security & Best Practices",
                        topics: [
                            "Hashing Passwords (bcrypt)",
                            "Environment Variables (.env)",
                            "Helmet.js",
                            "Input Validation (Joi, express-validator)",
                            "SQL Injection, XSS, CSRF Protection",
                            "HTTPS & SSL Basics",
                            "CORS",
                            "Security Headers"
                        ]
                    },
                    {
                        level: "5",
                        title: "Development Tools & Ecosystem",
                        topics: [
                            {
                                "Tool Type": {
                                    "Code Editor": "Visual Studio Code",
                                    "Terminal Tools": "Bash, Zsh",
                                    "Version Control": "Git & GitHub",
                                    "API Clients": "Postman, Insomnia",
                                    "Monitoring": "Winston, Morgan, PM2",
                                    "Linting & Formatting": "ESLint, Prettier"
                                }
                            }
                        ]
                    },
                    {
                        level: "6",
                        title: "Deployment, DevOps & CI/CD",
                        topics: [
                            {
                                "Hosting Providers": [
                                    "Render",
                                    "Railway",
                                    "Vercel",
                                    "DigitalOcean",
                                    "AWS"
                                ]
                            },
                            {
                                "Deployment Skills": [
                                    "Running Servers (Node)",
                                    "PM2",
                                    "Nginx (as reverse proxy)",
                                    "Load Balancing Concepts"
                                ]
                            },
                            {
                                "CI/CD Tools": [
                                    "GitHub Actions",
                                    "Docker",
                                    "Basic Shell Scripting"
                                ]
                            }
                        ]
                    },
                    {
                        level: "7",
                        title: "ORMs & Migrations",
                        topics: [
                            {
                                "SQL ORM": [
                                    "Sequelize",
                                    "Prisma"
                                ]
                            },
                            {
                                "NoSQL ODM": [
                                    "Mongoose"
                                ]
                            },
                            {
                                Concepts: [
                                    "Migrations & Rollbacks",
                                    "Model Relationships",
                                    "Query Builders"
                                ]
                            }
                        ]
                    },
                    {
                        level: "8",
                        title: "Testing & Debugging",
                        topics: [
                            "Unit Testing (Jest, Mocha)",
                            "Integration Testing",
                            "Test-Driven Development (TDD)",
                            "Debugging using IDE, Console, Logs",
                            "Postman/Newman API Tests"
                        ]
                    },
                    {
                        level: "9",
                        title: "Project Structure & Architecture",
                        topics: [
                            "MVC (Model-View-Controller)",
                            "Service/Repository Pattern",
                            "Clean Architecture",
                            "Folder Naming Conventions",
                            "Code Quality: DRY, KISS, SOLID",
                            "Code Reviews"
                        ]
                    },
                    {
                        level: "10",
                        title: "WebSockets & Real-Time Apps (Optional)",
                        topics: [
                            "Socket.io",
                            "Use cases: Chat apps, Live dashboards"
                        ]
                    },
                    {
                        level: "11",
                        title: "Extra Concepts to Stand Out",
                        topics: [
                            "GraphQL Basics (Apollo Server)",
                            "Caching (Redis)",
                            "Message Brokers (RabbitMQ, Kafka)",
                            "Background Jobs (BullMQ)",
                            "Rate Limiting (express-rate-limit)",
                            "Cron Jobs (node-cron)"
                        ]
                    },
                    {
                        level: "12",
                        title: "Portfolio, Resume & Job Preparation",
                        topics: [
                            {
                                "Portfolio Projects": [
                                    "RESTful API (CRUD app, e.g., Blog)",
                                    "Auth System with JWT",
                                    "API + DB + Login + Deployment",
                                    "E-commerce Backend",
                                    "Chat Server (WebSocket)",
                                    "Job Portal Backend"
                                ]
                            },
                            {
                                "Resume & GitHub Tips": [
                                    "Keep resume 1 page",
                                    "Highlight APIs built, tools used, deployments",
                                    "Star your best GitHub repos",
                                    "Write READMEs for projects"
                                ]
                            },
                            {
                                "LinkedIn & Networking": [
                                    "Post your learning progress",
                                    "Connect with developers",
                                    "Ask for feedback on projects"
                                ]
                            }
                        ]
                    },
                    {
                        level: "Bonus",
                        title: "Learn TypeScript (For Node.js Developers)",
                        topics: [
                            "Typing Express Middleware",
                            "Interfaces, Types, Generics",
                            "TS with ORM (Prisma, Sequelize)",
                            "tsconfig.json configuration"
                        ]
                    }
                ],
                tools_and_software: {
                    "Code Editor": ["Visual Studio Code"],
                    "Version Control": ["Git", "GitHub"],
                    "API Testing": ["Postman", "Insomnia"],
                    "Deployment": ["Render", "Railway", "DigitalOcean", "AWS"],
                    "Containers": ["Docker"],
                    "Monitoring": ["PM2", "Winston", "LogRocket"],
                    "Database GUI": ["pgAdmin", "Mongo Compass"],
                    "Documentation": ["Swagger", "Postman Docs"],
                    "Others": ["GitHub Actions", "Nginx", "Docker Hub"]
                },
                timeline: [
                    { week: "1–2", focus: "Language Basics (JavaScript)" },
                    { week: "3–4", focus: "Git, CLI, HTTP, REST APIs" },
                    { week: "5–6", focus: "Express.js + Routing + Middleware" },
                    { week: "7–8", focus: "Database Integration & CRUD" },
                    { week: "9–10", focus: "Authentication, JWT, API Testing" },
                    { week: "11–12", focus: "Project 1: Blog API" },
                    { week: "13–14", focus: "Docker, Deployment, GitHub Actions" },
                    { week: "15–16", focus: "Project 2: Auth + DB + Deploy" },
                    { week: "17–18", focus: "Testing, Clean Architecture" },
                    { week: "19–20", focus: "Real-time, Extra Features, Final Portfolio" },
                    { week: "21+", focus: "Apply to Jobs + Contribute to Open Source" }
                ]
            }
        ]
    },
    {
        skill_name: "AI Engineer",
        type: "Role-Based",
        desc: "Become a Job-Ready AI Engineer by mastering machine learning, deep learning, data processing, model deployment, and AI integration in production systems.",
        months: 8,
        NumUsers: 0,
        technologies: ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch", "FastAPI", "Docker", "AWS/GCP"],
        roadmap: [
            {
                title: "AI Engineer Roadmap",
                goal: "Become a Job-Ready AI Engineer",
                levels: [
                    {
                        level: "0",
                        title: "Prerequisites",
                        topics: [
                            "Computer Science Fundamentals (DSA, OOP)",
                            "Mathematics: Linear Algebra, Calculus, Probability, Statistics",
                            "Typing Speed (40+ WPM)",
                            "Command Line Basics (Linux CLI)",
                            "Git & GitHub Basics"
                        ]
                    },
                    {
                        level: "1",
                        title: "Programming & Data Manipulation",
                        topics: [
                            {
                                Python: [
                                    "Data Types, Loops, Functions, OOP",
                                    "List Comprehensions, Lambda Functions",
                                    "Error Handling, File I/O"
                                ]
                            },
                            {
                                Libraries: [
                                    "NumPy (arrays, broadcasting, matrix ops)",
                                    "Pandas (DataFrames, filtering, grouping)",
                                    "Matplotlib & Seaborn (Visualizations)"
                                ]
                            }
                        ]
                    },
                    {
                        level: "2",
                        title: "Machine Learning Fundamentals",
                        topics: [
                            {
                                Concepts: [
                                    "Supervised vs Unsupervised Learning",
                                    "Classification, Regression, Clustering",
                                    "Bias-Variance Tradeoff",
                                    "Model Evaluation Metrics (accuracy, F1-score, etc.)"
                                ]
                            },
                            {
                                Algorithms: [
                                    "Linear Regression",
                                    "Logistic Regression",
                                    "Decision Trees, Random Forests",
                                    "KNN, K-Means",
                                    "Naive Bayes, SVM"
                                ]
                            },
                            {
                                Tools: [
                                    "Scikit-learn (model training, pipelines, grid search)"
                                ]
                            }
                        ]
                    },
                    {
                        level: "3",
                        title: "Deep Learning & Neural Networks",
                        topics: [
                            {
                                "Core Concepts": [
                                    "Perceptron, Forward/Backward Propagation",
                                    "Activation Functions (ReLU, Sigmoid, etc.)",
                                    "Loss Functions, Optimizers (SGD, Adam)",
                                    "Overfitting & Regularization (Dropout, L2)"
                                ]
                            },
                            {
                                Frameworks: [
                                    "TensorFlow (Keras API)",
                                    "PyTorch"
                                ]
                            },
                            {
                                "Neural Nets": [
                                    "ANNs (Feedforward, MLP)",
                                    "CNNs (Image Processing)",
                                    "RNNs, LSTM, GRU (Sequence Modeling)"
                                ]
                            }
                        ]
                    },
                    {
                        level: "4",
                        title: "Natural Language Processing (NLP)",
                        topics: [
                            "Text Preprocessing (tokenization, stemming, lemmatization)",
                            "Bag of Words, TF-IDF, Word Embeddings (Word2Vec, GloVe)",
                            "Text Classification, Sentiment Analysis",
                            "RNNs & LSTMs for NLP",
                            "Transformers (BERT, GPT basics)",
                            "Hugging Face Transformers Library"
                        ]
                    },
                    {
                        level: "5",
                        title: "Computer Vision",
                        topics: [
                            "Image Preprocessing (resizing, normalization)",
                            "Convolutional Neural Networks (CNN)",
                            "Image Classification",
                            "Object Detection (YOLO, SSD, Faster R-CNN)",
                            "Transfer Learning (ResNet, VGG)",
                            "OpenCV (image manipulation)"
                        ]
                    },
                    {
                        level: "6",
                        title: "Model Optimization & Evaluation",
                        topics: [
                            "Cross-Validation",
                            "Hyperparameter Tuning (GridSearchCV, Optuna)",
                            "Learning Curves",
                            "Confusion Matrix, ROC-AUC",
                            "Precision-Recall Tradeoff",
                            "Model Explainability (SHAP, LIME)"
                        ]
                    },
                    {
                        level: "7",
                        title: "Model Deployment & Serving",
                        topics: [
                            {
                                "APIs & Frameworks": [
                                    "Flask or FastAPI for serving models",
                                    "REST API concepts"
                                ]
                            },
                            {
                                "Containers & Tools": [
                                    "Docker (build, run, push)",
                                    "Gunicorn, Uvicorn",
                                    "NGINX (basic reverse proxy)"
                                ]
                            },
                            {
                                "Cloud & Hosting": [
                                    "AWS (EC2, S3, Lambda)",
                                    "GCP (Vertex AI, App Engine)",
                                    "Render / Railway"
                                ]
                            }
                        ]
                    },
                    {
                        level: "8",
                        title: "MLOps & Production Systems",
                        topics: [
                            "Model Versioning (MLflow, DVC)",
                            "Monitoring (Prometheus, Grafana)",
                            "CI/CD (GitHub Actions)",
                            "Model Drift Detection",
                            "Data Pipelines (Apache Airflow, Prefect)",
                            "Experiment Tracking"
                        ]
                    },
                    {
                        level: "9",
                        title: "Advanced & Generative AI",
                        topics: [
                            "LLMs (GPT, T5, BERT, etc.)",
                            "Fine-tuning & Prompt Engineering",
                            "LangChain",
                            "Vector Databases (Pinecone, FAISS)",
                            "RAG (Retrieval-Augmented Generation)",
                            "AI Agents (AutoGPT, BabyAGI)"
                        ]
                    },
                    {
                        level: "10",
                        title: "Portfolio, Resume & Job Preparation",
                        topics: [
                            {
                                "Portfolio Projects": [
                                    "ML Model + Dashboard (e.g., Titanic, Housing Price)",
                                    "NLP Sentiment Classifier with API",
                                    "AI Resume Screener",
                                    "Chatbot using Transformers",
                                    "AI-Powered Image Classifier"
                                ]
                            },
                            {
                                "Resume & LinkedIn": [
                                    "Show metrics (accuracy, speed, dataset size)",
                                    "Include GitHub, Project Demos, Medium Blogs",
                                    "Connect with AI communities & attend meetups"
                                ]
                            }
                        ]
                    },
                    {
                        level: "Bonus",
                        title: "Research & Competitive Edge",
                        topics: [
                            "Read Papers (arXiv, PapersWithCode)",
                            "Participate in Kaggle Competitions",
                            "Join Open Source AI Projects",
                            "Understand Ethical AI, Fairness & Bias"
                        ]
                    }
                ],
                tools_and_software: {
                    Languages: ["Python"],
                    Libraries: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch"],
                    "Model Deployment": ["FastAPI", "Flask", "Docker"],
                    "Version Control": ["Git", "GitHub"],
                    MLOps: ["MLflow", "DVC", "Airflow"],
                    Visualization: ["Matplotlib", "Seaborn", "TensorBoard"],
                    IDEs: ["Jupyter Notebook", "VS Code", "Google Colab"],
                    Hosting: ["AWS", "GCP", "Render", "Railway"]
                },
                timeline: [
                    { week: "1–2", focus: "Python, NumPy, Pandas" },
                    { week: "3–5", focus: "ML Algorithms & Scikit-learn" },
                    { week: "6–9", focus: "Deep Learning: TensorFlow & PyTorch" },
                    { week: "10–12", focus: "NLP & Transformers" },
                    { week: "13–15", focus: "Computer Vision" },
                    { week: "16–18", focus: "Model Optimization & Explainability" },
                    { week: "19–21", focus: "Deployment: FastAPI + Docker + Cloud" },
                    { week: "22–24", focus: "MLOps Tools & Pipelines" },
                    { week: "25+", focus: "Portfolio, Resume, Job Applications" }
                ]
            }
        ]
    },

    {
        skill_name: "Data Scientist",
        type: "Role-Based",
        desc: "Master the skills required to become a successful Data Scientist, including statistics, machine learning, programming, and data storytelling using Python and industry tools.",
        months: 6,
        NumUsers: 75,
        technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "SQL", "TensorFlow"],
        roadmap: [
            {
                title: "Data Scientist Roadmap",
                goal: "Learn to collect, clean, analyze, model, and communicate data insights effectively.",
                levels: [
                    {
                        level: "Level 1",
                        title: "Foundations of Data Science",
                        topics: [
                            "What is Data Science?",
                            "Roles in Data Science: Analyst vs Scientist vs Engineer",
                            "Overview of Data Science Lifecycle",
                            "Python for Data Science Basics",
                            "Jupyter Notebooks & Google Colab"
                        ]
                    },
                    {
                        level: "Level 2",
                        title: "Statistics & Probability",
                        topics: [
                            "Descriptive Statistics (Mean, Median, Mode, Variance, etc.)",
                            "Probability Distributions",
                            "Baye's Theorem",
                            "Hypothesis Testing",
                            "Confidence Intervals",
                            "Sampling Techniques"
                        ]
                    },
                    {
                        level: "Level 3",
                        title: "Data Wrangling & EDA",
                        topics: [
                            "Data Cleaning (Handling Missing Values, Outliers)",
                            "Feature Engineering & Transformation",
                            "Exploratory Data Analysis with Pandas",
                            "Data Visualization with Matplotlib & Seaborn",
                            "Correlation & Causation"
                        ]
                    },
                    {
                        level: "Level 4",
                        title: "SQL & Databases",
                        topics: [
                            "Basic SQL (SELECT, WHERE, JOIN, GROUP BY)",
                            "Subqueries & Window Functions",
                            "PostgreSQL Basics",
                            "Data Warehousing Concepts",
                            "Connecting Python with SQL Databases"
                        ]
                    },
                    {
                        level: "Level 5",
                        title: "Machine Learning",
                        topics: [
                            "Supervised vs Unsupervised Learning",
                            "Regression (Linear, Logistic)",
                            "Decision Trees, Random Forests",
                            "KNN, K-Means Clustering",
                            "Model Evaluation (Accuracy, Precision, Recall, F1, ROC)",
                            "Cross-Validation & Overfitting",
                            "Scikit-learn Pipelines"
                        ]
                    },
                    {
                        level: "Level 6",
                        title: "Advanced Topics (Optional)",
                        topics: [
                            "Time Series Forecasting",
                            "NLP with NLTK or SpaCy",
                            "Deep Learning Basics with TensorFlow/Keras",
                            "Recommendation Systems",
                            "Big Data Tools (Spark, Hadoop)"
                        ]
                    },
                    {
                        level: "Level 7",
                        title: "Deployment & Communication",
                        topics: [
                            "Model Deployment (Flask, Streamlit)",
                            "Creating Dashboards with Plotly or PowerBI",
                            "Version Control with Git & GitHub",
                            "Data Storytelling & Presentation",
                            "Final Capstone Project"
                        ]
                    }
                ],
                tools_and_software: {
                    languages: ["Python", "SQL"],
                    libraries: ["NumPy", "Pandas", "Scikit-learn", "Seaborn", "Matplotlib", "TensorFlow"],
                    platforms: ["Jupyter", "Google Colab", "GitHub", "PostgreSQL", "Streamlit"]
                },
                timeline: [
                    { week: "Week 1-2", topics: ["Intro to Data Science", "Python Basics", "Jupyter/Colab"] },
                    { week: "Week 3-4", topics: ["Statistics Fundamentals", "Probability Concepts"] },
                    { week: "Week 5", topics: ["EDA", "Data Wrangling with Pandas"] },
                    { week: "Week 6", topics: ["Data Visualization with Matplotlib & Seaborn"] },
                    { week: "Week 7", topics: ["SQL Fundamentals", "Joins, Aggregations"] },
                    { week: "Week 8", topics: ["Machine Learning Intro", "Linear Regression"] },
                    { week: "Week 9", topics: ["Classification", "Model Evaluation"] },
                    { week: "Week 10", topics: ["Clustering", "K-Means", "Pipelines"] },
                    { week: "Week 11", topics: ["Capstone Part 1 - Data Collection & Cleaning"] },
                    { week: "Week 12", topics: ["Capstone Part 2 - ML Modeling & EDA"] },
                    { week: "Week 13", topics: ["Model Deployment with Streamlit or Flask"] },
                    { week: "Week 14", topics: ["Final Presentation & Data Storytelling"] }
                ]
            }
        ]
    },

    {
        skill_name: "MLOps Engineer",
        type: "Role-Based",
        desc: "Master the tools, practices, and systems to take machine learning models from research to production reliably and efficiently.",
        months: 7,
        NumUsers: 0,
        technologies: [
            "Python", "Docker", "Kubernetes", "MLflow", "DVC",
            "Airflow", "FastAPI", "TensorFlow", "Scikit-learn", "AWS/GCP"
        ],
        roadmap: [
            {
                title: "MLOps Engineer Roadmap",
                goal: "Become a Job-Ready MLOps Engineer",
                levels: [
                    {
                        level: "0",
                        title: "Prerequisites",
                        topics: [
                            "Basic ML Concepts (Model Training, Inference)",
                            "Python Programming",
                            "Linux CLI & Bash Scripting",
                            "Git & GitHub Basics",
                            "Understanding APIs and JSON"
                        ]
                    },
                    {
                        level: "1",
                        title: "DevOps Foundations",
                        topics: [
                            "CI/CD Concepts",
                            "Docker (images, containers, Dockerfiles)",
                            "Kubernetes (pods, services, deployments)",
                            "Cloud Basics (AWS/GCP/Azure)",
                            "Monitoring & Logging"
                        ]
                    },
                    {
                        level: "2",
                        title: "Model Training & Experiment Tracking",
                        topics: [
                            "ML Pipeline Design",
                            "Experiment Tracking with MLflow",
                            "Data Versioning with DVC",
                            "Hyperparameter Tuning",
                            "Reproducibility & Metadata Logging"
                        ]
                    },
                    {
                        level: "3",
                        title: "Orchestration & Workflow Automation",
                        topics: [
                            "Apache Airflow Basics",
                            "DAGs, Scheduling, Task Dependencies",
                            "Using Airflow for ML pipelines",
                            "Alternatives: Prefect, Kubeflow Pipelines"
                        ]
                    },
                    {
                        level: "4",
                        title: "Model Deployment",
                        topics: [
                            {
                                "Web Serving": [
                                    "FastAPI/Flask APIs for Model Serving",
                                    "Model Serialization: Pickle, ONNX, TorchScript"
                                ]
                            },
                            {
                                "Productionization": [
                                    "Containerizing Models with Docker",
                                    "Serving with Gunicorn/Uvicorn",
                                    "Reverse Proxy with NGINX"
                                ]
                            },
                            {
                                "Cloud Deployment": [
                                    "Deploy to AWS (EC2, Lambda, EKS)",
                                    "GCP App Engine or Vertex AI"
                                ]
                            }
                        ]
                    },
                    {
                        level: "5",
                        title: "Monitoring & Model Management",
                        topics: [
                            "Model Performance Monitoring",
                            "Prometheus + Grafana",
                            "Model Drift Detection",
                            "Data Quality Monitoring",
                            "Logging with ELK Stack"
                        ]
                    },
                    {
                        level: "6",
                        title: "Security, Scaling, and Best Practices",
                        topics: [
                            "Secrets Management (Vault, AWS Secrets Manager)",
                            "Rate Limiting, Authentication",
                            "Scaling APIs with Kubernetes & Load Balancers",
                            "Blue-Green Deployment, Canary Releases",
                            "Rollback & Fault Tolerance"
                        ]
                    },
                    {
                        level: "7",
                        title: "Portfolio & Projects",
                        topics: [
                            {
                                "Portfolio Ideas": [
                                    "ML Inference API with Monitoring Dashboard",
                                    "Airflow-Powered ML Pipeline with DVC & MLflow",
                                    "CI/CD Pipeline with GitHub Actions & Kubernetes",
                                    "Deploy ML Model on AWS with FastAPI + Docker"
                                ]
                            },
                            {
                                "Job Prep": [
                                    "Resume with CI/CD + Cloud Projects",
                                    "Highlight Automation, Monitoring, and Scaling",
                                    "Mock Interviews on System Design"
                                ]
                            }
                        ]
                    }
                ],
                tools_and_software: {
                    Languages: ["Python"],
                    Containers: ["Docker", "Kubernetes"],
                    Tracking: ["MLflow", "Weights & Biases", "DVC"],
                    Orchestration: ["Airflow", "Prefect"],
                    Serving: ["FastAPI", "Flask", "NGINX", "Gunicorn"],
                    Monitoring: ["Prometheus", "Grafana", "ELK Stack"],
                    CI_CD: ["GitHub Actions", "Jenkins"],
                    Cloud: ["AWS", "GCP", "Azure"],
                    Security: ["Vault", "IAM"],
                    IDEs: ["VS Code", "JupyterLab"]
                },
                timeline: [
                    { week: "1–2", focus: "DevOps Basics & Docker" },
                    { week: "3–5", focus: "Kubernetes & CI/CD" },
                    { week: "6–7", focus: "MLflow, DVC, Reproducibility" },
                    { week: "8–10", focus: "Airflow & Orchestration" },
                    { week: "11–13", focus: "Model Deployment & APIs" },
                    { week: "14–16", focus: "Monitoring & Drift Detection" },
                    { week: "17+", focus: "Portfolio Projects & Interviews" }
                ]
            }
        ]
    },

    {
        skill_name: "LLM Developer",
        type: "Role-Based",
        desc: "Specialize in building and integrating Large Language Models (LLMs) using state-of-the-art transformer architectures, fine-tuning techniques, and production-grade deployment systems.",
        months: 7,
        NumUsers: 0,
        technologies: [
            "Python", "Transformers", "Hugging Face", "LangChain", "FastAPI",
            "Vector DBs", "Docker", "OpenAI API", "LLM Fine-Tuning", "Streamlit"
        ],
        roadmap: [
            {
                title: "LLM Developer Roadmap",
                goal: "Become a Job-Ready LLM Developer",
                levels: [
                    {
                        level: "0",
                        title: "Foundations",
                        topics: [
                            "Python OOP + Functional Programming",
                            "Git & GitHub",
                            "APIs (REST, HTTP, JSON)",
                            "Basic Data Structures & Algorithms",
                            "Typing Speed, CLI (Linux)"
                        ]
                    },
                    {
                        level: "1",
                        title: "NLP & Transformers Fundamentals",
                        topics: [
                            {
                                "Core NLP": [
                                    "Tokenization, Lemmatization, POS tagging",
                                    "TF-IDF, Word2Vec, GloVe"
                                ]
                            },
                            {
                                "Transformer Basics": [
                                    "Attention Mechanism",
                                    "Positional Encoding",
                                    "Self-Attention, Multi-Head Attention",
                                    "BERT, GPT, T5 Architectures"
                                ]
                            },
                            {
                                "Frameworks": [
                                    "Hugging Face Transformers",
                                    "Datasets & Tokenizers Libraries"
                                ]
                            }
                        ]
                    },
                    {
                        level: "2",
                        title: "LLMs in Practice",
                        topics: [
                            "Using Pre-trained LLMs (OpenAI, Cohere, HuggingFace)",
                            "Prompt Engineering (Zero-shot, Few-shot, CoT)",
                            "Text Completion, Summarization, Classification",
                            "Fine-tuning vs. Adapter Tuning",
                            "Parameter-efficient tuning: LoRA, PEFT"
                        ]
                    },
                    {
                        level: "3",
                        title: "Building with LLM APIs",
                        topics: [
                            {
                                "API Usage": [
                                    "OpenAI, Anthropic, Hugging Face Inference APIs",
                                    "Prompt Templates & Caching",
                                    "Token Limits, Rate Limiting"
                                ]
                            },
                            {
                                "LangChain / LlamaIndex": [
                                    "Chains & Agents",
                                    "Memory & Context Management",
                                    "Tools & Toolkits (Google Search, Calculator, API Wrappers)"
                                ]
                            }
                        ]
                    },
                    {
                        level: "4",
                        title: "Retrieval-Augmented Generation (RAG)",
                        topics: [
                            "RAG Architecture & Use-Cases",
                            "Vector Databases (FAISS, Pinecone, Weaviate)",
                            "Document Chunking & Embeddings (OpenAI, SentenceTransformers)",
                            "Query + Retrieve + Generate Pipeline",
                            "Evaluation Metrics (Precision, Recall in RAG)"
                        ]
                    },
                    {
                        level: "5",
                        title: "LLM Applications & Interfaces",
                        topics: [
                            "Streamlit / Gradio UIs",
                            "Chatbots with History",
                            "Multi-modal Apps (Vision + LLM)",
                            "LangGraph / LangServe for production-ready apps"
                        ]
                    },
                    {
                        level: "6",
                        title: "LLM Deployment & Scaling",
                        topics: [
                            "FastAPI + LangChain Backend APIs",
                            "Containerization with Docker",
                            "GPU Hosting (RunPod, Replicate, AWS, GCP)",
                            "Security (API keys, Rate limiting, logging)",
                            "Serving Open Source Models (Mistral, LLaMA 2, Gemma)"
                        ]
                    },
                    {
                        level: "7",
                        title: "LLM Ops & Ethics",
                        topics: [
                            "Model Monitoring (Prompt Logs, Token Usage)",
                            "Versioning (Weights & Biases, DVC)",
                            "A/B Testing Prompts",
                            "Ethical Use of LLMs (Bias, Hallucination)",
                            "License Considerations for OSS models"
                        ]
                    },
                    {
                        level: "8",
                        title: "Portfolio & Real-World Projects",
                        topics: [
                            {
                                "Project Ideas": [
                                    "LLM-Powered Resume Assistant",
                                    "AI Writing Assistant using OpenAI + Streamlit",
                                    "Chatbot with Custom Knowledge Base (RAG)",
                                    "YouTube Summary Generator with Whisper + GPT",
                                    "LLM Plugin Interface (Tools/Agents)"
                                ]
                            },
                            {
                                "Career Prep": [
                                    "GitHub Repo + README for each project",
                                    "LinkedIn Profile Optimization",
                                    "Blog about your LLM learning (e.g., Medium, Hashnode)",
                                    "Mock Interviews & Resume Reviews"
                                ]
                            }
                        ]
                    }
                ],
                tools_and_software: {
                    Languages: ["Python"],
                    Libraries: ["Transformers", "LangChain", "LlamaIndex", "SentenceTransformers"],
                    Databases: ["FAISS", "Pinecone", "Chroma"],
                    UI_UX: ["Streamlit", "Gradio"],
                    API_Frameworks: ["FastAPI"],
                    Deployment: ["Docker", "RunPod", "AWS", "GCP"],
                    Monitoring: ["Weights & Biases", "PromptLayer"],
                    IDE_Notebooks: ["Jupyter", "VS Code", "Colab"]
                },
                timeline: [
                    { week: "1–2", focus: "Python + NLP Basics" },
                    { week: "3–5", focus: "Transformers + Hugging Face" },
                    { week: "6–7", focus: "Prompt Engineering + OpenAI APIs" },
                    { week: "8–9", focus: "LangChain + LlamaIndex" },
                    { week: "10–11", focus: "Vector DBs + RAG" },
                    { week: "12–13", focus: "LLM App Interfaces (Streamlit/Gradio)" },
                    { week: "14–15", focus: "Deployment with FastAPI + Docker" },
                    { week: "16–17", focus: "LLM Ops + Monitoring + Ethics" },
                    { week: "18+", focus: "Portfolio Projects + Resume Prep" }
                ]
            }
        ]
    },
    {
        skill_name: "Prompt Engineer",
        type: "Role-Based",
        desc: "Master the skills to craft high-quality prompts, integrate large language models into applications, and build AI-driven workflows.",
        months: 6,
        NumUsers: 0,
        technologies: ["Python", "JavaScript", "LangChain", "OpenAI API", "Hugging Face", "Vector DBs"],
        roadmap: [
            {
                title: "Prompt Engineer Roadmap",
                goal: "Become a Job-Ready Prompt Engineer",
                levels: [
                    {
                        level: "0",
                        title: "Fundamentals",
                        topics: [
                            "What is Prompt Engineering?",
                            "How LLMs work (basic Transformer intuition)",
                            "APIs vs LLMs vs Models vs Prompts",
                            "Use cases of Prompt Engineering"
                        ]
                    },
                    {
                        level: "1",
                        title: "Prompt Design Basics",
                        topics: [
                            "Instruction-based prompts",
                            "Zero-shot, One-shot, Few-shot learning",
                            "Role-based prompting",
                            "Chain-of-Thought prompting"
                        ]
                    },
                    {
                        level: "2",
                        title: "LLM Platforms & Tools",
                        topics: [
                            "OpenAI GPT models (gpt-3.5, gpt-4)",
                            "Anthropic Claude, Google Gemini",
                            "Hugging Face Transformers",
                            "Using OpenAI, Cohere, and Azure APIs"
                        ]
                    },
                    {
                        level: "3",
                        title: "Advanced Prompt Techniques",
                        topics: [
                            "Contextual embedding",
                            "Output formatting",
                            "Prompt injection & safety",
                            "Self-refining & recursive prompting"
                        ]
                    },
                    {
                        level: "4",
                        title: "LangChain & Workflow Orchestration",
                        topics: [
                            "What is LangChain",
                            "Agents and Tools",
                            "Chains and Memory",
                            "RAG (Retrieval-Augmented Generation)"
                        ]
                    },
                    {
                        level: "5",
                        title: "LLM App Development",
                        topics: [
                            "Build Chatbots with React + OpenAI",
                            "Prompt APIs with FastAPI / Flask",
                            "Streamlit for interactive UI",
                            "Pinecone or FAISS for vector search"
                        ]
                    },
                    {
                        level: "6",
                        title: "Evaluation & Optimization",
                        topics: [
                            "Automated prompt evaluation",
                            "A/B testing for LLM output",
                            "Latency, token cost analysis",
                            "Model fine-tuning vs prompt-tuning"
                        ]
                    },
                    {
                        level: "7",
                        title: "Job Prep & Portfolio",
                        topics: [
                            {
                                "Projects": [
                                    "Chatbot for mental health guidance",
                                    "Prompt-powered resume screener",
                                    "LLM-powered quiz generator",
                                    "Legal Q&A assistant",
                                    "Data-to-text report writer"
                                ]
                            },
                            {
                                "Resume & Outreach": [
                                    "Show examples via GitHub",
                                    "LinkedIn storytelling",
                                    "Contribute to open prompt repositories"
                                ]
                            }
                        ]
                    }
                ],
                tools_and_software: {
                    Languages: ["Python", "JavaScript"],
                    APIs: ["OpenAI", "Cohere", "Anthropic"],
                    Frameworks: ["LangChain", "LlamaIndex"],
                    VectorDBs: ["Pinecone", "FAISS"],
                    UI: ["Streamlit", "React"],
                    VersionControl: ["Git", "GitHub"],
                    Hosting: ["Vercel", "Render", "Hugging Face Spaces"]
                },
                timeline: [
                    { week: "1", focus: "Prompting Basics & Use Cases" },
                    { week: "2–3", focus: "Instruction & Role Prompting" },
                    { week: "4–5", focus: "APIs & LLM Models (OpenAI, Claude)" },
                    { week: "6–7", focus: "LangChain & Agents" },
                    { week: "8–9", focus: "RAG & Vector Search" },
                    { week: "10–11", focus: "LLM App Building" },
                    { week: "12", focus: "Evaluation, Cost, and Job Readiness" }
                ]
            }
        ]
    },
    {
        skill_name: "Java Full-Stack Developer",
        type: "Role-Based",
        desc: "Master both front-end and back-end Java development using Spring Boot, React, databases, and deployment tools to build scalable, enterprise-grade applications.",
        months: 7,
        NumUsers: 0,
        technologies: [
            "Java", "Spring Boot", "React", "HTML", "CSS", "JavaScript", "TypeScript",
            "MySQL", "MongoDB", "Docker", "Git", "AWS"
        ],
        roadmap: [
            {
                title: "Java Full-Stack Developer Roadmap",
                goal: "Become a Job-Ready Full-Stack Java Developer",
                levels: [
                    {
                        level: "0",
                        title: "Foundations & Prerequisites",
                        topics: [
                            "Basic Computer Science (DSA, OOP)",
                            "Git & GitHub",
                            "Typing (40+ WPM)",
                            "Basic Command Line & Shell Navigation"
                        ]
                    },
                    {
                        level: "1",
                        title: "Core Java Programming",
                        topics: [
                            {
                                "Java Basics": [
                                    "Data Types, Loops, Conditionals",
                                    "Classes, Objects, Inheritance, Interfaces",
                                    "Collections, Generics, Exception Handling"
                                ]
                            },
                            {
                                "Java Advanced": [
                                    "Streams & Lambda Expressions",
                                    "Multithreading & Concurrency",
                                    "JVM Internals, Memory Management"
                                ]
                            }
                        ]
                    },
                    {
                        level: "2",
                        title: "Frontend Web Development",
                        topics: [
                            {
                                "Web Fundamentals": [
                                    "HTML5 & CSS3",
                                    "Responsive Design, Flexbox, Grid",
                                    "JavaScript (ES6+), DOM Manipulation"
                                ]
                            },
                            {
                                "Frontend Framework": [
                                    "React Basics (JSX, Components, Props)",
                                    "Hooks (useState, useEffect)",
                                    "Routing (React Router)",
                                    "State Management (Context, Redux)"
                                ]
                            }
                        ]
                    },
                    {
                        level: "3",
                        title: "Backend Development with Spring Boot",
                        topics: [
                            {
                                "Spring Boot Basics": [
                                    "Spring MVC (Controllers, Services)",
                                    "REST APIs (CRUD endpoints)",
                                    "Request Mapping, Validation, Exception Handling"
                                ]
                            },
                            {
                                "Advanced Spring": [
                                    "Spring Security (JWT, OAuth2)",
                                    "Dependency Injection & Bean Lifecycle",
                                    "Spring Data JPA"
                                ]
                            }
                        ]
                    },
                    {
                        level: "4",
                        title: "Databases",
                        topics: [
                            {
                                "SQL": [
                                    "MySQL Basics: Joins, Group By, Subqueries",
                                    "Transactions & Indexing"
                                ]
                            },
                            {
                                "NoSQL": [
                                    "MongoDB CRUD Operations",
                                    "Schema Design Basics"
                                ]
                            },
                            "JPA + Hibernate Integration",
                            "Repository Pattern"
                        ]
                    },
                    {
                        level: "5",
                        title: "Full-Stack Integration",
                        topics: [
                            "Connecting Frontend & Backend",
                            "CORS, JSON APIs, REST principles",
                            "Axios/Fetch Integration",
                            "Form Handling, Authentication Flow"
                        ]
                    },
                    {
                        level: "6",
                        title: "Testing & Debugging",
                        topics: [
                            "JUnit & Mockito (Java Unit Testing)",
                            "React Testing Library",
                            "Postman & Swagger for API Testing",
                            "Logging & Debugging Strategies"
                        ]
                    },
                    {
                        level: "7",
                        title: "Deployment & DevOps Basics",
                        topics: [
                            {
                                "Deployment Tools": [
                                    "Docker (Containers & Dockerfiles)",
                                    "CI/CD Concepts (GitHub Actions)",
                                    "Build Tools: Maven/Gradle"
                                ]
                            },
                            {
                                "Cloud": [
                                    "AWS EC2 for Hosting",
                                    "S3 for Static Content",
                                    "Railway / Render Alternatives"
                                ]
                            }
                        ]
                    },
                    {
                        level: "8",
                        title: "Portfolio & Job Preparation",
                        topics: [
                            {
                                "Portfolio Projects": [
                                    "Task Manager App (Spring + React)",
                                    "Blog Platform",
                                    "E-commerce App with Payment Integration",
                                    "Admin Dashboard with Authentication"
                                ]
                            },
                            {
                                "Career Prep": [
                                    "Java Coding Challenges (LeetCode, HackerRank)",
                                    "Technical Resume, LinkedIn Optimization",
                                    "Mock Interviews, GitHub Cleanup"
                                ]
                            }
                        ]
                    }
                ],
                tools_and_software: {
                    Languages: ["Java", "JavaScript", "TypeScript"],
                    Frontend: ["React", "HTML", "CSS"],
                    Backend: ["Spring Boot", "JPA", "Hibernate"],
                    Databases: ["MySQL", "MongoDB"],
                    DevOps: ["Docker", "Git", "GitHub", "CI/CD"],
                    Testing: ["JUnit", "Mockito", "Postman", "Swagger"],
                    IDEs: ["VS Code", "IntelliJ IDEA"],
                    Hosting: ["AWS EC2", "Render", "Railway"]
                },
                timeline: [
                    { week: "1–2", focus: "Core Java Programming" },
                    { week: "3–5", focus: "Frontend: HTML, CSS, JavaScript, React" },
                    { week: "6–8", focus: "Backend: Spring Boot + REST APIs" },
                    { week: "9–10", focus: "Databases: MySQL + MongoDB" },
                    { week: "11–12", focus: "Integration + Auth Flow" },
                    { week: "13–14", focus: "Testing, Debugging, Best Practices" },
                    { week: "15–16", focus: "Deployment: Docker + AWS" },
                    { week: "17+", focus: "Portfolio Projects + Resume + Interview Prep" }
                ]
            }
        ]
    },
    {
        skill_name: "Cybersecurity Expert",
        type: "Role-Based",
        desc: "Become a Job-Ready Cybersecurity Expert by mastering networking, system security, ethical hacking, cloud security, and incident response.",
        months: 9,
        NumUsers: 0,
        technologies: [
            "Linux",
            "Wireshark",
            "Burp Suite",
            "Metasploit",
            "Python",
            "Nmap",
            "Kali Linux",
            "Splunk",
            "AWS Security",
            "SIEM"
        ],
        roadmap: [
            {
                title: "Cybersecurity Expert Roadmap",
                goal: "Become a Job-Ready Cybersecurity Expert",
                levels: [
                    {
                        level: "0",
                        title: "Fundamentals & Prerequisites",
                        topics: [
                            "Computer Networking Basics (TCP/IP, DNS, HTTP, etc.)",
                            "Operating Systems: Linux & Windows Internals",
                            "Command Line Basics (Bash & PowerShell)",
                            "Virtualization (VirtualBox, VMware)",
                            "Basic Programming (Python preferred)",
                            "Typing Speed, Git & GitHub Basics"
                        ]
                    },
                    {
                        level: "1",
                        title: "Networking & Security Essentials",
                        topics: [
                            {
                                Networking: [
                                    "OSI Model",
                                    "Subnets, IP Addressing",
                                    "Packet Analysis with Wireshark"
                                ]
                            },
                            {
                                Protocols: [
                                    "DNS, DHCP, ARP, ICMP",
                                    "NAT, VPN, Proxies"
                                ]
                            },
                            {
                                Tools: ["Wireshark", "Nmap", "tcpdump"]
                            }
                        ]
                    },
                    {
                        level: "2",
                        title: "System & Application Security",
                        topics: [
                            "Windows Security (Group Policy, Event Logs)",
                            "Linux Security (iptables, auditd)",
                            "Secure Software Development Lifecycle (SSDLC)",
                            "OWASP Top 10",
                            "Code Review & Secure Coding Practices"
                        ]
                    },
                    {
                        level: "3",
                        title: "Ethical Hacking & Penetration Testing",
                        topics: [
                            "Kali Linux & Metasploit Framework",
                            "Information Gathering (OSINT, Recon-ng)",
                            "Vulnerability Scanning (Nessus, OpenVAS)",
                            "Exploitation & Privilege Escalation",
                            "Post-Exploitation & Reporting",
                            "Web App Hacking (Burp Suite, SQLi, XSS, CSRF)"
                        ]
                    },
                    {
                        level: "4",
                        title: "Security Operations & Incident Response",
                        topics: [
                            "Security Information and Event Management (SIEM)",
                            "Splunk / ELK Stack",
                            "Log Analysis & Correlation",
                            "Threat Hunting",
                            "Incident Response Lifecycle",
                            "Forensics Basics"
                        ]
                    },
                    {
                        level: "5",
                        title: "Cloud & DevSecOps",
                        topics: [
                            "AWS/GCP Security Essentials",
                            "IAM, VPC Security, Security Groups",
                            "CloudTrail, GuardDuty, Config",
                            "Docker/Kubernetes Security",
                            "Infrastructure as Code (Terraform, IaC Scanning)",
                            "DevSecOps Pipelines"
                        ]
                    },
                    {
                        level: "6",
                        title: "Certifications & Career Building",
                        topics: [
                            "Certifications: CompTIA Security+, CEH, OSCP, CISSP",
                            "Building a Homelab",
                            "Capture The Flag (CTF) Platforms",
                            "Resume & LinkedIn Optimization",
                            "Creating a Cybersecurity Portfolio (Write-ups, GitHub, Demos)"
                        ]
                    },
                    {
                        level: "Bonus",
                        title: "Threat Intelligence & Research",
                        topics: [
                            "MITRE ATT&CK Framework",
                            "Threat Feeds & IOCs",
                            "Cyber Threat Intelligence (CTI)",
                            "Bug Bounty Programs",
                            "Dark Web Monitoring"
                        ]
                    }
                ],
                tools_and_software: {
                    OS: ["Kali Linux", "Ubuntu", "Windows 11 Pro"],
                    Tools: ["Wireshark", "Nmap", "Burp Suite", "Metasploit", "tcpdump"],
                    SIEM: ["Splunk", "ELK Stack"],
                    Cloud: ["AWS Security Hub", "GCP IAM"],
                    Languages: ["Python", "Bash", "PowerShell"],
                    DevSecOps: ["Terraform", "Docker", "Kubernetes", "GitHub Actions"]
                },
                timeline: [
                    { week: "1–2", focus: "Networking, Linux, Python" },
                    { week: "3–5", focus: "System Security & Tools (Nmap, Wireshark)" },
                    { week: "6–8", focus: "Ethical Hacking & Kali Linux" },
                    { week: "9–11", focus: "Web App Security & Pen Testing" },
                    { week: "12–14", focus: "SIEM, Threat Detection, Splunk" },
                    { week: "15–17", focus: "Cloud Security & DevSecOps" },
                    { week: "18–20", focus: "Certifications, Resume & Portfolio" },
                    { week: "21+", focus: "Advanced Threat Intelligence & CTFs" }
                ]
            }
        ]
    },

    {
        skill_name: "Game Developer",
        type: "Role-Based",
        desc: "Become a Job-Ready Game Developer by mastering game programming, 2D/3D game engines, graphics, physics, and deploying games to various platforms.",
        months: 8,
        NumUsers: 0,
        technologies: ["C#", "Unity", "Unreal Engine", "Blender", "Git", "VS Code", "Photoshop", "Firebase"],
        roadmap: [
            {
                title: "Game Developer Roadmap",
                goal: "Become a Job-Ready Game Developer",
                levels: [
                    {
                        level: "0",
                        title: "Fundamentals & Setup",
                        topics: [
                            "Basic Computer Science (OOP, DSA)",
                            "Math for Game Dev (Vectors, Matrices, Trigonometry)",
                            "Typing Speed (40+ WPM)",
                            "Git & GitHub",
                            "Install Unity / Unreal Engine",
                            "Basic Command Line"
                        ]
                    },
                    {
                        level: "1",
                        title: "Programming Essentials",
                        topics: [
                            {
                                "Core Language (C#)": [
                                    "Variables, Functions, Loops",
                                    "Classes, Inheritance, Polymorphism",
                                    "Events, Delegates, Coroutines"
                                ]
                            },
                            {
                                "Tools & IDE": [
                                    "Visual Studio / VS Code",
                                    "Unity Editor Overview",
                                    "Project Structure & Scripts"
                                ]
                            }
                        ]
                    },
                    {
                        level: "2",
                        title: "2D Game Development",
                        topics: [
                            "Sprites, Tilemaps, Animations",
                            "Player Movement & Input Handling",
                            "Collision Detection",
                            "Score System & UI Design",
                            "2D Physics (Gravity, Rigidbodies)",
                            "Mini-Project: Platformer or Top-down Shooter"
                        ]
                    },
                    {
                        level: "3",
                        title: "3D Game Development",
                        topics: [
                            "3D Objects, Prefabs, Lighting & Cameras",
                            "Character Controllers",
                            "3D Physics & Rigidbody System",
                            "NavMesh & Pathfinding",
                            "Basic AI for Enemies",
                            "Mini-Project: 3D Adventure Game"
                        ]
                    },
                    {
                        level: "4",
                        title: "Game Art & Animation",
                        topics: [
                            "2D Art Tools (Photoshop, Aseprite)",
                            "3D Modeling Basics (Blender)",
                            "Rigging & Skinning Characters",
                            "Animation Controller in Unity",
                            "Importing Assets from Blender"
                        ]
                    },
                    {
                        level: "5",
                        title: "Game Design Principles",
                        topics: [
                            "Game Loop & Game Mechanics",
                            "Level Design Basics",
                            "Balancing & Difficulty Curves",
                            "UI/UX in Games",
                            "Sound Design (Audio, Effects)"
                        ]
                    },
                    {
                        level: "6",
                        title: "Multiplayer & Networking",
                        topics: [
                            "Client-Server Architecture",
                            "Photon / Mirror Networking in Unity",
                            "Syncing Player States & Movement",
                            "Lobby, Matchmaking, and Chat",
                            "Firebase or PlayFab Integration"
                        ]
                    },
                    {
                        level: "7",
                        title: "Game Optimization & Testing",
                        topics: [
                            "Object Pooling",
                            "Frame Rate Optimization",
                            "Profiling Tools",
                            "Bug Tracking & Playtesting",
                            "Build Size Optimization"
                        ]
                    },
                    {
                        level: "8",
                        title: "Game Deployment & Monetization",
                        topics: [
                            "Build for WebGL, Android, Windows",
                            "App Store & Play Store Guidelines",
                            "Ad Integration (Unity Ads, AdMob)",
                            "In-App Purchases (IAP)",
                            "Analytics & Crash Reports"
                        ]
                    },
                    {
                        level: "9",
                        title: "Portfolio & Career Prep",
                        topics: [
                            {
                                "Portfolio Projects": [
                                    "2D Platformer with Level Editor",
                                    "3D First-Person Game with AI Enemies",
                                    "Multiplayer Game (Lobby + Combat)",
                                    "Game Jam Entry (Ludum Dare / itch.io)"
                                ]
                            },
                            {
                                "Resume & Network": [
                                    "Build GitHub & itch.io profiles",
                                    "Devlogs or YouTube Dev Diaries",
                                    "LinkedIn & Game Dev Communities",
                                    "Contribute to Open Source Games"
                                ]
                            }
                        ]
                    },
                    {
                        level: "Bonus",
                        title: "Advanced Topics & Indie Dev",
                        topics: [
                            "Procedural Generation",
                            "Shader Programming (HLSL/Shader Graph)",
                            "Virtual Reality (Unity XR)",
                            "Modding Support",
                            "Marketing & Publishing Your Game",
                            "Kickstarter & Steam Release Tips"
                        ]
                    }
                ],
                tools_and_software: {
                    Languages: ["C#", "C++", "JavaScript (optional)"],
                    Engines: ["Unity", "Unreal Engine"],
                    Design: ["Blender", "Photoshop", "Aseprite", "Figma"],
                    Networking: ["Photon", "Mirror", "Firebase"],
                    VersionControl: ["Git", "GitHub"],
                    IDEs: ["Visual Studio", "VS Code"],
                    Testing: ["Unity Profiler", "Test Runner"],
                    Deployment: ["itch.io", "Steam", "Play Store", "App Store"]
                },
                timeline: [
                    { week: "1–2", focus: "C# + Unity Basics" },
                    { week: "3–5", focus: "2D Game Development + Mini Project" },
                    { week: "6–8", focus: "3D Game Dev with Physics & AI" },
                    { week: "9–10", focus: "Game Art, Blender & Animation" },
                    { week: "11–12", focus: "Game Design Theory + Sound + UI/UX" },
                    { week: "13–14", focus: "Multiplayer & Backend" },
                    { week: "15–16", focus: "Optimization, Testing, Bug Fixes" },
                    { week: "17–18", focus: "Game Deployment + Monetization" },
                    { week: "19+", focus: "Build Portfolio + Join Game Jams" }
                ]
            }
        ]
    },
    {
        skill_name: "App Developer",
        type: "Role-Based",
        desc: "Become a Job-Ready App Developer by mastering mobile UI/UX design, native and cross-platform development, state management, backend integration, testing, deployment, and performance optimization.",
        months: 6,
        NumUsers: 0,
        technologies: ["Dart", "Flutter", "JavaScript", "React Native", "Firebase", "Node.js", "MongoDB", "Git", "Figma"],
        roadmap: [
            {
                title: "App Developer Roadmap",
                goal: "Become a Job-Ready App Developer",
                levels: [
                    {
                        level: "0",
                        title: "Prerequisites",
                        topics: [
                            "Programming Basics (Variables, Loops, Functions, OOP)",
                            "Basic Computer Science (DSA, OOP, OS, Networking)",
                            "Git & GitHub",
                            "Command Line Basics (Terminal, Shell)",
                            "Basic UI/UX Principles"
                        ]
                    },
                    {
                        level: "1",
                        title: "Front-End Foundations",
                        topics: [
                            {
                                "Web Basics (Optional but Helpful)": [
                                    "HTML, CSS, JavaScript",
                                    "Flexbox & Grid",
                                    "DOM Manipulation"
                                ]
                            },
                            {
                                "Design Skills": [
                                    "Figma: Designing Mobile Screens",
                                    "Material Design / Cupertino Guidelines",
                                    "Typography, Spacing, Color Theory"
                                ]
                            }
                        ]
                    },
                    {
                        level: "2",
                        title: "Core Mobile Development",
                        topics: [
                            {
                                "Flutter": [
                                    "Dart Basics",
                                    "Widgets, Layouts, Navigation",
                                    "State Management (setState, Provider, Riverpod)",
                                    "Forms & Validation",
                                    "Animations & Transitions"
                                ]
                            },
                            {
                                "React Native": [
                                    "JSX, Components, Props, State",
                                    "React Navigation",
                                    "Hooks, Context API",
                                    "Styling with StyleSheet",
                                    "Expo vs CLI"
                                ]
                            }
                        ]
                    },
                    {
                        level: "3",
                        title: "Backend Integration",
                        topics: [
                            "REST APIs: GET, POST, PUT, DELETE",
                            "HTTP Package (Flutter), Axios/Fetch (React Native)",
                            "Async/Await & Error Handling",
                            "Authentication (Login, Signup, JWT)",
                            "Firebase: Auth, Firestore, Realtime DB",
                            "Local Storage (SharedPreferences, AsyncStorage)"
                        ]
                    },
                    {
                        level: "4",
                        title: "Advanced Features",
                        topics: [
                            "Push Notifications (Firebase Cloud Messaging)",
                            "Camera, Gallery, Location Access",
                            "Device Permissions & Sensors",
                            "Background Tasks",
                            "App Lifecycle & State Restoration"
                        ]
                    },
                    {
                        level: "5",
                        title: "App Testing",
                        topics: [
                            "Unit Testing",
                            "Widget Testing (Flutter)",
                            "Integration Testing",
                            "Debugging & Performance Tools",
                            "Error Reporting (Sentry, Firebase Crashlytics)"
                        ]
                    },
                    {
                        level: "6",
                        title: "Deployment & Store Publishing",
                        topics: [
                            "Building for Android (APK, AAB)",
                            "Building for iOS (Simulator, IPA, TestFlight)",
                            "Google Play Store Submission",
                            "Apple App Store Submission",
                            "CI/CD with Codemagic, GitHub Actions"
                        ]
                    },
                    {
                        level: "7",
                        title: "Performance & Optimization",
                        topics: [
                            "Memory Management",
                            "Lazy Loading, Image Optimization",
                            "Code Splitting (React Native)",
                            "Efficient State Management",
                            "App Size Reduction Techniques"
                        ]
                    },
                    {
                        level: "8",
                        title: "Portfolio & Job Preparation",
                        topics: [
                            {
                                "Portfolio Projects": [
                                    "To-Do App with Firebase Auth",
                                    "Weather App using API",
                                    "Chat App with Socket.io",
                                    "E-commerce App with Cart & Payment",
                                    "Social Media App Clone (Instagram, Twitter)"
                                ]
                            },
                            {
                                "Resume & Career Tips": [
                                    "Highlight Play Store / GitHub Links",
                                    "UI Showcase on Behance/Dribbble",
                                    "LinkedIn Optimization",
                                    "Contribute to Open Source / Stack Overflow"
                                ]
                            }
                        ]
                    },
                    {
                        level: "Bonus",
                        title: "Exploring Native Development",
                        topics: [
                            "Android (Java/Kotlin): Activities, Intents, Services",
                            "iOS (Swift): ViewControllers, Storyboards, SwiftUI",
                            "Bridging Native Modules in Flutter/React Native"
                        ]
                    }
                ],
                tools_and_software: {
                    Languages: ["Dart", "JavaScript", "Kotlin", "Swift"],
                    Frameworks: ["Flutter", "React Native", "Node.js"],
                    Databases: ["Firebase", "MongoDB", "SQLite"],
                    Design: ["Figma", "Adobe XD"],
                    VersionControl: ["Git", "GitHub"],
                    DevTools: ["Android Studio", "Xcode", "VS Code"],
                    Testing: ["Jest", "Flutter Test", "Firebase Crashlytics"],
                    Hosting: ["Firebase", "Render", "Vercel", "Railway"]
                },
                timeline: [
                    { week: "1–2", focus: "Programming Basics, Git, UI/UX" },
                    { week: "3–5", focus: "Flutter & React Native Basics" },
                    { week: "6–7", focus: "Backend Integration & Firebase" },
                    { week: "8–9", focus: "Advanced Features & APIs" },
                    { week: "10–11", focus: "Testing & Debugging" },
                    { week: "12–13", focus: "Deployment & CI/CD" },
                    { week: "14–15", focus: "Performance Optimization" },
                    { week: "16+", focus: "Portfolio Projects & Job Prep" }
                ]
            }
        ]
    },

    {
        skill_name: "UI/UX Designer",
        type: "Role-Based",
        desc: "Become a Job-Ready UI/UX Designer by mastering design principles, user research, wireframing, prototyping, and delivering developer-friendly design systems.",
        months: 6,
        NumUsers: 0,
        technologies: ["Figma", "Adobe XD", "HTML/CSS", "JavaScript", "Notion", "Framer", "Design Systems"],
        roadmap: [
            {
                title: "UI/UX Designer Roadmap",
                goal: "Become a Job-Ready UI/UX Designer",
                levels: [
                    {
                        level: "0",
                        title: "Foundations & Prerequisites",
                        topics: [
                            "What is UI vs UX?",
                            "Design Thinking & Human-Centered Design",
                            "Basic Psychology of Users",
                            "Design Terminology (Wireframes, Prototypes, Mockups, MVP, etc.)",
                            "Familiarity with Digital Products and Interfaces"
                        ]
                    },
                    {
                        level: "1",
                        title: "Design Principles & Visual Fundamentals",
                        topics: [
                            "Color Theory, Typography, Spacing",
                            "Visual Hierarchy, Contrast, Balance",
                            "Grids & Layouts",
                            "Mobile-First & Responsive Design",
                            "Accessibility & WCAG Guidelines"
                        ]
                    },
                    {
                        level: "2",
                        title: "User Research & UX Strategy",
                        topics: [
                            "User Personas, Empathy Mapping",
                            "User Journey Maps, Customer Journey",
                            "Competitor Analysis",
                            "Surveys, Interviews, and Usability Testing",
                            "Information Architecture & Sitemap Creation"
                        ]
                    },
                    {
                        level: "3",
                        title: "Wireframing & Prototyping",
                        topics: [
                            "Low-Fidelity Wireframes (Balsamiq, Figma)",
                            "User Flows & Interaction Maps",
                            "Clickable Prototypes (Figma, Adobe XD)",
                            "Microinteractions & Motion Design Basics",
                            "A/B Testing Basics"
                        ]
                    },
                    {
                        level: "4",
                        title: "UI Design Mastery",
                        topics: [
                            "Designing Screens for Web, Mobile, Tablet",
                            "Navigation Patterns (Tabs, Drawers, Hamburger)",
                            "Component Design (Buttons, Cards, Forms)",
                            "Iconography & Illustration",
                            "Design Tokens, Colors, and Style Guides"
                        ]
                    },
                    {
                        level: "5",
                        title: "Tools & Collaboration",
                        topics: [
                            {
                                "Design Tools": [
                                    "Figma (Main Tool)",
                                    "Adobe XD",
                                    "Framer / Penpot (Optional)"
                                ]
                            },
                            {
                                "Team Collaboration": [
                                    "FigJam / Miro for brainstorming",
                                    "Notion / Jira for project documentation",
                                    "Design Handoff via Zeplin / Figma Inspect"
                                ]
                            }
                        ]
                    },
                    {
                        level: "6",
                        title: "Design Systems & UI Kits",
                        topics: [
                            "Atomic Design Methodology",
                            "Creating Reusable Components & Variants",
                            "Building a Design System in Figma",
                            "Tokens for Color, Typography, Spacing",
                            "Material UI, Ant Design, Tailwind UI Systems"
                        ]
                    },
                    {
                        level: "7",
                        title: "UI Development Basics (Optional but Valuable)",
                        topics: [
                            "HTML + CSS Basics (Box Model, Flexbox, Grid)",
                            "Basic JavaScript for UI Interactions",
                            "CSS Frameworks (Tailwind CSS, Bootstrap)",
                            "Responsive & Adaptive UI Techniques",
                            "Intro to Framer/React for Designers"
                        ]
                    },
                    {
                        level: "8",
                        title: "Portfolio, Resume & Job Preparation",
                        topics: [
                            {
                                "Portfolio Projects": [
                                    "Redesign of an Existing App/Website",
                                    "End-to-End UX Case Study (Research to Mockup)",
                                    "Personal Productivity Tool UI",
                                    "Mobile App for a Local Business",
                                    "Dark Mode UI Challenge"
                                ]
                            },
                            {
                                "Career Tools": [
                                    "Behance, Dribbble, GitHub (Code or Assets)",
                                    "Personal Portfolio Website (Notion/Framer/Webflow)",
                                    "Resume & LinkedIn Optimization",
                                    "Interview Preparation (Whiteboard UX, Take-Home Tasks)"
                                ]
                            }
                        ]
                    },
                    {
                        level: "Bonus",
                        title: "Growth, Trends & Freelancing",
                        topics: [
                            "Motion UI (Lottie, After Effects)",
                            "Design Challenges (Daily UI, FrontendMentor)",
                            "Freelancing Platforms (Upwork, Fiverr)",
                            "Staying Updated (UX Collective, Smashing Mag)",
                            "AI in Design (Uizard, Galileo, Genius AI)"
                        ]
                    }
                ],
                tools_and_software: {
                    Design: ["Figma", "Adobe XD", "Framer"],
                    Prototyping: ["Figma", "ProtoPie", "Marvel"],
                    Research: ["Maze", "UXtweak", "Miro", "FigJam"],
                    DevHandoff: ["Figma Inspect", "Zeplin"],
                    CodeBasics: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
                    Portfolio: ["Notion", "Webflow", "Framer"],
                    Collaboration: ["Slack", "Notion", "Jira"]
                },
                timeline: [
                    { week: "1–2", focus: "Design Basics & Thinking" },
                    { week: "3–4", focus: "Visual Design Principles" },
                    { week: "5–6", focus: "UX Research & User Flows" },
                    { week: "7–8", focus: "Wireframing & Prototyping" },
                    { week: "9–10", focus: "UI Design & Components" },
                    { week: "11–12", focus: "Design Systems & Collaboration" },
                    { week: "13–15", focus: "Frontend Skills + Portfolio Projects" },
                    { week: "16+", focus: "Job Prep + Freelancing + Trends" }
                ]
            }
        ]
    },

    {
        skill_name: "Cloud Engineer",
        type: "Role-Based",
        desc: "Become a Job-Ready Cloud Engineer by mastering cloud platforms, infrastructure automation, CI/CD, security, and cloud-native tools across AWS, Azure, and GCP.",
        months: 7,
        NumUsers: 0,
        technologies: [
            "Linux", "Networking", "AWS", "Azure", "GCP",
            "Terraform", "Docker", "Kubernetes",
            "CI/CD", "GitHub Actions", "Prometheus", "Grafana"
        ],
        roadmap: [
            {
                title: "Cloud Engineer Roadmap",
                goal: "Become a Job-Ready Cloud Engineer",
                levels: [
                    {
                        level: "0",
                        title: "Foundations",
                        topics: [
                            "Computer Networks (DNS, HTTP, TCP/IP, Subnetting)",
                            "Linux OS & Shell Scripting",
                            "Operating System Concepts",
                            "Virtualization vs. Containerization",
                            "Git & GitHub Basics"
                        ]
                    },
                    {
                        level: "1",
                        title: "Cloud Basics & Services",
                        topics: [
                            {
                                "Core Concepts": [
                                    "IaaS, PaaS, SaaS",
                                    "Cloud Deployment Models (Public, Private, Hybrid)",
                                    "Regions, Zones, Availability",
                                    "IAM: Users, Roles, Policies"
                                ]
                            },
                            {
                                "Platforms": [
                                    "AWS Core Services (EC2, S3, VPC, RDS, IAM)",
                                    "Azure Basics (VMs, Blob, VNets)",
                                    "GCP Essentials (Compute, Storage, IAM)"
                                ]
                            }
                        ]
                    },
                    {
                        level: "2",
                        title: "Compute, Storage & Networking",
                        topics: [
                            "EC2, Azure VMs, GCP Compute Engine",
                            "Object Storage (S3, Blob, GCS)",
                            "Block vs File Storage",
                            "Networking: VPC, Subnets, NAT Gateway",
                            "Load Balancers, Route53, Cloud DNS"
                        ]
                    },
                    {
                        level: "3",
                        title: "Infrastructure as Code (IaC)",
                        topics: [
                            "Terraform Basics (Providers, Resources, State)",
                            "Modules, Variables, Outputs",
                            "Deploying Infrastructure on AWS using Terraform",
                            "CloudFormation & ARM Templates (overview)",
                            "IaC Best Practices"
                        ]
                    },
                    {
                        level: "4",
                        title: "Containers & Orchestration",
                        topics: [
                            "Docker (Images, Volumes, Networks)",
                            "Docker Compose & Registries",
                            "Kubernetes Concepts (Pods, Deployments, Services)",
                            "Minikube & kubectl",
                            "EKS / AKS / GKE Overview"
                        ]
                    },
                    {
                        level: "5",
                        title: "CI/CD & Automation",
                        topics: [
                            "CI/CD Basics & GitHub Actions",
                            "Jenkins / GitLab CI/CD",
                            "Terraform Automation in CI/CD",
                            "Build & Deploy Docker Containers",
                            "Infrastructure Testing (Checkov, Terratest)"
                        ]
                    },
                    {
                        level: "6",
                        title: "Monitoring, Logging & Security",
                        topics: [
                            "CloudWatch, Azure Monitor, Stackdriver",
                            "Prometheus + Grafana Setup",
                            "Log Aggregation: ELK Stack / Loki",
                            "Security Groups, IAM Policies, MFA",
                            "Secret Management (AWS Secrets Manager, HashiCorp Vault)"
                        ]
                    },
                    {
                        level: "7",
                        title: "Cloud-Native & Serverless",
                        topics: [
                            "Event-Driven Architecture Basics",
                            "AWS Lambda, Azure Functions, GCP Cloud Functions",
                            "API Gateway Integration",
                            "Step Functions & EventBridge",
                            "Serverless Framework / SAM"
                        ]
                    },
                    {
                        level: "8",
                        title: "DevOps & Cost Optimization",
                        topics: [
                            "DevOps Culture & Toolchain",
                            "Infrastructure Scalability & HA Design",
                            "Cost Monitoring & Optimization (AWS Budgets, Cost Explorer)",
                            "Disaster Recovery & Backups",
                            "Multi-Cloud Strategy"
                        ]
                    },
                    {
                        level: "9",
                        title: "Portfolio & Job Preparation",
                        topics: [
                            {
                                "Portfolio Projects": [
                                    "Deploy a 3-tier Web App on AWS using Terraform",
                                    "CI/CD Pipeline for Docker App using GitHub Actions",
                                    "Kubernetes Cluster with Monitoring & Autoscaling",
                                    "Serverless REST API with AWS Lambda + API Gateway"
                                ]
                            },
                            {
                                "Resume & Networking": [
                                    "Highlight Cloud Tools & Project Impact",
                                    "Certifications (AWS Solutions Architect, Azure Admin, GCP ACE)",
                                    "Contribute to Cloud GitHub Repos",
                                    "Engage on LinkedIn, Forums, Discord Servers"
                                ]
                            }
                        ]
                    }
                ],
                tools_and_software: {
                    Platforms: ["AWS", "Azure", "GCP"],
                    IaC: ["Terraform", "CloudFormation"],
                    Containers: ["Docker", "Kubernetes"],
                    "CI/CD": ["GitHub Actions", "Jenkins", "GitLab"],
                    Monitoring: ["Prometheus", "Grafana", "CloudWatch"],
                    Security: ["IAM", "Vault", "Secrets Manager"],
                    Version_Control: ["Git", "GitHub"],
                    IDEs: ["VS Code", "CloudShell", "Terraform Cloud"]
                },
                timeline: [
                    { week: "1–2", focus: "Networking, Linux, Git, OS" },
                    { week: "3–5", focus: "Cloud Basics (AWS, Azure, GCP)" },
                    { week: "6–8", focus: "Compute, Storage, VPC Networking" },
                    { week: "9–10", focus: "Terraform & IaC Automation" },
                    { week: "11–13", focus: "Docker + Kubernetes (EKS, GKE)" },
                    { week: "14–15", focus: "CI/CD Automation (GitHub Actions, Jenkins)" },
                    { week: "16–17", focus: "Monitoring, Logging, and Security" },
                    { week: "18–19", focus: "Serverless & Cloud-Native Architecture" },
                    { week: "20–22", focus: "Multi-Cloud, Optimization & Real Projects" },
                    { week: "23+", focus: "Portfolio Building & Interviews" }
                ]
            }
        ]
    },
    {
        skill_name: "Blockchain Developer",
        type: "Role-Based",
        desc: "Become a Job-Ready Blockchain Developer by mastering the fundamentals of blockchain, smart contracts, DApps, consensus algorithms, security, and deployment on public/private networks.",
        months: 7,
        NumUsers: 0,
        technologies: [
            "JavaScript/TypeScript",
            "Solidity",
            "Hardhat",
            "Ethers.js",
            "React.js",
            "Node.js",
            "Ethereum",
            "Polygon",
            "IPFS",
            "Docker",
            "Ganache",
            "Foundry"
        ],
        roadmap: [
            {
                title: "Blockchain Developer Roadmap",
                goal: "Become a Job-Ready Blockchain Developer",
                levels: [
                    {
                        level: "0",
                        title: "Prerequisites",
                        topics: [
                            "Computer Science Basics (OOP, DSA fundamentals)",
                            "JavaScript or TypeScript Essentials",
                            "Git & GitHub",
                            "HTTP & APIs Basics",
                            "Basic Understanding of Cryptography"
                        ]
                    },
                    {
                        level: "1",
                        title: "Blockchain Fundamentals",
                        topics: [
                            "What is Blockchain & How It Works",
                            "Types of Blockchains (Public, Private, Consortium)",
                            "Consensus Mechanisms (PoW, PoS, PoA)",
                            "Hashing, Merkle Trees, Blocks, Mining",
                            "Ethereum Overview & Gas Fees"
                        ]
                    },
                    {
                        level: "2",
                        title: "Ethereum & Smart Contracts",
                        topics: [
                            "Ethereum Architecture (EVM, Accounts, Transactions)",
                            "Solidity Basics: Variables, Functions, Data Types",
                            "Events, Modifiers, Mappings, Structs",
                            "Memory vs Storage, Visibility, Gas Optimization",
                            "Security Best Practices (Reentrancy, Overflow)"
                        ]
                    },
                    {
                        level: "3",
                        title: "Smart Contract Development Tools",
                        topics: [
                            "Hardhat: Project Setup, Compilation, Testing",
                            "Foundry (optional advanced tooling)",
                            "Ethers.js vs Web3.js",
                            "Ganache: Local Blockchain",
                            "Unit Testing using Mocha/Chai"
                        ]
                    },
                    {
                        level: "4",
                        title: "Decentralized Applications (DApps)",
                        topics: [
                            "Frontend Integration with Smart Contracts (Ethers.js)",
                            "React.js Basics (Components, Hooks, State)",
                            "Connecting Wallets (MetaMask, WalletConnect)",
                            "Handling Events, Listening to Blockchain Updates",
                            "Form Handling, UI/UX for Web3"
                        ]
                    },
                    {
                        level: "5",
                        title: "Advanced Concepts & Token Standards",
                        topics: [
                            "ERC-20 Tokens: Fungible Tokens",
                            "ERC-721 & ERC-1155: NFTs",
                            "IPFS for Decentralized Storage",
                            "OpenZeppelin Contracts & Utilities",
                            "Tokenomics Basics"
                        ]
                    },
                    {
                        level: "6",
                        title: "Blockchain Ecosystem & Deployment",
                        topics: [
                            "Testnets (Goerli, Mumbai, Sepolia)",
                            "Deploying Contracts on Ethereum & Polygon",
                            "Contract Verification (Etherscan)",
                            "Gas Optimization Tips",
                            "Node Providers (Infura, Alchemy)"
                        ]
                    },
                    {
                        level: "7",
                        title: "Security & Auditing",
                        topics: [
                            "Common Vulnerabilities (Reentrancy, DoS, Front-running)",
                            "Static Analysis Tools (Slither, MythX)",
                            "Contract Upgradability Patterns (Proxy, UUPS)",
                            "Audit Reports & How to Read Them",
                            "Bug Bounty Programs"
                        ]
                    },
                    {
                        level: "8",
                        title: "Web3 & Cross-Chain Integration",
                        topics: [
                            "Wallet Standards (EIP-1193)",
                            "Multi-chain DApps (Polygon, BSC, Arbitrum)",
                            "Bridges & Cross-Chain Messaging",
                            "Web3Auth & Social Logins",
                            "The Graph, Oracles (Chainlink)"
                        ]
                    },
                    {
                        level: "9",
                        title: "Portfolio & Job Preparation",
                        topics: [
                            {
                                "Portfolio Projects": [
                                    "ERC-20 Token + ICO Website",
                                    "NFT Minting & Marketplace",
                                    "DAO with Voting System",
                                    "Decentralized To-Do App (CRUD)",
                                    "Web3 Login + File Upload to IPFS"
                                ]
                            },
                            {
                                "Resume & Profile": [
                                    "Include GitHub Projects with Contracts & Live Demo Links",
                                    "Write Blogs Explaining Smart Contract Logic",
                                    "LinkedIn Optimization + Web3 Job Boards"
                                ]
                            }
                        ]
                    },
                    {
                        level: "Bonus",
                        title: "Staying Ahead in Blockchain",
                        topics: [
                            "Read Ethereum Improvement Proposals (EIPs)",
                            "Join Web3 Communities (DAOs, Discords)",
                            "Participate in Hackathons",
                            "Explore zkRollups, L2s, and Account Abstraction",
                            "Contribute to Open Source Smart Contracts"
                        ]
                    }
                ],
                tools_and_software: {
                    Languages: ["JavaScript", "Solidity", "TypeScript"],
                    Frameworks: ["Hardhat", "Foundry", "Ethers.js", "React"],
                    Blockchain: ["Ethereum", "Polygon", "Ganache", "IPFS"],
                    Deployment: ["Infura", "Alchemy", "Etherscan"],
                    Security: ["Slither", "MythX", "OpenZeppelin"],
                    VersionControl: ["Git", "GitHub"],
                    Editors: ["VS Code", "Remix IDE"]
                },
                timeline: [
                    { week: "1–2", focus: "JavaScript & Blockchain Basics" },
                    { week: "3–5", focus: "Ethereum + Solidity Smart Contracts" },
                    { week: "6–7", focus: "Hardhat, Ethers.js, and Testing" },
                    { week: "8–10", focus: "React + Web3 DApp Development" },
                    { week: "11–13", focus: "NFTs, Tokens, and IPFS" },
                    { week: "14–16", focus: "Deployments + Testnets + Mainnets" },
                    { week: "17–18", focus: "Security + Auditing Best Practices" },
                    { week: "19–20", focus: "Cross-Chain + Wallet Integration" },
                    { week: "21+", focus: "Projects + Resume + Open Source + Jobs" }
                ]
            }
        ]
    },

    {
        skill_name: "Rust Blockchain Developer",
        type: "Role-Based",
        desc: "Become a Job-Ready Rust Blockchain Developer by mastering Rust programming, smart contracts, Solana/Near/Substrate platforms, cross-chain development, and decentralized app deployment.",
        months: 8,
        NumUsers: 0,
        technologies: [
            "Rust",
            "Solana",
            "Anchor",
            "Near Protocol",
            "Substrate",
            "TypeScript",
            "React.js",
            "Metaplex",
            "IPFS",
            "Docker",
            "VS Code"
        ],
        roadmap: [
            {
                title: "Rust-Based Blockchain Developer Roadmap",
                goal: "Become a Job-Ready Blockchain Developer (Rust Stack)",
                levels: [
                    {
                        level: "0",
                        title: "Prerequisites",
                        topics: [
                            "Basic Computer Science (OOP, DSA)",
                            "TypeScript or JavaScript Essentials",
                            "Command Line & Git Basics",
                            "HTTP, JSON, APIs Overview",
                            "Basic Cryptography Concepts"
                        ]
                    },
                    {
                        level: "1",
                        title: "Rust Programming Essentials",
                        topics: [
                            "Variables, Ownership, Borrowing, Lifetimes",
                            "Structs, Enums, Traits, Match Statements",
                            "Error Handling (Result, Option)",
                            "Modules & Crates",
                            "Testing, Cargo, Macros"
                        ]
                    },
                    {
                        level: "2",
                        title: "Blockchain Fundamentals",
                        topics: [
                            "How Blockchain Works (Blocks, Hashing, Consensus)",
                            "Accounts, Transactions, and Digital Signatures",
                            "Differences in Solana, Near, Substrate",
                            "Proof of Stake vs Other Consensus Models",
                            "Gas Fees, Smart Contracts, On-Chain vs Off-Chain"
                        ]
                    },
                    {
                        level: "3",
                        title: "Solana & Anchor Framework",
                        topics: [
                            "Solana Architecture & Account Model",
                            "Setting Up Local Validator / Devnet",
                            "Building Smart Contracts with Anchor",
                            "PDAs, CPI Calls, Borsh Serialization",
                            "Writing & Testing Programs"
                        ]
                    },
                    {
                        level: "4",
                        title: "NEAR & Substrate (Optional)",
                        topics: [
                            "Near Protocol Basics + Rust Contracts",
                            "Substrate Runtime Modules (FRAME)",
                            "Pallet Development & WASM Compilation",
                            "Differences Between Solana & Substrate",
                            "Tooling: near-cli, cargo-contract"
                        ]
                    },
                    {
                        level: "5",
                        title: "Frontend & DApp Development",
                        topics: [
                            "React.js + TypeScript Essentials",
                            "Connecting Wallets (Phantom, Near Wallet, Polkadot.js)",
                            "Anchor Client APIs + Fetching Data from Chain",
                            "Token Standards: SPL Tokens (Solana), Fungible/Non-Fungible",
                            "Form Handling, Event Subscriptions"
                        ]
                    },
                    {
                        level: "6",
                        title: "Advanced Concepts & Ecosystem Tools",
                        topics: [
                            "Metaplex for NFTs (Candy Machine)",
                            "IPFS & Arweave for Metadata Storage",
                            "Cross-Program Invocations (CPI)",
                            "Interacting with Oracles (Switchboard, Pyth)",
                            "Cross-Chain Messaging & Bridges (Wormhole, LayerZero)"
                        ]
                    },
                    {
                        level: "7",
                        title: "Security, Auditing & Deployment",
                        topics: [
                            "Common Vulnerabilities (Account Overwrite, Rent Exploits)",
                            "Security Best Practices for Solana/Anchor",
                            "Audit Tools (cargo-audit, Solana Audits)",
                            "Deploying to Mainnet",
                            "Contract Upgradability + Governance"
                        ]
                    },
                    {
                        level: "8",
                        title: "Portfolio, Resume & Career Prep",
                        topics: [
                            {
                                "Portfolio Projects": [
                                    "Solana Token Faucet",
                                    "NFT Minting App (Metaplex + IPFS)",
                                    "Solana Voting DAO",
                                    "Decentralized File Storage UI",
                                    "Anchor-based Marketplace with Royalties"
                                ]
                            },
                            {
                                "Resume & Profile": [
                                    "Include Live Projects & GitHub Repos",
                                    "Write Technical Blogs (Rust + Solana)",
                                    "Network in Solana/NEAR Discords & Communities"
                                ]
                            }
                        ]
                    },
                    {
                        level: "Bonus",
                        title: "Stay Ahead in the Rust Web3 Space",
                        topics: [
                            "Contribute to Anchor / Solana Open Source Projects",
                            "Participate in Solana & Polkadot Hackathons",
                            "Read Research Papers & RFCs (e.g., WASM, BLS)",
                            "Explore zk-SNARKs + Zero-Knowledge Proofs in Rust"
                        ]
                    }
                ],
                tools_and_software: {
                    Languages: ["Rust", "TypeScript"],
                    Blockchain: ["Solana", "Near", "Substrate"],
                    Frameworks: ["Anchor", "React.js", "Metaplex"],
                    Deployment: ["Solana CLI", "IPFS", "Docker", "Arweave"],
                    Wallets: ["Phantom", "Near Wallet", "Polkadot.js"],
                    Editors: ["VS Code", "Solana Playground", "Remix (for comparison)"]
                },
                timeline: [
                    { week: "1–2", focus: "Rust Programming + Tooling" },
                    { week: "3–4", focus: "Blockchain Fundamentals + Setup" },
                    { week: "5–7", focus: "Solana Programs with Anchor" },
                    { week: "8–9", focus: "Frontend + Wallet Integration" },
                    { week: "10–12", focus: "NFTs, Metaplex, Token Standards" },
                    { week: "13–14", focus: "Deployment + Security Practices" },
                    { week: "15–16", focus: "Cross-Chain Tools + Oracles" },
                    { week: "17+", focus: "Portfolio Projects + Jobs" }
                ]
            }
        ]
    },
    {
        skill_name: "Python Developer",
        type: "Skill-Based",
        desc: "Master Python and become a versatile developer skilled in scripting, backend development, APIs, databases, automation, and deployment.",
        months: 6,
        NumUsers: 0,
        technologies: ["Python", "OOP", "Flask/FastAPI", "SQL", "MongoDB", "Docker", "Git", "Testing", "Automation"],
        roadmap: [
            {
                title: "Python Developer Roadmap",
                goal: "Become a Job-Ready Python Developer",
                levels: [
                    {
                        level: "0",
                        title: "Fundamentals & Prerequisites",
                        topics: [
                            "Computer Basics & Command Line (Linux CLI)",
                            "Typing Practice (40+ WPM)",
                            "Git & GitHub Essentials",
                            "Basic Programming Concepts (variables, loops, functions)"
                        ]
                    },
                    {
                        level: "1",
                        title: "Core Python Programming",
                        topics: [
                            "Data Types, Control Flow, Loops",
                            "Functions, Recursion",
                            "OOP: Classes, Inheritance, Encapsulation",
                            "Error Handling, File Handling",
                            "List Comprehensions, Generators, Decorators"
                        ]
                    },
                    {
                        level: "2",
                        title: "Working with Libraries & Tools",
                        topics: [
                            "Virtual Environments & pip",
                            "NumPy (arrays, slicing)",
                            "Pandas (DataFrames, filtering, cleaning)",
                            "JSON, CSV handling",
                            "Datetime, OS, shutil, sys modules"
                        ]
                    },
                    {
                        level: "3",
                        title: "Databases & ORMs",
                        topics: [
                            "SQL Basics: SELECT, JOIN, GROUP BY",
                            "SQLite / PostgreSQL Integration with Python",
                            "NoSQL Basics with MongoDB (PyMongo)",
                            "ORMs: SQLAlchemy, Tortoise ORM"
                        ]
                    },
                    {
                        level: "4",
                        title: "Web Development with Python",
                        topics: [
                            "Flask Framework Basics",
                            "FastAPI for RESTful APIs",
                            "Jinja2 Templating",
                            "URL Routing, Middleware, Sessions",
                            "Building & Testing APIs (Postman, Swagger)"
                        ]
                    },
                    {
                        level: "5",
                        title: "Automation & Scripting",
                        topics: [
                            "Web Scraping (BeautifulSoup, Requests)",
                            "File Automation (rename, sort, compress)",
                            "Email Sending, PDF generation",
                            "Excel Automation (openpyxl, pandas)",
                            "Cron Jobs / Task Schedulers"
                        ]
                    },
                    {
                        level: "6",
                        title: "Testing & Debugging",
                        topics: [
                            "Debugging (pdb, logging)",
                            "Unit Testing (unittest, pytest)",
                            "Test Driven Development (TDD)",
                            "Mocking & Fixtures"
                        ]
                    },
                    {
                        level: "7",
                        title: "Docker & Deployment",
                        topics: [
                            "Docker Basics (images, containers, volumes)",
                            "Dockerizing Flask/FastAPI Apps",
                            "CI/CD Basics (GitHub Actions)",
                            "Deploying to Render, Railway, Heroku",
                            "Environment Variables, Security Practices"
                        ]
                    },
                    {
                        level: "8",
                        title: "Advanced Python Concepts",
                        topics: [
                            "Iterators & Generators Deep Dive",
                            "Closures, Lambdas, Decorators Internals",
                            "Context Managers",
                            "Asyncio & Concurrency Basics",
                            "Typing & Type Hints"
                        ]
                    },
                    {
                        level: "9",
                        title: "Portfolio & Projects",
                        topics: [
                            {
                                "Mini Projects": [
                                    "To-do App with Flask",
                                    "Weather API Integration",
                                    "PDF Merger Tool",
                                    "Web Scraper + CSV Export",
                                    "File Organizer Script"
                                ]
                            },
                            {
                                "Portfolio Projects": [
                                    "Blog CMS with Authentication",
                                    "E-commerce REST API",
                                    "Automation Dashboard (PDF/Excel Tasks)",
                                    "Data Analysis Tool (pandas + Flask frontend)"
                                ]
                            },
                            {
                                "Resume & LinkedIn": [
                                    "Add GitHub links, Live Demos",
                                    "Showcase test coverage, deployment steps",
                                    "Write Blogs / Document Projects"
                                ]
                            }
                        ]
                    },
                    {
                        level: "Bonus",
                        title: "Expand & Specialize",
                        topics: [
                            "Django (optional full-stack path)",
                            "FastAPI + SQLModel + JWT Auth",
                            "Learn Rust or Go (System Programming)",
                            "Contribute to Open Source (GitHub)",
                            "Explore Python in Data Science or DevOps"
                        ]
                    }
                ],
                tools_and_software: {
                    Languages: ["Python"],
                    Libraries: ["NumPy", "Pandas", "SQLAlchemy", "BeautifulSoup", "Requests", "FastAPI", "Flask"],
                    Databases: ["SQLite", "PostgreSQL", "MongoDB"],
                    Tools: ["Git", "Docker", "Postman", "Pytest", "Jupyter", "VS Code"],
                    Deployment: ["Docker Hub", "Render", "Railway", "Heroku"],
                    Automation: ["Cron", "openpyxl", "smtplib", "shutil"]
                },
                timeline: [
                    { week: "1–2", focus: "Python Fundamentals + Git" },
                    { week: "3–4", focus: "Core Python + OOP + File Handling" },
                    { week: "5–6", focus: "Pandas, NumPy, Scripting Tools" },
                    { week: "7–8", focus: "SQL + MongoDB + ORM" },
                    { week: "9–10", focus: "Flask & FastAPI Development" },
                    { week: "11–12", focus: "API Projects + Testing" },
                    { week: "13–14", focus: "Automation Projects" },
                    { week: "15–16", focus: "Docker + CI/CD + Deployment" },
                    { week: "17–18", focus: "Build Portfolio + Resume + Apply" }
                ]
            }
        ]
    },
    {
        skill_name: "Java Developer",
        type: "Skill-Based",
        desc: "Become a Job-Ready Java Developer by mastering core Java, object-oriented design, frameworks like Spring Boot, databases, APIs, and deployment.",
        months: 6,
        NumUsers: 0,
        key_concepts: [
            "Core Java", "OOP", "Collections", "JDBC", "Multithreading",
            "Spring Boot", "REST APIs", "Hibernate", "Maven",
            "MySQL", "JUnit", "Docker", "Git"
        ],
        roadmap: [
            {
                title: "Java Developer Roadmap",
                goal: "Become a Job-Ready Java Backend Developer",
                levels: [
                    {
                        level: "0",
                        title: "Fundamentals & Prerequisites",
                        topics: [
                            "Computer Science Basics (DSA, OOP)",
                            "Typing Speed (40+ WPM)",
                            "Basic Git & GitHub",
                            "Command Line Usage (Terminal/CMD)"
                        ]
                    },
                    {
                        level: "1",
                        title: "Core Java",
                        topics: [
                            "Java Syntax, Data Types, Variables",
                            "Control Flow (if, switch, loops)",
                            "Methods, Arrays, String Handling",
                            "Object-Oriented Programming (OOP)",
                            "Access Modifiers, Static, this & super"
                        ]
                    },
                    {
                        level: "2",
                        title: "Advanced Java",
                        topics: [
                            "Collections Framework (List, Set, Map)",
                            "Generics, Enums, Annotations",
                            "Exception Handling",
                            "File I/O (BufferedReader, FileWriter)",
                            "Multithreading & Concurrency",
                            "JVM, JRE, JDK Concepts"
                        ]
                    },
                    {
                        level: "3",
                        title: "Working with Databases",
                        topics: [
                            "JDBC (Java Database Connectivity)",
                            "CRUD Operations with Java & MySQL",
                            "Connection Pooling",
                            "Introduction to ORM",
                            "Hibernate Basics (Entities, HQL, Annotations)"
                        ]
                    },
                    {
                        level: "4",
                        title: "Spring Framework & REST APIs",
                        topics: [
                            "Spring Core (IoC, Beans, DI)",
                            "Spring Boot Basics",
                            "RESTful APIs with Spring Boot",
                            "CRUD APIs, Validation, Exception Handling",
                            "Using Postman for API Testing"
                        ]
                    },
                    {
                        level: "5",
                        title: "Testing & Build Tools",
                        topics: [
                            "Unit Testing with JUnit",
                            "Mocking with Mockito",
                            "Integration Testing Basics",
                            "Maven (build, dependencies, plugins)",
                            "Logging with SLF4J & Logback"
                        ]
                    },
                    {
                        level: "6",
                        title: "Deployment & DevOps Basics",
                        topics: [
                            "GitHub Actions for CI/CD",
                            "Packaging Spring Boot Apps (JAR/WAR)",
                            "Docker Basics (build, run, volumes)",
                            "Dockerizing Spring Boot App",
                            "Deploy on Render, Railway, or EC2"
                        ]
                    },
                    {
                        level: "7",
                        title: "Projects, Portfolio & Job Prep",
                        topics: [
                            {
                                "Project Ideas": [
                                    "Student Management System with Spring Boot",
                                    "RESTful Blogging API",
                                    "E-commerce Backend (Orders, Products, Cart)",
                                    "ToDo App with CRUD & JWT Auth",
                                    "Dockerized Spring Boot + MySQL App"
                                ]
                            },
                            {
                                "Career Prep": [
                                    "Clean & Documented GitHub Projects",
                                    "Leetcode for Java DSA Practice",
                                    "Resume with Metrics (API speed, test coverage)",
                                    "LinkedIn Optimization, Java Community Groups"
                                ]
                            }
                        ]
                    },
                    {
                        level: "Bonus",
                        title: "Optional Advanced Topics",
                        topics: [
                            "Spring Security (JWT, OAuth2)",
                            "Microservices Architecture",
                            "Kafka & RabbitMQ Basics",
                            "Spring Cloud Config, Eureka",
                            "Design Patterns in Java"
                        ]
                    }
                ],
                tools_and_software: {
                    Languages: ["Java"],
                    Frameworks: ["Spring Boot", "Hibernate"],
                    BuildTools: ["Maven", "Gradle"],
                    Testing: ["JUnit", "Mockito"],
                    Deployment: ["Docker", "GitHub Actions"],
                    VersionControl: ["Git", "GitHub"],
                    Database: ["MySQL", "PostgreSQL"],
                    IDEs: ["IntelliJ IDEA", "VS Code", "Eclipse"],
                    "API-Clients": ["Postman", "Insomnia"]
                },
                timeline: [
                    { week: "1–2", focus: "Java Basics & OOP" },
                    { week: "3–5", focus: "Advanced Java & Collections" },
                    { week: "6–7", focus: "JDBC & Database Integration" },
                    { week: "8–10", focus: "Spring Boot & REST APIs" },
                    { week: "11–13", focus: "Testing, Maven & Logging" },
                    { week: "14–16", focus: "Docker & Deployment" },
                    { week: "17–20", focus: "Build Projects & Optimize Resume" },
                    { week: "21–24", focus: "Optional Topics & Interview Prep" }
                ]
            }
        ]
    },
    {
        skill_name: "Go Developer",
        type: "Skill-Based",
        desc: "Become a Job-Ready Go Developer by mastering Go programming, standard libraries, concurrency, microservices, API design, testing, and deployment.",
        months: 6,
        NumUsers: 0,
        technologies: ["Go (Golang)", "Concurrency", "HTTP/REST APIs", "Gin", "GORM", "Docker", "PostgreSQL", "Redis", "gRPC"],
        roadmap: [
            {
                title: "Go Developer Roadmap",
                goal: "Become a Job-Ready Go Developer",
                levels: [
                    {
                        level: "0",
                        title: "Foundations & Prerequisites",
                        topics: [
                            "Basic Programming Concepts (Variables, Loops, Functions)",
                            "Command Line Basics & Shell Scripting",
                            "Understanding Networking & HTTP",
                            "Git & GitHub Fundamentals",
                            "Typing Speed (40+ WPM)"
                        ]
                    },
                    {
                        level: "1",
                        title: "Go Language Fundamentals",
                        topics: [
                            "Installing Go & Setting up Workspace",
                            "Go Syntax & Data Types",
                            "Functions, Error Handling, Structs",
                            "Arrays, Slices, Maps",
                            "Packages, Modules, Interfaces"
                        ]
                    },
                    {
                        level: "2",
                        title: "Intermediate Go Concepts",
                        topics: [
                            "Pointers & Memory Allocation",
                            "Methods & Receivers",
                            "Go Routines & Channels (Intro to Concurrency)",
                            "Defer, Panic & Recover",
                            "Working with Files & IO"
                        ]
                    },
                    {
                        level: "3",
                        title: "Concurrency in Depth",
                        topics: [
                            "Go Routines (Parallel Execution)",
                            "Channels & Buffered Channels",
                            "Select Statement",
                            "Worker Pools & Pipelines",
                            "Mutex, RWMutex, WaitGroups"
                        ]
                    },
                    {
                        level: "4",
                        title: "Web Development with Go",
                        topics: [
                            "Net/HTTP Package (Basic HTTP Server)",
                            "Gin Framework (Routing, Middleware)",
                            "Request Handling & JSON Responses",
                            "Templating in Go (html/template)",
                            "Rate Limiting & Middleware Patterns"
                        ]
                    },
                    {
                        level: "5",
                        title: "Databases & ORMs",
                        topics: [
                            "SQL Basics & PostgreSQL Integration",
                            "Database Drivers (pgx, sqlx)",
                            "GORM ORM: Setup, CRUD, Relationships",
                            "Connection Pooling & Transactions",
                            "Using Redis for Caching"
                        ]
                    },
                    {
                        level: "6",
                        title: "API Development & Best Practices",
                        topics: [
                            "REST API Design (Versioning, Status Codes)",
                            "Routing, Authentication (JWT, OAuth)",
                            "Validation, Logging, Error Handling",
                            "API Testing (Postman, curl)",
                            "Swagger/OpenAPI Documentation"
                        ]
                    },
                    {
                        level: "7",
                        title: "Microservices & gRPC",
                        topics: [
                            "Introduction to Microservices in Go",
                            "Service Communication: REST vs gRPC",
                            "gRPC Basics & Protobufs",
                            "Building gRPC Services in Go",
                            "Service Discovery & Health Checks"
                        ]
                    },
                    {
                        level: "8",
                        title: "Testing & Debugging",
                        topics: [
                            "Unit Testing (testing package)",
                            "Table-Driven Tests",
                            "Benchmarking & Profiling",
                            "Mocking in Go (gomock, testify)",
                            "Debugging with Delve"
                        ]
                    },
                    {
                        level: "9",
                        title: "Deployment & DevOps Basics",
                        topics: [
                            "Dockerizing Go Applications",
                            "Creating CI/CD pipelines (GitHub Actions)",
                            "Using Docker Compose",
                            "Deploying to Cloud (Render, Railway, AWS EC2)",
                            "Monitoring & Logs (Promtail, Grafana, Loki)"
                        ]
                    },
                    {
                        level: "10",
                        title: "Project & Portfolio Building",
                        topics: [
                            {
                                "Project Ideas": [
                                    "Todo API with Gin + PostgreSQL",
                                    "URL Shortener Service",
                                    "gRPC Chat App",
                                    "Go-based Authentication System",
                                    "Dockerized Microservices Project"
                                ]
                            },
                            {
                                "Resume & Networking": [
                                    "Optimize GitHub Profile with README Projects",
                                    "Write Technical Blogs (GoLang Internals, Concurrency)",
                                    "Connect with Go Communities (Reddit, Discord)",
                                    "Contribute to Open Source Go Projects"
                                ]
                            }
                        ]
                    }
                ],
                tools_and_software: {
                    Languages: ["Go"],
                    Frameworks: ["Gin", "Echo"],
                    Databases: ["PostgreSQL", "Redis"],
                    DevOps: ["Docker", "GitHub Actions"],
                    Protocols: ["gRPC", "REST"],
                    ORMs: ["GORM", "sqlx"],
                    Testing: ["testing", "gomock", "testify"],
                    IDEs: ["GoLand", "VS Code"],
                    Hosting: ["Render", "Railway", "AWS"]
                },
                timeline: [
                    { week: "1–2", focus: "Go Language Basics & Setup" },
                    { week: "3–4", focus: "Pointers, Structs, Interfaces, Concurrency" },
                    { week: "5–6", focus: "Web Dev with Gin & REST API Fundamentals" },
                    { week: "7–8", focus: "Database Integration with PostgreSQL + Redis" },
                    { week: "9–10", focus: "Advanced API Practices, Auth, Swagger" },
                    { week: "11–12", focus: "Microservices & gRPC" },
                    { week: "13–14", focus: "Testing, Debugging & CI/CD" },
                    { week: "15–16", focus: "Docker + Deployment + Portfolio Projects" }
                ]
            }
        ]
    },
    {
        skill_name: "C++ Developer",
        type: "Skill-Based",
        desc: "Master core and advanced C++ concepts to build efficient system-level, game, or application software with modern practices and real-world project integration.",
        months: 6,
        NumUsers: 0,
        technologies: [
            "C++ Basics",
            "OOP",
            "STL",
            "Memory Management",
            "Multithreading",
            "Design Patterns",
            "Build Systems",
            "Debugging",
            "Performance Optimization"
        ],
        roadmap: [
            {
                title: "C++ Developer Roadmap",
                goal: "Become a Job-Ready C++ Developer",
                levels: [
                    {
                        level: "0",
                        title: "Computer Science Foundations",
                        topics: [
                            "DSA: Arrays, Linked Lists, Trees, Graphs, Sorting, Searching",
                            "Time & Space Complexity Analysis",
                            "OOP Concepts: Abstraction, Encapsulation, Inheritance, Polymorphism",
                            "Typing Practice (40+ WPM)",
                            "Git & GitHub Basics"
                        ]
                    },
                    {
                        level: "1",
                        title: "C++ Core Language",
                        topics: [
                            "Data Types, Loops, Functions, Conditionals",
                            "Pointers, References, Arrays, Strings",
                            "Dynamic Memory Allocation (new, delete, malloc)",
                            "Header Files, Namespaces",
                            "File I/O in C++"
                        ]
                    },
                    {
                        level: "2",
                        title: "Object-Oriented Programming in C++",
                        topics: [
                            "Classes, Objects, Constructors, Destructors",
                            "Access Modifiers, Friend Functions",
                            "Function & Operator Overloading",
                            "Inheritance (Single, Multiple, Virtual)",
                            "Polymorphism (Compile-time & Run-time)"
                        ]
                    },
                    {
                        level: "3",
                        title: "Standard Template Library (STL)",
                        topics: [
                            "STL Containers: vector, list, set, map, stack, queue",
                            "Iterators & Algorithms",
                            "Function Objects & Lambda Expressions",
                            "STL vs Custom Implementations",
                            "Best STL Practices"
                        ]
                    },
                    {
                        level: "4",
                        title: "Advanced C++ & Modern Features",
                        topics: [
                            "Templates (Function & Class Templates)",
                            "Smart Pointers (unique_ptr, shared_ptr, weak_ptr)",
                            "RAII (Resource Acquisition Is Initialization)",
                            "Exception Handling",
                            "Move Semantics, Rvalue References"
                        ]
                    },
                    {
                        level: "5",
                        title: "Multithreading & Concurrency",
                        topics: [
                            "Threads in C++ (std::thread)",
                            "Mutexes, Locks, Condition Variables",
                            "Race Conditions, Deadlocks",
                            "Atomic Operations",
                            "Thread-safe Data Structures"
                        ]
                    },
                    {
                        level: "6",
                        title: "Build Systems & Project Structure",
                        topics: [
                            "Compilation & Linking Process",
                            "Makefiles, CMake Basics",
                            "Header-Source Separation",
                            "Static & Dynamic Libraries",
                            "Organizing Large Codebases"
                        ]
                    },
                    {
                        level: "7",
                        title: "Debugging, Testing & Optimization",
                        topics: [
                            "Using GDB, Valgrind, Address Sanitizer",
                            "Unit Testing with Google Test",
                            "Memory Leak Detection & Prevention",
                            "Time & Space Optimization Techniques",
                            "Code Profiling (gprof, perf)"
                        ]
                    },
                    {
                        level: "8",
                        title: "Design Patterns & Best Practices",
                        topics: [
                            "Common C++ Design Patterns (Singleton, Factory, Observer, Strategy)",
                            "SOLID Principles",
                            "Dependency Injection",
                            "Code Readability & Maintainability",
                            "Refactoring Techniques"
                        ]
                    },
                    {
                        level: "9",
                        title: "Projects & Portfolio Building",
                        topics: [
                            {
                                "Project Ideas": [
                                    "Bank Management System",
                                    "Mini Game Engine using SDL/OpenGL",
                                    "Multithreaded File Downloader",
                                    "Custom Smart Pointer Library",
                                    "CLI-based Chat or Note App"
                                ]
                            },
                            {
                                "Career Preparation": [
                                    "Contribute to Open Source C++ Projects",
                                    "Join C++ Developer Communities",
                                    "Create GitHub Project Portfolio",
                                    "Resume & LinkedIn Optimization"
                                ]
                            }
                        ]
                    },
                    {
                        level: "Bonus",
                        title: "Specialization Paths",
                        topics: [
                            "Game Development with Unreal Engine (C++)",
                            "System Programming (OS concepts, Device Drivers)",
                            "Embedded Systems (Microcontrollers, C++17/20 in embedded)",
                            "Competitive Programming with C++ STL",
                            "Compiler Design (Lexers, Parsers, LLVM)"
                        ]
                    }
                ],
                tools_and_software: {
                    Languages: ["C++", "Bash", "CMake"],
                    Libraries: ["STL", "Boost", "Google Test", "OpenGL", "SDL2"],
                    Tools: ["GCC/Clang", "GDB", "Valgrind", "CMake", "Make"],
                    IDEs: ["VS Code", "CLion", "Visual Studio", "Qt Creator"],
                    VersionControl: ["Git", "GitHub"],
                    Debugging: ["Valgrind", "AddressSanitizer", "GDB"]
                },
                timeline: [
                    { week: "1–2", focus: "C++ Basics + DSA + OOP" },
                    { week: "3–4", focus: "Advanced OOP + Templates + File Handling" },
                    { week: "5–6", focus: "STL + Exception Handling + Smart Pointers" },
                    { week: "7–8", focus: "Multithreading + Modern C++ Features" },
                    { week: "9–10", focus: "CMake + Build Tools + Debugging" },
                    { week: "11–12", focus: "Design Patterns + Testing + Optimization" },
                    { week: "13–14", focus: "Portfolio Projects + GitHub + Resume" },
                    { week: "15+", focus: "Specializations (Game Dev, Embedded, OS, etc.)" }
                ]
            }
        ]
    },
    {
        skill_name: "C# Developer",
        type: "Skill-Based",
        desc: "Become a proficient C# Developer by mastering C# fundamentals, object-oriented design, .NET frameworks, APIs, databases, unit testing, and deployment practices.",
        months: 6,
        NumUsers: 0,
        technologies: ["C#", ".NET", "OOP", "LINQ", "Entity Framework", "ASP.NET Core", "REST APIs", "SQL Server", "Azure"],
        roadmap: [
            {
                title: "C# Developer Roadmap",
                goal: "Become a Job-Ready C# Developer",
                levels: [
                    {
                        level: "0",
                        title: "Foundations & Prerequisites",
                        topics: [
                            "Basic Programming Concepts (variables, loops, conditions)",
                            "Intro to Object-Oriented Programming",
                            "Data Structures & Algorithms Basics",
                            "Understanding IDEs (Visual Studio / Rider)",
                            "Git & GitHub Basics"
                        ]
                    },
                    {
                        level: "1",
                        title: "Core C# Programming",
                        topics: [
                            "C# Syntax, Types, and Control Flow",
                            "Classes, Objects, Inheritance, Polymorphism",
                            "Interfaces, Abstract Classes, Enums",
                            "Collections (List, Dictionary, Queue, Stack)",
                            "Exception Handling and Debugging",
                            "Delegates, Events, and Lambdas"
                        ]
                    },
                    {
                        level: "2",
                        title: "Advanced C# & LINQ",
                        topics: [
                            "Generics and Extension Methods",
                            "LINQ: Queries, Filtering, Grouping, Joins",
                            "Nullable Types and Null Safety",
                            "Async/Await and Task Parallelism",
                            "File I/O and Serialization (JSON/XML)",
                            "Understanding .NET Runtime and CLR"
                        ]
                    },
                    {
                        level: "3",
                        title: ".NET & Web Development",
                        topics: [
                            "ASP.NET Core MVC Basics",
                            "Razor Pages and Tag Helpers",
                            "Routing and Middleware",
                            "Building REST APIs with ASP.NET Core",
                            "Dependency Injection",
                            "Authentication and Authorization (JWT, Identity)"
                        ]
                    },
                    {
                        level: "4",
                        title: "Data Access & Persistence",
                        topics: [
                            "Relational Databases and SQL Basics",
                            "Entity Framework Core (Code-First & DB-First)",
                            "Migrations and LINQ Queries in EF Core",
                            "CRUD Operations with EF Core",
                            "Connecting APIs with SQL Server / SQLite",
                            "Intro to NoSQL (MongoDB with C#)"
                        ]
                    },
                    {
                        level: "5",
                        title: "Testing, Debugging & Deployment",
                        topics: [
                            "Unit Testing with xUnit / NUnit",
                            "Mocking (Moq or FakeItEasy)",
                            "Integration Testing in ASP.NET Core",
                            "Logging and Exception Tracking (Serilog, ELK)",
                            "Dockerize .NET Apps",
                            "Deploy to Azure (App Services, SQL DB, CI/CD)"
                        ]
                    },
                    {
                        level: "6",
                        title: "Projects, Resume & Job Prep",
                        topics: [
                            {
                                "Portfolio Projects": [
                                    "Blog Platform (ASP.NET + EF Core)",
                                    "ToDo API with JWT Authentication",
                                    "Library Management System with SQL",
                                    "Weather Forecasting App (API Integration)",
                                    "E-commerce Backend with Order Management"
                                ]
                            },
                            {
                                "Career Prep": [
                                    "Write clean, maintainable code (SOLID)",
                                    "Optimize LinkedIn & GitHub with real projects",
                                    "Practice Interview Questions (OOP, C#, .NET)",
                                    "Contribute to Open Source (.NET repos)"
                                ]
                            }
                        ]
                    }
                ],
                tools_and_software: {
                    Languages: ["C#"],
                    Frameworks: [".NET", "ASP.NET Core", "Entity Framework Core"],
                    Databases: ["SQL Server", "SQLite", "MongoDB"],
                    Testing: ["xUnit", "NUnit", "Moq"],
                    IDEs: ["Visual Studio", "Rider", "VS Code"],
                    Version_Control: ["Git", "GitHub"],
                    Deployment: ["Azure", "Docker"]
                },
                timeline: [
                    { week: "1–2", focus: "C# Basics & OOP" },
                    { week: "3–4", focus: "Advanced C# + LINQ + Async Programming" },
                    { week: "5–6", focus: "ASP.NET Core MVC & REST APIs" },
                    { week: "7–8", focus: "Entity Framework Core + SQL Server" },
                    { week: "9–10", focus: "Testing + Mocking + Logging" },
                    { week: "11–12", focus: "Deployment with Docker & Azure" },
                    { week: "13–14", focus: "Portfolio Projects + Job Prep" }
                ]
            }
        ]
    },
    {
        skill_name: "Kotlin Developer",
        type: "Skill-Based",
        desc: "Become a Job-Ready Kotlin Developer by mastering Kotlin fundamentals, Android app development, backend development with Ktor, testing, deployment, and advanced mobile concepts.",
        months: 6,
        NumUsers: 0,
        technologies: ["Kotlin", "OOP", "Coroutines", "Jetpack Compose", "Room DB", "Ktor", "Retrofit", "MVVM", "Firebase"],
        roadmap: [
            {
                title: "Kotlin Developer Roadmap",
                goal: "Become a Job-Ready Kotlin Developer",
                levels: [
                    {
                        level: "0",
                        title: "Prerequisites",
                        topics: [
                            "Basic Programming Logic (Variables, Loops, Conditions)",
                            "Object-Oriented Programming Concepts",
                            "Git & GitHub Basics",
                            "Java Basics (optional, but helps with Android)",
                            "IDE Setup (Android Studio, IntelliJ)"
                        ]
                    },
                    {
                        level: "1",
                        title: "Kotlin Fundamentals",
                        topics: [
                            "Kotlin Syntax, Variables, Data Types",
                            "Functions, Lambdas, Collections",
                            "Classes, Objects, Inheritance",
                            "Null Safety & Smart Casts",
                            "Extension Functions, Higher-Order Functions"
                        ]
                    },
                    {
                        level: "2",
                        title: "Asynchronous Programming",
                        topics: [
                            "Coroutines Basics (suspend, launch, async)",
                            "Scopes & Dispatchers",
                            "Channels, Flow API",
                            "Error Handling in Coroutines",
                            "Structured Concurrency"
                        ]
                    },
                    {
                        level: "3",
                        title: "Android Development Basics",
                        topics: [
                            "Activity & Fragment Lifecycle",
                            "UI Components (TextView, Button, RecyclerView)",
                            "Intent, Navigation, Toast, Dialogs",
                            "App Resources, Themes, Styles",
                            "Permissions, Broadcasts, Services"
                        ]
                    },
                    {
                        level: "4",
                        title: "Modern Android with Jetpack",
                        topics: [
                            "Jetpack Compose (Basic UI, State, Navigation)",
                            "ViewModel & LiveData",
                            "Data Persistence with Room DB",
                            "Dependency Injection (Hilt)",
                            "Navigation Component"
                        ]
                    },
                    {
                        level: "5",
                        title: "Networking & API Integration",
                        topics: [
                            "Retrofit + OkHttp",
                            "Moshi / Gson for JSON parsing",
                            "Interceptors, Logging, Error Handling",
                            "Calling REST APIs with Coroutines",
                            "API Paging & Response Caching"
                        ]
                    },
                    {
                        level: "6",
                        title: "Kotlin Backend with Ktor",
                        topics: [
                            "Ktor Basics (Routing, Requests, Responses)",
                            "Handling Forms, JSON, Files",
                            "Database Integration (Exposed/SQLDelight)",
                            "JWT Auth & Sessions",
                            "Deploy Ktor App to Heroku / Render"
                        ]
                    },
                    {
                        level: "7",
                        title: "Firebase & Third-party Services",
                        topics: [
                            "Firebase Auth & Realtime Database",
                            "Cloud Firestore & Storage",
                            "Push Notifications with FCM",
                            "Crashlytics & Analytics",
                            "Google Maps, Stripe, etc. Integrations"
                        ]
                    },
                    {
                        level: "8",
                        title: "Testing & Debugging",
                        topics: [
                            "Unit Testing (JUnit, Kotlin Test)",
                            "UI Testing with Espresso & Compose Test",
                            "Mocking with Mockito / MockK",
                            "Crash & Log Analysis",
                            "Performance Profiling"
                        ]
                    },
                    {
                        level: "9",
                        title: "Deployment & Play Store",
                        topics: [
                            "App Signing & Versioning",
                            "Building APK/AAB",
                            "Testing Tracks (Alpha, Beta)",
                            "Publishing on Google Play",
                            "Release Checklist & ASO Basics"
                        ]
                    },
                    {
                        level: "10",
                        title: "Portfolio, Resume & Freelancing",
                        topics: [
                            {
                                "Portfolio Projects": [
                                    "To-Do App (Jetpack Compose + Room + MVVM)",
                                    "Weather App with Retrofit & Ktor API",
                                    "Realtime Chat App (Firebase)",
                                    "Expense Tracker App with Charts",
                                    "Blog App with Backend in Ktor"
                                ]
                            },
                            {
                                "Career Prep": [
                                    "Optimized Resume with GitHub Links",
                                    "LinkedIn Optimization",
                                    "Freelance Platforms (Upwork, Fiverr, Toptal)",
                                    "Job Portals & Android Dev Communities"
                                ]
                            }
                        ]
                    }
                ],
                tools_and_software: {
                    Language: ["Kotlin", "Java (optional)"],
                    Android: ["Jetpack Compose", "ViewModel", "LiveData", "Room DB"],
                    Networking: ["Retrofit", "OkHttp", "Moshi"],
                    Backend: ["Ktor", "Exposed"],
                    Firebase: ["Auth", "Firestore", "FCM"],
                    Tools: ["Android Studio", "Git", "Postman", "ADB", "Firebase Console"],
                    Testing: ["JUnit", "Espresso", "MockK"],
                    Deployment: ["Google Play Console", "Heroku", "Render"]
                },
                timeline: [
                    { week: "1–2", focus: "Kotlin Fundamentals" },
                    { week: "3–4", focus: "Coroutines & Async Programming" },
                    { week: "5–7", focus: "Android Basics + Jetpack" },
                    { week: "8–9", focus: "Networking & API Integration" },
                    { week: "10–11", focus: "Ktor Backend & Deployment" },
                    { week: "12–13", focus: "Firebase Integration & Push" },
                    { week: "14–15", focus: "Testing & Debugging" },
                    { week: "16", focus: "Deployment & Play Store Launch" },
                    { week: "17–18", focus: "Portfolio Projects + Resume Prep" }
                ]
            }
        ]
    },
    {
        skill_name: "Rust Developer",
        type: "Skill-Based",
        desc: "Master the Rust programming language and build efficient, safe, and high-performance applications ranging from system-level tools to web backends and embedded software.",
        months: 6,
        NumUsers: 0,
        technologies: [
            "Rust Language Core",
            "Ownership & Borrowing",
            "Cargo & Crates",
            "Lifetimes",
            "Concurrency",
            "Async Programming",
            "Tokio/Actix",
            "WASM",
            "Rocket/Tide",
            "Tauri",
            "Serde",
            "Rust for Systems & Embedded"
        ],
        roadmap: [
            {
                title: "Rust Developer Roadmap",
                goal: "Become a Production-Ready Rust Developer",
                levels: [
                    {
                        level: "0",
                        title: "Prerequisites",
                        topics: [
                            "Basic Programming Knowledge (any language)",
                            "Computer Science Fundamentals (DSA, OOP, Memory)",
                            "Understanding of Compilation and Execution",
                            "Git & GitHub Basics",
                            "Command Line Basics"
                        ]
                    },
                    {
                        level: "1",
                        title: "Core Rust Fundamentals",
                        topics: [
                            "Variables, Mutability, Shadowing",
                            "Data Types, Pattern Matching",
                            "Functions, Control Flow",
                            "Ownership, Borrowing, and Lifetimes",
                            "Error Handling (Result, Option)"
                        ]
                    },
                    {
                        level: "2",
                        title: "Tooling & Project Setup",
                        topics: [
                            "Cargo (build, run, test, doc)",
                            "Crates.io and Dependencies",
                            "Module System and Visibility",
                            "Rustfmt, Clippy, and Docs",
                            "Testing in Rust (unit, integration)"
                        ]
                    },
                    {
                        level: "3",
                        title: "Intermediate Rust Concepts",
                        topics: [
                            "Enums & Pattern Matching Deep Dive",
                            "Traits, Generics, and Trait Bounds",
                            "Lifetimes Explained",
                            "Smart Pointers (Box, Rc, RefCell)",
                            "Macros (Declarative & Procedural basics)"
                        ]
                    },
                    {
                        level: "4",
                        title: "Memory Safety & Performance",
                        topics: [
                            "Stack vs Heap in Rust",
                            "Zero-Cost Abstractions",
                            "Unsafe Rust (basics only)",
                            "Benchmarking & Profiling Tools"
                        ]
                    },
                    {
                        level: "5",
                        title: "Concurrency & Async Programming",
                        topics: [
                            "Threads and Message Passing",
                            "Mutex, Arc, and Channels",
                            "Async/Await Syntax",
                            "Futures and Streams",
                            "Using Tokio and async-std"
                        ]
                    },
                    {
                        level: "6",
                        title: "Rust for Web Development",
                        topics: [
                            "REST APIs using Actix-web or Rocket",
                            "Database Integration with SQLx/Diesel",
                            "JSON Handling with Serde",
                            "Authentication & Middleware",
                            "WebSocket Support"
                        ]
                    },
                    {
                        level: "7",
                        title: "GUI and Desktop Apps",
                        topics: [
                            "Intro to Tauri (Rust + WebView)",
                            "Building Cross-Platform Desktop Apps",
                            "Basic GUI Design with egui or Dioxus",
                            "Packaging & Distribution"
                        ]
                    },
                    {
                        level: "8",
                        title: "Rust for WASM (WebAssembly)",
                        topics: [
                            "Compiling Rust to WASM",
                            "Using wasm-bindgen and web-sys",
                            "Interfacing with JavaScript",
                            "Building Rust-powered Web Apps"
                        ]
                    },
                    {
                        level: "9",
                        title: "Rust for Systems & Embedded",
                        topics: [
                            "Low-Level Programming with Rust",
                            "Writing Safe Drivers and Kernels",
                            "Bare Metal Rust with no_std",
                            "Microcontroller Programming (e.g., STM32, ESP32)"
                        ]
                    },
                    {
                        level: "10",
                        title: "Portfolio, Resume & Job Preparation",
                        topics: [
                            {
                                "Portfolio Projects": [
                                    "Rust CLI Tool (e.g., file watcher, task manager)",
                                    "Web Server API using Actix",
                                    "Tauri Desktop App",
                                    "WASM Game or App",
                                    "Embedded Rust Blink Program or Sensor Reader"
                                ]
                            },
                            {
                                "Resume & LinkedIn": [
                                    "Add GitHub Projects & Crates",
                                    "Include Benchmarks & Safety Metrics",
                                    "Write Blogs on Medium or Dev.to",
                                    "Join Rust Discord & Community Forums"
                                ]
                            }
                        ]
                    },
                    {
                        level: "Bonus",
                        title: "Rust Ecosystem & Open Source",
                        topics: [
                            "Contribute to Rust Projects",
                            "Understand Rust RFCs & Compiler Internals",
                            "Explore async-graphql, axum, yew",
                            "Follow Rustacean Principles & Updates"
                        ]
                    }
                ],
                tools_and_software: {
                    Languages: ["Rust"],
                    "Build Tools": ["Cargo"],
                    "Web Frameworks": ["Actix-web", "Rocket", "Tide"],
                    "Async Libraries": ["Tokio", "async-std"],
                    "Serialization": ["Serde", "ron"],
                    "Frontend/ GUI": ["Tauri", "Yew", "egui"],
                    WASM: ["wasm-bindgen", "web-sys"],
                    Testing: ["cargo test", "mockito"],
                    IDEs: ["VS Code (rust-analyzer)", "CLion", "Zed"]
                },
                timeline: [
                    { week: "1–2", focus: "Rust Basics & Ownership" },
                    { week: "3–4", focus: "Cargo, Modules, Traits, Lifetimes" },
                    { week: "5–6", focus: "Concurrency, Smart Pointers" },
                    { week: "7–8", focus: "Async Rust & Tokio" },
                    { week: "9–10", focus: "Web Development with Actix/Rocket" },
                    { week: "11–12", focus: "WASM & Tauri" },
                    { week: "13–14", focus: "Embedded Rust or Systems Programming" },
                    { week: "15–16", focus: "Projects, Resume, Job Readiness" }
                ]
            }
        ]
    },
    {
        skill_name: "JavaScript Developer",
        type: "Skill-Based",
        desc: "Master modern JavaScript development, from fundamentals to building scalable web apps using popular frameworks, tools, and best practices.",
        months: 6,
        NumUsers: 0,
        key_concepts: [
            "JavaScript (ES6+)",
            "DOM Manipulation",
            "Asynchronous JS (Promises, Async/Await)",
            "Web APIs & Fetch",
            "NPM & Modules",
            "Frontend Frameworks (React, Vue)",
            "Bundlers (Webpack, Vite)",
            "Node.js & Express",
            "MongoDB",
            "Testing, Deployment & DevOps"
        ],
        roadmap: [
            {
                title: "JavaScript Developer Roadmap",
                goal: "Become a Job-Ready JavaScript Developer",
                levels: [
                    {
                        level: "0",
                        title: "Computer Fundamentals & Tools",
                        topics: [
                            "Typing Practice (40+ WPM)",
                            "Basic Computer Networking",
                            "Command Line (Linux CLI)",
                            "Git & GitHub",
                            "VS Code Setup & Extensions",
                            "Chrome DevTools"
                        ]
                    },
                    {
                        level: "1",
                        title: "JavaScript Fundamentals",
                        topics: [
                            "Variables (let, const, var)",
                            "Data Types, Operators",
                            "Control Structures (if, switch, loops)",
                            "Functions (declaration, expression, arrow)",
                            "Objects, Arrays, and Iteration",
                            "Scope, Hoisting, Closures"
                        ]
                    },
                    {
                        level: "2",
                        title: "Intermediate JavaScript & DOM",
                        topics: [
                            "DOM Traversal & Manipulation",
                            "Events & Event Delegation",
                            "Form Handling",
                            "LocalStorage & SessionStorage",
                            "ES6 Features: Destructuring, Spread, Rest",
                            "Modules (import/export)"
                        ]
                    },
                    {
                        level: "3",
                        title: "Asynchronous JavaScript",
                        topics: [
                            "Callbacks & Callback Hell",
                            "Promises & .then() chaining",
                            "Async/Await",
                            "Error Handling in Async Code",
                            "Fetch API & working with JSON",
                            "Intro to APIs & REST"
                        ]
                    },
                    {
                        level: "4",
                        title: "Modern Frontend Development",
                        topics: [
                            "React Basics (JSX, Props, State)",
                            "React Lifecycle & Hooks (useState, useEffect)",
                            "Component Design & Composition",
                            "Routing (React Router)",
                            "State Management (Context API, Redux Basics)",
                            "Form Libraries (Formik, React Hook Form)"
                        ]
                    },
                    {
                        level: "5",
                        title: "Tooling & Ecosystem",
                        topics: [
                            "NPM & Yarn",
                            "Package.json & Scripts",
                            "Module Bundlers (Webpack, Vite)",
                            "Babel (JS Compiler)",
                            "Linting (ESLint, Prettier)",
                            "Version Control Best Practices (Branching, PRs)"
                        ]
                    },
                    {
                        level: "6",
                        title: "Backend with Node.js",
                        topics: [
                            "Node.js & Event Loop",
                            "Core Modules (fs, path, http)",
                            "Express.js (Routing, Middleware)",
                            "REST API Development",
                            "CRUD with MongoDB (Mongoose)",
                            "Authentication (JWT, Bcrypt)"
                        ]
                    },
                    {
                        level: "7",
                        title: "Testing & Debugging",
                        topics: [
                            "Console, Breakpoints, Network Tab",
                            "Unit Testing with Jest",
                            "React Testing Library",
                            "Postman for API Testing",
                            "Error Handling Patterns"
                        ]
                    },
                    {
                        level: "8",
                        title: "DevOps & Deployment",
                        topics: [
                            "Build & Optimize React Apps",
                            "CI/CD Basics (GitHub Actions)",
                            "Environment Variables & Secrets",
                            "Docker Basics (build, run)",
                            "Deploy Frontend (Netlify, Vercel)",
                            "Deploy Backend (Render, Railway)"
                        ]
                    },
                    {
                        level: "9",
                        title: "Portfolio & Job Readiness",
                        topics: [
                            {
                                "Portfolio Projects": [
                                    "Full-Stack Todo App (React + Node.js)",
                                    "Blog App with Markdown Editor",
                                    "API-based Weather or News App",
                                    "Real-Time Chat App with Socket.io",
                                    "Portfolio Website with Animations"
                                ]
                            },
                            {
                                "Resume & LinkedIn": [
                                    "Highlight personal projects with GitHub links",
                                    "Add technical blogs (Dev.to, Hashnode)",
                                    "Contribute to Open Source",
                                    "Practice coding interviews (LeetCode, JS-specific)"
                                ]
                            }
                        ]
                    },
                    {
                        level: "Bonus",
                        title: "Advanced & Performance Topics",
                        topics: [
                            "Progressive Web Apps (PWAs)",
                            "WebSockets & Real-time Apps",
                            "Service Workers & Caching",
                            "Web Performance Optimization",
                            "SSR vs CSR (Next.js)",
                            "TypeScript Basics"
                        ]
                    }
                ],
                tools_and_software: {
                    Languages: ["JavaScript (ES6+)", "Node.js", "HTML", "CSS"],
                    Frameworks: ["React", "Express"],
                    Databases: ["MongoDB"],
                    Deployment: ["Netlify", "Vercel", "Render", "Railway"],
                    DevTools: ["VS Code", "Chrome DevTools", "Postman"],
                    Testing: ["Jest", "React Testing Library"],
                    "CI/ CD": ["GitHub Actions", "Docker"],
                    VersionControl: ["Git", "GitHub"]
                },
                timeline: [
                    { week: "1–2", focus: "JavaScript Basics & DOM Manipulation" },
                    { week: "3–4", focus: "Async JS, Fetch API, Browser APIs" },
                    { week: "5–6", focus: "React Fundamentals & Routing" },
                    { week: "7–8", focus: "Tooling, State Management & Forms" },
                    { week: "9–10", focus: "Node.js + Express + MongoDB" },
                    { week: "11–12", focus: "Testing, Debugging & Deployment" },
                    { week: "13–14", focus: "Capstone Projects & Resume Building" },
                    { week: "15+", focus: "Bonus: TypeScript, PWA, Next.js" }
                ]
            }
        ]
    }







    //
]);