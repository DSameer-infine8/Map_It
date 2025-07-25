const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;
const mongoURL = process.env.mongoURL;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
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



console.log(port);