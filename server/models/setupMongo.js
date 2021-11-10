const mongoose = require("mongoose");

// const uri = "mongodb+srv://admin:Al4zXsDnNl27@cluster0.ryq0e.mongodb.net/TodoAppDb?retryWrites=true&w=majority";
const uri = process.env.DB_URI;

function connect() {
    const options = { useNewUrlParser:true };
    mongoose.connect(uri, options).then(
        () => { console.log("Database connection established."); },
        err => { console.log("Error connecting Database instance due to: ", err); }
    )
}

module.exports = connect