require("dotenv").config();
const mongoose = require("mongoose");
const PORT = 3000;
const app = require("./app");

mongoose.connect(process.env.DB_URL)
.then(() => console.log("Connected to DB..."))
.catch(() => console.log("Error while connecting to DB"))

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})