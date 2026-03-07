const app = require("./app");
require('dotenv').config();
const connectDB = require('./DB/db')

connectDB();



app.listen(3000, () => {
    console.log ('server is running on port 3000');
})