const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Note = require("./modles/Note");

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
mongoose.connect("mongodb+srv://krishnapal1234:kk1234@cluster0.mhnx7cz.mongodb.net/backsdb").then(function()
{
    app.get("/",function(req, res){
       const response = { message: "API Works!"};
       res.json(response);
    });
    const noteRouter = require("./routes/Note")
    app.use("/notes",noteRouter);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,function(){
    console.log("Server Started ar Port:" + PORT)
});