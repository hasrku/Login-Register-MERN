const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/user");

const app = express();
app.use(express.json());
app.use(cors());
const port = 5000;

mongoose
    .connect("mongodb://localhost:27017/testlogin")
    .then(() => console.log("connected to database"))
    .catch((err) => console.log("database connection failed: ", err));

// this is to render "server is running" text
// when we visit "http://localhost:5000"
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// sign up request listener
app.post("/signup", async (req, res) => {
    const { name, password, username } = req.body;
    console.log({ name, password, username });
    try {
        const newUser = await userModel.create({ name, password, username });
        res.status(201).json({
            message: "User created successfully",
            status: "success",
        });
    } catch (err) {
        res.status(200).json({
            message: "User already exists",
            status: "fail",
        });
    }
});

//login request listener
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    userModel.findOne({ username: username }).then((user) => {
        if (user) {
            if (user.password === password) {
                res.status(200).json({
                    message: "login successfull",
                    status: "success",
                    name: user.name,
                });
            } else {
                res.status(200).json({
                    message: "incorrect password entered",
                    status: "fail",
                    name: "",
                });
            }
        } else {
            res.status(200).json({
                message: "User does'nt exist",
                status: "fail",
                name: "",
            });
        }
    });
});

//start the server
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
