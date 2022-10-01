// ORGANIZING THE CODE
// const Link = require('../models/Link');

// const redirect = async (req, res) => {
//     let title = req.params.title;
//     try {
//         let doc = await Link.findOne({ title });
//         res.redirect(doc.url);
//     } catch (error) {
//         res.send(`There was an error: ${error}`);
//     }
// }

// module.exports = { redirect };


// CREATING A DOCUMENT BY FORMS 
// const Link = require('../models/Link');

// const redirect = async (req, res) => {
//     let title = req.params.title;
//     try {
//         let doc = await Link.findOne({ title });
//         res.redirect(doc.url);
//     } catch (error) {
//         res.send(`There was an error: ${error}`);
//     }
// }

// const addLink = async (req, res) => {

//     let link = new Link(req.body);

//     try {
//         let doc = await link.save();
//         res.send(doc);
//     } catch (error) {
//         res.send(`There was an error: ${error}`);
//     }

// }

// module.exports = { redirect, addLink };


//INTEGRATING WITH FRONTEND
// const Link = require('../models/Link');

// const redirect = async (req, res) => {
//     let title = req.params.title;
//     try {
//         let doc = await Link.findOne({ title });
//         res.redirect(doc.url);
//     } catch (error) {
//         res.send(`There was an error: ${error}`);
//     }
// }

// const addLink = async (req, res) => {

//     let link = new Link(req.body);

//     try {
//         let doc = await link.save();
//         res.send("Link successfully added!");
//     } catch (error) {
//         res.render('index', { error, body: req.body });
//     }

// }

// module.exports = { redirect, addLink };


//SEARCHING ALL LINKS
// const Link = require('../models/Link');

// const redirect = async (req, res) => {
//     let title = req.params.title;
//     try {
//         let doc = await Link.findOne({ title });
//         res.redirect(doc.url);
//     } catch (error) {
//         res.send(`There was an error: ${error}`);
//     }
// }

// const addLink = async (req, res) => {

//     let link = new Link(req.body);

//     try {
//         let doc = await link.save();
//         res.send("Link successfully added!");
//     } catch (error) {
//         res.render('index', { error, body: req.body });
//     }
// }

// const allLinks = async (req, res) => {
//     try {
//         let links = await Link.find({});
//         res.send(links);
//     } catch (error) {
//         res.send(error);
//     }
// }

// module.exports = { redirect, addLink, allLinks };


//SHOWING LINKS ON SCREEN
const Link = require('../models/Link');

const redirect = async (req, res) => {
    let title = req.params.title;
    try {
        let doc = await Link.findOne({ title });
        res.redirect(doc.url);
    } catch (error) {
        res.send(`There was an error: ${error}`);
    }
}

const addLink = async (req, res) => {

    let link = new Link(req.body);

    try {
        let doc = await link.save();
        res.send("Link successfully added!");
    } catch (error) {
        res.render('index', { error, body: req.body });
    }
}

const allLinks = async (req, res) => {
    try {
        let links = await Link.find({});
        res.render('all', { links });
    } catch (error) {
        res.send(error);
    }
}

module.exports = { redirect, addLink, allLinks };