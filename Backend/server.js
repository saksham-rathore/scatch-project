const express = require("express");
const app = express();
const user = require("../models/user");

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
})