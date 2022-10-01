// ORGANIZING THE CODE
// const express = require('express');
// const router = express.Router();
// const linkController = require('../controllers/linkController')

// router.get('/:title', linkController.redirect)

// router.get('/', (req, res) => res.send('Hello World!'));

// module.exports = router;


// CREATING A DOCUMENT BY FORMS 
// const express = require('express');
// const router = express.Router();
// const linkController = require('../controllers/linkController')

// router.get('/:title', linkController.redirect)

// router.get('/', (req, res) => res.send('Hello World!'));

// router.post('/', express.urlencoded({ extended: true}), linkController.addLink);

// module.exports = router;


//INTEGRATING WITH FRONTEND
const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController')

router.get('/:title', linkController.redirect)

router.get('/', (req, res) => res.render('index', { error: false, body: {} }));

router.post('/', express.urlencoded({ extended: true }), linkController.addLink);

module.exports = router;