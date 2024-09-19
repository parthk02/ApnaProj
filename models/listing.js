const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required : true,
    },
    description : String,
    image : {
        type: {
            filename: { type: String, required: true },
            url: { type: String, required: true }
        },
        required: true,
        default: {
            filename: "default-image.jpg",
            url: "https://images.pexels.com/photos/21228360/pexels-photo-21228360/free-photo-of-sunlight-over-mountain-silhouette-at-sunset.jpeg"
        }
    },
    price : Number,
    location : String,
    country: String,
});

const Listing =  mongoose.model("Listing", listingSchema);

module.exports = Listing;