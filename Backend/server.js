const express = require("express");
const app = express();
const user = require("./models/user");

app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name,
        email,
        password,
    })

    res.send(createduser);
})


app.listen(3000, () => {
    console.log("Server started on port 3000");
})