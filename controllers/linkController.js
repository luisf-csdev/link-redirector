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
//         res.render('all', { links });
//     } catch (error) {
//         res.send(error);
//     }
// }

// module.exports = { redirect, addLink, allLinks, deleteLink };


//DELETING A DOC
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
//         res.render('all', { links });
//     } catch (error) {
//         res.send(error);
//     }
// }

// const deleteLink = async (req, res) => {

//     let id = req.params.id;
//     if (!id) {
//         id = req.body.id;
//     }

//     try {
//         res.send(await Link.findByIdAndDelete(id));
//     } catch (error) {
//         res.send(error);
//     }
// }

// module.exports = { redirect, addLink, allLinks, deleteLink };


//DELETING A DOC -  FRONTEND
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
//         res.render('all', { links });
//     } catch (error) {
//         res.send(error);
//     }
// }

// const deleteLink = async (req, res) => {

//     let id = req.params.id;
//     if (!id) {
//         id = req.body.id;
//     }

//     try {
//         await Link.findByIdAndDelete(id);
//         res.send(id);
//     } catch (error) {
//         res.status(404).send(error);
//     }
// }

// module.exports = { redirect, addLink, allLinks, deleteLink };


//ANOTHER WAY TO DELETE - FORM METHOD OVERRIDE
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
//         res.render('all', { links });
//     } catch (error) {
//         res.send(error);
//     }
// }

// const deleteLink = async (req, res) => {

//     let id = req.params.id;
//     if (!id) {
//         id = req.body.id;
//     }

//     try {
//         await Link.findByIdAndDelete(id);
//         res.redirect('/all');
//     } catch (error) {
//         res.status(404).send(error);
//     }
// }

// module.exports = { redirect, addLink, allLinks, deleteLink };


//ADJUSTING ROUTES
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
//         res.redirect('/');
//     } catch (error) {
//         res.render('index', { error, body: req.body });
//     }
// }

// const allLinks = async (req, res) => {
//     try {
//         let links = await Link.find({});
//         res.render('all', { links });
//     } catch (error) {
//         res.send(error);
//     }
// }

// const deleteLink = async (req, res) => {

//     let id = req.params.id;
//     if (!id) {
//         id = req.body.id;
//     }

//     try {
//         await Link.findByIdAndDelete(id);
//         res.redirect('/');
//     } catch (error) {
//         res.status(404).send(error);
//     }
// }

// module.exports = { redirect, addLink, allLinks, deleteLink };


//EDITING LINKS
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
        res.redirect('/');
    } catch (error) {
        res.render('add', { error, body: req.body });
    }
}

const allLinks = async (req, res) => {
    try {
        let docs = await Link.find({});
        res.render('all', { links: docs });
    } catch (error) {
        res.send(error);
    }
}

const deleteLink = async (req, res) => {

    let id = req.params.id;
    if (!id) {
        id = req.body.id;
    }

    try {
        await Link.findByIdAndDelete(id);
        res.redirect('/');
    } catch (error) {
        res.status(404).send(error);
    }
}

const loadLink = async (req, res) => {

    let id = req.params.id;
    try {
        let doc = await Link.findById(id);
        res.render('edit', { error: false, body: doc });
    } catch (error) {
        res.status(404).send(error);
    }
}

const editLink = async (req, res) => {

    let link = {};
    link.title = req.body.title;
    link.description = req.body.description;
    link.url = req.body.url;

    let id = req.params.id;
    if (!id) {
        id = req.body.id;
    }

    console.log(id);

    try {
        let doc = await Link.findByIdAndUpdate(id, link);
        // let doc = await Link.updateOne({ _id: id }, link);
        res.redirect('/');
    } catch (error) {
        res.render('edit', { error, body: req.body });
    }
}

module.exports = { redirect, addLink, allLinks, deleteLink, loadLink, editLink };