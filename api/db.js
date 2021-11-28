const mongoose = require("mongoose");
const {Schema, model} = mongoose;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(_ => " db connected success").catch(e => console.log("connect db error", e));

const urlSchema = new Schema({
    short_url: {type: String, required: true},
    original_url: {type: String, required: true}
}, {collection: 'url'})

const urlModel = model("url", urlSchema)

module.exports = urlModel;
