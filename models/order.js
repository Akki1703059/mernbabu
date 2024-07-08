const mongoose = require("mongoose");

const order = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user",

    },
    book: {
        type: mongoose.Types.ObjectId,
        ref: "books",

    },
    status: {
        type: String,
         default: "order Placed",
         enum: ["order Placed","out of delivery","delivered","canceled"],


    },
},{ timestamps: true}
);

module.exports = mongoose.model("order", order);