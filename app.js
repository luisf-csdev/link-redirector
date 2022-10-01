/* MONGODB MONGOOSE */

//CONNECTING TO DATABASE
// through callback
// const express = require('express');
// const app = express();
// const port = 3000;
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/local', (error, db) => {
//     console.log(error);
//     console.log(db);
// });

// app.get('/', (req, res) => res.send('Hello World!'));

// app.listen(port, () => console.log(`Sample app listening on port ${port}`));

//node app -> executar código, não há problema se colocar database inexistente

// through then
// const express = require('express');
// const app = express();
// const port = 3000;
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/local')
//     .then(db => console.log(db))
//     .catch(error => console.log(error));

// app.get('/', (req, res) => res.send('Hello World!'));

// app.listen(port, () => console.log(`Sample app listening on port ${port}`));

// through variable
// const express = require('express');
// const app = express();
// const port = 3000;
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/local')

// let db = mongoose.connection;

// db.on('error', () => console.log('an error occurred'));
// db.once('open', () => console.log('database loaded'));

// app.get('/', (req, res) => res.send('Hello World!'));

// app.listen(port, () => console.log(`Sample app listening on port ${port}`));


//CREATING DOCUMENTS
// const express = require('express');
// const app = express();
// const port = 3000;
// const mongoose = require('mongoose');

// const linkSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     description: String,
//     url: { type: String, required: true },
//     click: { type: Number, default: 0 }
// });

// const Link = mongoose.model('Link', linkSchema);

// let link = new Link({
//     title: 'luisf-csdev',
//     description: 'Link to LinkedIn',
//     url: 'https://linkedin/in/luisf-csdev'
// });

// mongoose.connect('mongodb://localhost/link')

// let db = mongoose.connection;

// db.on('error', () => console.log('an error occurred'));
// db.once('open', () => {
//     console.log('database loaded');
//     link.save().then(doc => console.log(doc))
//         .catch(err => console.log(err));
// });

// app.get('/', (req, res) => res.send('Hello World!'));

// app.listen(port, () => console.log(`Sample app listening on port ${port}`));


// SEARCHING A DOCUMENT
// const express = require('express');
// const app = express();
// const port = 3000;
// const mongoose = require('mongoose');

// const linkSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     description: String,
//     url: { type: String, required: true },
//     click: { type: Number, default: 0 }
// });

// const Link = mongoose.model('Link', linkSchema);

// mongoose.connect('mongodb://localhost/link')

// let db = mongoose.connection;

// db.on('error', () => console.log('an error occurred'));
// db.once('open', () => {
//     console.log('database loaded')

//     app.get('/:title', async (req, res) => {

//         let title = req.params.title;
//         try {
//             let doc = await Link.findOne({ title });
//             res.redirect(doc.url);
//         } catch (error) {
//             res.send(error);
//         }
//     })

// });

// app.get('/', (req, res) => res.send('Hello World!'));

// app.listen(port, () => console.log(`Sample app listening on port ${port}`));


//ORGANIZING THE CODE
// const express = require('express');
// const app = express();
// const port = 3000;
// const mongoose = require('mongoose');
// const linkRoute = require('./routes/linkRoute');

// mongoose.connect('mongodb://localhost/link')

// let db = mongoose.connection;

// db.on('error', () => console.log('an error occurred'));
// db.once('open', () => console.log('database loaded'));

// app.use('/', linkRoute);

// app.listen(port, () => console.log(`Example app listening on port ${port}`));


//CREATING A DOCUMENT BY FORMS 
// const express = require('express');
// const app = express();
// const port = 3000;
// const mongoose = require('mongoose');
// const linkRoute = require('./routes/linkRoute');

// mongoose.connect('mongodb://localhost/link')

// let db = mongoose.connection;

// db.on('error', () => console.log('an error occurred'));
// db.once('open', () => console.log('database loaded'));

// app.use('/', linkRoute);

// app.listen(port, () => console.log(`Example app listening on port ${port}`));


//INTEGRATING WITH FRONTEND
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const path = require('path');
const linkRoute = require('./routes/linkRoute');

mongoose.connect('mongodb://localhost/link');

let db = mongoose.connection;

db.on('error', () => console.log('an error occurred'));
db.once('open', () => console.log('database loaded'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use('/', linkRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}`));