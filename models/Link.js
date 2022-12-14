// ORGANIZING THE CODE
// const mongoose = require('mongoose');

// const linkSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     description: String,
//     url: { type: String, required: true },
//     click: { type: Number, default: 0 }
// });

// module.exports= mongoose.model('Link', linkSchema);


// CREATING A DOCUMENT BY FORMS 
// const mongoose = require('mongoose');

// const linkSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     description: String,
//     url: { type: String, required: true },
//     click: { type: Number, default: 0 }
// });

// module.exports= mongoose.model('Link', linkSchema);


//INTEGRATING WITH FRONTEND
const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    url: { type: String, required: true },
    click: { type: Number, default: 0 }
});

module.exports = mongoose.model('Link', linkSchema);