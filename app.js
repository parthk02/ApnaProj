const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js")
const path = require("path");


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"

main().then((req,res) => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

// app.get("/testListings", async(req,res) =>{
//     let sampleListing = new Listing({
//         title : "Friends Apartment",
//         description:" Shreya ka Ghar",
//         price:100000,
//         location:"Bhuwana , Udaipur",
//         country:"India",
//     });

//     await sampleListing.save(); 
//     console.log("sample was saved");
//     res.send("successful testing")
// })

app.get("/", (req, res) => {
    res.send("Hello i am root !");
});

app.get("/listings", async (req,res) =>{
     const allListings = await Listing.find({});
     res.render("index.ejs",{allListings});
})


app.listen(8080, () => {
    console.log(`app listening on port 8080`);
});